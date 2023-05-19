import React, { useEffect, useState } from "react";
import Tile from "../Tile";

import { GridDiv, Icon, Win } from "./styles";

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 3, 5],
    [3, 6, 9],
    [3, 5, 7],
    [1, 4, 9],
];

const Grid = () => {
    const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [player, setPlayer] = useState<number>(1);
    const [playerOneTiles, setPlayerOneTiles] = useState<number[]>([]);
    const [playerTwoTiles, setPlayerTwoTiles] = useState<number[]>([]);
    const winner = checkWinner();

    // const [winner, setWinner];

    const sort = (tiles: number[], number: number) => {
        tiles.push(number);
        tiles.sort((a, b) => a - b);
        return tiles;
    };

    const playTurn = (number: number) => {
        if (
            playerOneTiles.includes(number) ||
            playerTwoTiles.includes(number) ||
            winner
        ) {
            return;
        }

        if (player === 1) {
            let tiles = [...playerOneTiles];
            sort(tiles, number);

            setPlayerOneTiles(tiles);
            setPlayer(2);
        } else if (player === 2) {
            let tiles = [...playerTwoTiles];
            sort(tiles, number);

            setPlayerTwoTiles(tiles);
            setPlayer(1);
        }
    };

    function containsWinningCombo(targetArray: number[]) {
        return winningCombos.some((subArray: number[]) => {
            // Check if each element in the targetArray exists in the current array
            return (
                subArray.length === targetArray.length &&
                subArray.every((value, index) => value === targetArray[index])
                // every value in the subarray equals the same value at the same index of the target array
            );
        });
    }

    function checkWinner() {
        let winner;
        if (containsWinningCombo(playerOneTiles)) {
            console.log("playerOneWins");
            winner = "one";
        } else if (containsWinningCombo(playerTwoTiles)) {
            console.log("playerTwoWins");
            winner = "two";
        }
        return winner;
    }

    const reset = () => {
        setPlayerOneTiles([]);
        setPlayerTwoTiles([]);
    };

    const isNaught = (number: number) => {
        if (playerOneTiles.includes(number)) {
            return (
                <Icon>
                    {" "}
                    <svg>
                        <circle
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            cy="53"
                            cx="53"
                            r="40"
                            stroke="white"
                            stroke-width="20"
                            fill="#caffbf"
                        />
                    </svg>
                </Icon>
            );
        } else if (playerTwoTiles.includes(number)) {
            return (
                <Icon type="cross">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        overflow="visible"
                        stroke="white"
                        stroke-width="13"
                    >
                        <line x2="50" y2="50" />
                        <line x1="50" y2="50" />
                    </svg>
                </Icon>
            );
        }
    };

    return (
        <div>
            <GridDiv>
                {tiles.map((num, i) => {
                    return (
                        <Tile
                            key={i}
                            playTurn={playTurn}
                            number={num}
                            isNaught={isNaught}
                        />
                    );
                })}
            </GridDiv>
            <Win>
                {winner && (
                    <>
                        <p>win</p>
                        <span onClick={reset}>reset</span>
                    </>
                )}
            </Win>
        </div>
    );
};

export default Grid;

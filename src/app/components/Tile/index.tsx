import React from "react";

import { TileDiv } from "./styles";

interface Props {
    playTurn: (number: number) => void;
    number: number;
    isNaught: (number: number) => React.JSX.Element | undefined;
}

const Tile = ({ playTurn, number, isNaught }: Props) => {
    return (
        <TileDiv onClick={() => playTurn(number)}>
            <div>{isNaught(number)}</div>
        </TileDiv>
    );
};

export default Tile;

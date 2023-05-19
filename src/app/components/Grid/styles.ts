import styled, { css } from "styled-components";

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(
        3,
        1fr
    ); /* Adjust the number of columns as needed */
    grid-gap: 0px; /* Adjust the gap size between grid cells */
    border: 5px solid white;
    height: 400px;
    width: 400px;
    background-color: #caffbf;
`;

interface IconProps {
    type?: string;
}

export const Icon = styled.div<IconProps>`
    height: 90%;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        height: 100%;
        width: 100%;
    }

    ${({ type }: IconProps) => {
        return (
            type === "cross" &&
            css`
                width: 70%;
                height: 70%;
            `
        );
    }}
`;

export const Win = styled.p`
    text-align: center;
    font-size: 70px;
    font-weight: bold;
    padding-top: 20px;
    color: white;

    span {
        font-size: 30px;
        cursor: pointer;
        /* border: 1px solid red; */
    }
`;

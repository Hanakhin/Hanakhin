import React from 'react';
import styled from 'styled-components';

const SquaresContainer=styled.div`
    width:90%;
    height:80%;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    place-self:center;

    @media(max-width:600px){
        grid:none;
    }
    `
const Square=styled.div`
    width:100%;
    height:100%;
    background:#494949;
    display:flex;
    justify-content:center;
    &:hover{
        filter:brightness(1.1);
    }
`

export const Squares:React.FC=(props)=>{
    return(
            <SquaresContainer>
                <Square></Square>
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </SquaresContainer>
    )
}
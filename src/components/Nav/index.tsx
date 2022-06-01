import React from 'react';
import styled from 'styled-components'

const NavContainer = styled.div`
    width:100%;
    height:10%;
    max-height:300px;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
`
const NavButton = styled.div`
    width:fit-content;
    height:fit-content;
    padding:8px 18px;
    cursor:pointer;
    transition: all 0.1s ease-in-out;
    color:var(--nav-button-background);
    border-radius:24px;
    font-size:1.8vmax;
    border:2px solid transparent;

    &:hover{
        border:2px solid var(--text-dark);
    }
`
const NavHalf = styled.div`
    display:flex;
    flex-direction:row;
    width:50%;
    justify-content:space-evenly;

    @media(max-width:425px) {
        flex-direction:Column;
        align-items:end;
    }
`

const NavTitle=styled.div`
    width:fit-content;
    height:fit-content;
    padding:8px;
    background:linear-gradient(60deg,#516BEB,#ef4979);
    color:var(--text-light);
    border-radius:4px;
    font-size:2vw;
`
export const NavBar: React.FC = () => {

    return (
        <NavContainer>
            <NavTitle>Reac-tiv Studio</NavTitle>
            <NavHalf>
                <NavButton>Home</NavButton>
                <NavButton>Portfolio</NavButton>
                <NavButton>Contact</NavButton>
            </NavHalf>

        </NavContainer>
    )

}
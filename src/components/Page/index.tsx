import React from "react";
import styled from "styled-components";
import { NavBar } from "../Nav";
import test from './test.png';
const PageContainer = styled.div`
    width:100%;
    height:100vh;
    background:var(--background-light);
    padding:30px;
    display:flex;
    flex-direction:column;

`
const MainContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-evenly;
`
const TitleContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column; 
    padding:11.5%;
    row-gap:20px;
`
const Title = styled.h1`
    font-size:7vmax;  
    color:#516BEB;;
`
const SubTitle = styled.h4`
    font-size:2.5vmax;
    color:#413F42;
`
export const Page: React.FC = (props) => {

    return (
        <PageContainer >
            <NavBar />
            <MainContainer>
                <TitleContainer>
                    <Title>Hello, </Title>
                    <SubTitle>Welcome to my Portfolio Website.</SubTitle>
                </TitleContainer>
                <div style={{ width: '100%', height: '100%'}}><img width='500px'src={test}/></div>
            </MainContainer>
        </PageContainer>
    )
}

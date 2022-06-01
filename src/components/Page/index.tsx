import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../Nav";
import test from './test.png';
import arrow from './arrowDown.svg';
import arrowVar from './arrowDownVar.svg';


const PageContainer = styled.div<{light:boolean}>`
    width:100%;
    height:fit-content;
    background:${p=>p.light ? 'var(--background-light)':'var(--background-dark)'};
    padding:30px;
    display:flex;
    flex-direction:column;

`
const MainContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    margin-bottom:50px;
    align-items:center;
`
const TitleContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column; 
    align-self:center;
    row-gap:20px;
`
const Title = styled.h1`
    font-size:7vmax;  
    color:#516BEB;
`
const SubTitle = styled.h4<{light:boolean}>`
    font-size:2.5vmax;
    color:${p=>p.light?'#413F42':'#fff'};
`
const Section=styled.section`
    width:100%;
    height:fit-content;
    min-height:300px;
    display: flex;
    justify-content: space-evenly;
`

const Image=styled.img`
    width:500px;
`
const Icon=styled.img`
    width:32px;
    height:32px;
`
const SectionTitle=styled.h1<{light:boolean}>`
    color:${p=>p.light?'#413F42':'#fff'};
    font-size:3vmax;
`
export const Page: React.FC = (props) => {
    const [Dark,setDark]=useState(true);
    return (
        <PageContainer light={Dark} >
            <NavBar />
            <button onClick={()=>setDark(!Dark)}>test</button>
            <MainContainer>
                <div style={{display:'flex',flexDirection:'row',alignSelf:'end'}}>
                <TitleContainer>
                    <Title>Hello, </Title>
                    <SubTitle light={Dark}>Welcome to my Portfolio Website.</SubTitle>
                </TitleContainer>
                <div style={{ width: '100%', height: '100%'}}><Image src={test}/></div>
                </div>
                    <Icon src={Dark ? arrow : arrowVar} style={{position:'absolute',bottom:'70px'}}/>
            </MainContainer>
            <Section>
                <SectionTitle light={Dark}>A propos de moi</SectionTitle>
            </Section>
            <Section>
                <SectionTitle light={Dark}>A propos de mon travail</SectionTitle>
            </Section>
        </PageContainer>
    )
}



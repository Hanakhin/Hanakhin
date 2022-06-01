import React, { useState } from "react";
import styled from "styled-components";
import { NavBar } from "../Nav";
import test from './img/test.png';
import arrow from './img/arrowDown.svg';
import arrowVar from './img/arrowDownVar.svg';


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
    color:${p=>p.light?'#413F42':'#e9e6e3'};
`
const Section=styled.section<{light:boolean}>`
    width:50%;
    height:fit-content;
    min-height:300px;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 15px;
    margin-top: 100px;
    padding:36px;
    align-self: center;
    background:${p=>p.light?'var(--blue)':'#333'}; 
    border: 4px solid ${p=>p.light? 'var(--nav-button-background)' : 'var(--background-light)'};
`
const SectionTitle=styled.h1<{light:boolean}>`
    color:#e9e6e3;
    font-size:3vmax;
`
const SectionParagraph=styled.h1<{light:boolean}>`
    color:#e9e6e3;
    font-size:2vmax;
    letter-spacing: 2px;
`
const Image=styled.img`
    width:500px;
`
const Icon=styled.img`
    width:32px;
    height:32px;
`
const DarkmodeButton=styled.button<{light:boolean}>`
    border:0;
    background:${p=>p.light?'#413F42':'#e9e6e3'};
    color:${p=>p.light?'#e9e6e3':'#413F42'};
    padding:8px 24px;
    width:fit-content;
    border-radius:20px;
    position:fixed;
    right:20px;
    font-weight:bold;
    letter-spacing:1px;
    transition: all 0.1s ease-in-out;

    &:hover{
        transform:scale(1.1);
    }
    &:active{
        transform:scale(1.05);
    }
`
export const Page: React.FC = (props) => {
    const [Dark,setDark]=useState(true);
    return (
        <PageContainer light={Dark} >
            <NavBar />
            <DarkmodeButton light={Dark} onClick={()=>setDark(!Dark)}>{Dark?'Light':'Dark'}</DarkmodeButton>
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
            <Section light={Dark}>
                <SectionTitle light={Dark}>About me</SectionTitle>
                <SectionParagraph light={Dark}>
                    My name is Hanakhin , 
                    i'm 23 years old 
                    and im learning web development for 4 mounths now.
                </SectionParagraph>
            </Section>

            <Section light={Dark}>
                <SectionTitle light={Dark}>Technologies i'm studying</SectionTitle>
                <SectionParagraph light={Dark}>
                    <ul>
                        <li>React.js</li>
                        <li>Typescipt</li>
                        <li>Mongo.DB</li>
                        <li>Express.js</li>
                        <li>PHP 8</li>
                        <li>MySql</li>
                        <li>Wordpress</li>
                        <li>Html/Css</li>
                        <li>Symfony</li>
                        <li>Figma</li>
                        <li>Github/GitLab</li>
                    </ul>
                </SectionParagraph>
            </Section>
        </PageContainer>
    )
}



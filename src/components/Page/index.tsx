import React from "react";
import styled from "styled-components";
import { DarkMode } from "../DarkModeButton";

const PageContainer = styled.div`
    width:100%;
    height:100vh;
    background:var(--background-light);
    padding:30px;
    box-sizing: border-box;
`

export const Page:React.FC=(props)=>{
    
    return(
        <PageContainer >
            <DarkMode/>
        </PageContainer>
    )
}

import React, { useState } from "react";
import styled from "styled-components";

 const DarkModeBtn=styled.div <{dark:boolean}>`
    width:fit-content;
    height:fit-content;
    padding: 12px 24px;
    background-color:${p=>p.dark?'black':'white'};
    color:${p=>p.dark?'white':'black'};
    border-radius:10px;
`
export const DarkMode:React.FC=()=>{
    const [color,setColor]=useState(true)
    return(
        <DarkModeBtn dark={color} onClick={()=>setColor(!color)}>Dark or White</DarkModeBtn>
    )
}

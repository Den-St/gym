import React from "react";
import {Container} from "./styles";
import {MenuItem} from "./styles";
type MenuProps = {
    setType:(type:string) => void,
    type:string
}

export const Menu:React.FC<MenuProps> = ({setType,type}) =>{
    const menu = [
        'banner',
        'product',
        'review',
        'article',
        'bestseller',
        'socialmedia',
        'featured',
    ]
    return <Container>
        {menu.map(item => <MenuItem  key={item} isActive={type === item} onClick={() => {setType(item);console.log(type,"----",item);}}>{item}</MenuItem>)}
    </Container>
}
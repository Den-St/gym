import React from "react";
import {Button} from "./styles";

type ButtonProps = {
    text?:string
}

export const BuyNowButton:React.FC<ButtonProps> = ({text}) =>{
    return <Button>
        {text ? <span>{text}</span> : <span>BUY NOW</span>}
    </Button>
}
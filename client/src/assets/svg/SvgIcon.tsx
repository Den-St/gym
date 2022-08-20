import React from 'react';
import {StyledSvg} from "./style";
import {ChildrenSvg} from "./Children";
import {icon} from "./types";

type SvgProps = {
    type: icon,
    viewBox?: string,
    fill?: string,
    width?: string,
    height?: string,
    backgroundColor?:string,
    margin?:string,
    padding?:string
}

export const SvgIcon: React.FC<SvgProps> = ({type, ...props}) => {

    return <StyledSvg {...props}>
        <ChildrenSvg type={type}/>
    </StyledSvg>
}
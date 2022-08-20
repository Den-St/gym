import React, {useEffect} from "react";
import {Container, Wrapper} from "./styles";

type ModalProps = {
    children:React.ReactNode,
}

export const Modal:React.FC<ModalProps> = ({children}) =>{
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);
    return <Container>
        <Wrapper>
            {children}
        </Wrapper>
    </Container>
}
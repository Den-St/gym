import React from "react";
import {Container, Descr, Wrapper} from "./styles";
import {Content} from "./Content";
import background3 from "../../assets/background3.png";

export const FooterComponent = () =>{
    return <Container url={background3}>
        <Wrapper>
            <Content/>
            <Descr>2022  Design. Allright reserved</Descr>
        </Wrapper>
    </Container>
}
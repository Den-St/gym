import React from "react";
import {Container, Topic} from "./styles";
import {TopLine} from "./TopLine";
import {Wave} from "./Wave";
import {ProductItems} from "./ProductItems";

export const ProductsComponent = () =>{
    return <Container>
        <TopLine/>
        <Topic>Feature Products</Topic>
        <Wave/>
        <ProductItems/>
    </Container>
}
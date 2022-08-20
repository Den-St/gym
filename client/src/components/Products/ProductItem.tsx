import React from "react";
import {Description, Images, Jar1, Jar2, Man, Name, Parallelogram, ProductItemContainer} from "./styles";
import {BuyNowButton} from "../Button/Button";
import {productType} from "../../types";

type ProductItemProps = {
    product:productType,
}

export const ProductItem:React.FC<ProductItemProps> = ({product}) =>{
    return <ProductItemContainer>
        <Parallelogram/>
        <Images>
            <Man src={product.manUrl}/>
            <Jar1 src={product.jar1Url}/>
            <Jar2 src={product.jar2Url}/>
        </Images>
        <Name>{product.name}</Name>
        <BuyNowButton/>
        <Description>{product.description}</Description>
    </ProductItemContainer>
}
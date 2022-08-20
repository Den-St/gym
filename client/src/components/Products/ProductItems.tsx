import React from "react";
import {ProductItemsContainer} from "./styles";
import {ProductItem} from "./ProductItem";
import {useGetProducts} from "../../admin/hooks/useGet";

export const ProductItems = () =>{
    const {products} = useGetProducts();
    const chosenProducts = products.filter(product => product.isChosen);
    return <ProductItemsContainer>
        {chosenProducts.map(product => <ProductItem key={product._id} product={product}/>)}
    </ProductItemsContainer>
}
import React from "react";
import {ItemsContainer} from "./styles";
import {Item} from "./Item";
import {useGetProducts} from "../../admin/hooks/useGet";

export const Items = () =>{
    const {products} = useGetProducts();
    const chosenProducts = products.filter(product => product.isChosen && product.type === "best");
    return <ItemsContainer>
        {chosenProducts.map(product => <Item key={product._id} product={product}/>)}
    </ItemsContainer>
}
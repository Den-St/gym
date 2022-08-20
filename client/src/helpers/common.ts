import {productType} from "../types";

export const getProductOptions = (products?: productType[] ) => {
    return products?.map(el => ({label: el?.name, value: el?._id}))
}
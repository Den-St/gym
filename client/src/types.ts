export type imageType = {
    image:string
}

export type bannerType = {
    title:string,
    subTitle:string,
    buttonText:string,
    imageUrl:string,
    isChosen:boolean,
    _id:string
    imageFile?: Blob | string

}

export type articleType = {
    type:string,
    imageUrl:string,
    title:string,
    isChosen:boolean,
    _id:string;
    imageFile?: Blob | string
}

export type bestsellerType = {
    jarUrl:string,
    name:string,
    isChosen:boolean,
    _id:string
    jarFile?: Blob | string
}

export type featuredType = {
    imageUrl:string,
    isChosen:boolean,
    imageFile?: Blob | string

    _id:string
}

export type productType = {
    manUrl:string,
    jar1Url:string,
    jar2Url:string,
    buttonText:string,
    description:string,
    isChosen:boolean,
    manFile?: Blob | string
    jar1File?: Blob | string
    jar2File?: Blob | string
    _id:string,
    name:string,
    type:string
}

export type reviewType = {
    type:string,
    authorName:string,
    title:string,
    jarUrl:string,
    description:string,
    numberOfStars:number,
    isChosen:boolean,
    _id:string,
    createdAt:string
}

export type socialmediaType = {
    imageUrl:string,
    isChosen:boolean,
    imageFile?: Blob | string
    _id:string
}

export type starsType = {
    chosenStars:number[],
    rest:number[]
}

export type optionsType = {
    value:string,
    label:string
}

export type loginDataType = {
    login:string,
    password:string
}
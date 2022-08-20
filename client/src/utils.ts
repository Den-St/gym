export const getStars = (numberOfStars:number) =>{
    const stars:number[] = [];
    for(let i = 0;i<numberOfStars;i++){
        stars.push(i);
    }
    return stars;
}
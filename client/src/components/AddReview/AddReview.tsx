import React, {useCallback, useEffect, useState} from "react";
import {reviewType, starsType} from "../../types";
import {Container, Star} from "./styles";
import {getStars} from "../../utils";
import Select from "react-select";
import {useGetProducts} from "../../admin/hooks/useGet";
import axios from "../../axios";
import {Stars} from "./StarsReview";
import {getProductOptions} from "../../helpers/common";

type AddReviewProps = {
    onBlur:() => void,
}
export const AddReview:React.FC<AddReviewProps> = ({onBlur}) =>{
    const [review,setReview] = useState<Partial<reviewType>>({authorName:"",jarUrl:"",description:"",numberOfStars:5,title:""})
    const [stars,setStars] = useState<starsType>({chosenStars:[0,1,2,3,4],rest:[]});
    const {products} = useGetProducts();
    const options = getProductOptions(products);
    const [selectedOption,setSelectedOption] = useState<{ label: string; value: string; } | null>(null);

    const onChangeAuthorName = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        setReview(prev => ({...prev,authorName:e.target.value}));
    },[])

    const onChangeDescription = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        setReview(prev => ({...prev,description:e.target.value}));
    },[])

    const onChangeTitle = useCallback(async (e:React.ChangeEvent<HTMLInputElement>) =>{
        setReview(prev => ({...prev,title:e.target.value}));
    },[])

    const onChangeNumberOfStars = useCallback(async (numberOfStars:number) =>{
        const chosenStars = getStars(numberOfStars);
        const rest = getStars(5-numberOfStars);
        setReview(prev => ({...prev,numberOfStars:numberOfStars}))
        setStars({chosenStars: chosenStars,rest: rest});
    },[])

    useEffect(()=>{
        review.numberOfStars && onChangeNumberOfStars(review.numberOfStars);
    },[])

    const setJarUrl = () =>{
        try{
            axios.get('/product/getOne/'+selectedOption?.value).then(res => {console.log("res",res);setReview(prev => ({...prev,jarUrl:res.data.jar2Url}))});
        }catch(err){
            console.log("product getOne err",err);
        }
    }

    const onConfirm = async () =>{
        setJarUrl();
        await axios.post('/review/create',review);
        onBlur();
    }
    return <Container>
        <Stars stars={stars} onChangeNumberOfStars={onChangeNumberOfStars}/>
        <Select options={options} defaultValue={options?.[0]} onChange={setSelectedOption}/>
        <input placeholder={'Your name'} onChange={onChangeAuthorName} value={review.authorName}/>
        <input placeholder={'Comment'} onChange={onChangeDescription} value={review.description}/>
        <input placeholder={'Title'} onChange={onChangeTitle} value={review.title}/>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onBlur}>Cancel</button>
    </Container>
}
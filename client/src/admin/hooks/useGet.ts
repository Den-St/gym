import axios from "../../axios";
import {useEffect, useState} from "react";
import {
    articleType,
    bannerType,
    featuredType,
    productType,
    reviewType,
    socialmediaType
} from "../../types";

export const useGetBanners = () =>{
    const [banners, setBanners] = useState<bannerType[]>([]);
    const fetch = () =>{
        try {
            axios.get(`/banner/get`).then(res => setBanners(res.data as bannerType[]));
        } catch (err) {
            console.log("err", err);
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    return {banners,fetch};
}

export const useGetArticles = () =>{
    const [articles, setArticles] = useState<articleType[]>([]);
    const fetch = () =>{
        try {
            axios.get(`/article/get`).then(res => {
                setArticles(res.data as articleType[]);
            });
        } catch (err) {
            console.log("err", err);
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    return {articles,fetch};
}

export const useGetProducts = () =>{
    const [products, setProducts] = useState<productType[]>([]);
    const fetch = () =>{
        try {
            axios.get(`/product/get`).then(res => setProducts(res.data as productType[]));
        } catch (err) {
            console.log("err", err);
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    return {products,fetch};
}

export const useGetFeatureds = () =>  {
    const [featureds, setFeatureds] = useState<featuredType[]>([]);
    const fetch = () =>{
        try {
            axios.get(`/featured/get`).then(res => setFeatureds(res.data as featuredType[]));
        } catch (err) {
            console.log("err", err);
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    return {featureds,fetch};
}


export const useGetReviews = () =>{
    const [reviews, setReviews] = useState<reviewType[]>([]);
    const fetch = () =>{
        try {
            axios.get(`/review/get`).then(res => setReviews(res.data as reviewType[]));
        } catch (err) {
            console.log("err", err);
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    return {reviews,fetch};
}

export const useGetSocialmedias = () =>{
    const [socialmedias, setSocialmedias] = useState<socialmediaType[]>([]);
    const fetch = () =>{
        try {
            axios.get(`/socialmedia/get`).then(res => setSocialmedias(res.data as socialmediaType[]));
        } catch (err) {
            console.log("err", err);
        }
    }
    useEffect(() => {
        fetch();
    }, [])
    return {socialmedias,fetch};
}
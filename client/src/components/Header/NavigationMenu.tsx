import React, {useState} from "react";
import {Action, Actions, NavButton, NavigationMenuContainer, NavigationMenuWrapper} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {Modal} from "../modal/Modal";
import {AddReview} from "../AddReview/AddReview";
import {reviewType} from "../../types";

export const NavigationMenu = () =>{
    const [isOnReview,setIsOnReview] = useState(false);
    const onReview = () =>{
        setIsOnReview(true);
    }

    const onBlur = () =>{
        setIsOnReview(false);
        document.body.style.overflow = "unset";

    }
    return <NavigationMenuContainer>
        {isOnReview && <Modal><AddReview onBlur={onBlur}/></Modal>}
        <NavigationMenuWrapper>
            <NavButton>Home</NavButton>
            <NavButton>Shop</NavButton>
            <NavButton>Catalog</NavButton>
            <NavButton>Blog</NavButton>
            <Actions>
                <Action onClick={onReview}><SvgIcon height={'31px'} width={'31px'} type={'search'}/></Action>
                <Action><SvgIcon height={'28px'} width={'22px'} type={'cart'}/></Action>
            </Actions>
        </NavigationMenuWrapper>
    </NavigationMenuContainer>
}
import React from "react";
import {
    ContentContainer,
    Input,
    InputContainer,
    Left,
    Logo,
    Navigation,
    Right,
    Socials,
    SubTitle,
    Title,
    Topic
} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";

export const Content = () =>{
    return <ContentContainer>
        <Left>
            <Logo><SvgIcon type={'logo'}/></Logo>
            <Navigation>
                <Topic>
                    <span>Menu</span>
                    <span>Home</span>
                    <span>Trainers</span>
                    <span>Services</span>
                    <span>Pricing</span>
                </Topic>
                <Topic>
                    <span>Class</span>
                    <span>Individu</span>
                    <span>Corporate</span>
                    <span>Monthly</span>
                </Topic>
                <Topic>
                    <span>About us</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span>QnA</span>
                </Topic>
            </Navigation>
        </Left>
        <Right>
            <Title>Stay up to date with our story</Title>
            <SubTitle>Join and be the first to get the latest news about trend, promotions, and much more!</SubTitle>
            <InputContainer><Input placeholder={"Enter your email address"}></Input><button>Join now</button></InputContainer>
            <Socials><SvgIcon type={'instagram'}/><SvgIcon type={'facebook'}/><SvgIcon type={'twitter'}/></Socials>
        </Right>
    </ContentContainer>
}
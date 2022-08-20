import React from 'react';
import {icon} from "./types";
import {
    Cart, Facebook, HugeWave, Instagram, LeftArrow,
    Logo, OrangeWave, RightArrow, Search, Star, StrongWave, Twitter, Wave, WaveLine, Why1, Why2, Why3
} from './paths'

export const ChildrenSvg: React.FC<{type: icon}> = ({type}) => {
    switch (type) {
        case 'logo' : return <Logo/>;
        case 'search': return <Search/>
        case 'cart': return <Cart/>
        case 'wave': return <Wave/>
        case 'waveline': return <WaveLine/>
        case 'why1': return <Why1/>
        case 'why2': return <Why2/>
        case 'why3': return <Why3/>
        case 'star': return <Star/>
        case 'leftArrow': return <LeftArrow/>
        case 'rightArrow': return <RightArrow/>
        case 'hugeWave': return <HugeWave/>
        case 'orangeWave': return <OrangeWave/>
        case 'strongWave': return <StrongWave/>
        case 'twitter':return <Twitter/>
        case 'facebook': return <Facebook/>
        case 'instagram': return <Instagram/>
    }

    return null
}
import React from "react";
import {CompaniesWrapper} from "./styles";
import companylogo1 from "../../assets/companylogo1.png";
import companylogo2 from "../../assets/companylogo2.png";
import companylogo3 from "../../assets/companylogo3.png";
import companylogo4 from "../../assets/companylogo4.png";
import {useGetFeatureds} from "../../admin/hooks/useGet";

export const Companies = () =>{
    const {featureds} = useGetFeatureds();
    const chosenFeatureds = featureds.filter(featured => featured.isChosen);
    return <CompaniesWrapper>
        {chosenFeatureds.map(featured => <img key={featured._id} src={featured.imageUrl}/>)}
        </CompaniesWrapper>
}
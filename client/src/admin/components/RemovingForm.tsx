import React from "react";
import {RemovingFormContainer} from "./styles";

type RemovingFormProps = {
    onConfirm:() => void;
    onBlur:() => void
}

export const RemovingForm:React.FC<RemovingFormProps> = ({onBlur,onConfirm}) =>{
    return <RemovingFormContainer>
        <button onClick={onConfirm}>Remove</button>
        <button onClick={onBlur}>Cancel</button>
    </RemovingFormContainer>
};
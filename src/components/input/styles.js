import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FFFFFF;
    border-radius: 20px;

    height: 62px;
    width: 50%;    
    margin: 20px;


    input{
        background-color: transparent;
        border: 0;
        width: 100%;
        height: 62px;
        padding: 0 20px;
        color: #FAFAFA;
        font-size: 25px;
        font-family: 'Inter';
    }

    input:focus{
        outline: none;
    }

`
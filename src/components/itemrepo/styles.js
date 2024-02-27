import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 50%;

    *{
        font-family: 'Inter';
    }

    h3{
        font-size: 32px;
        color: #FAFAFA;
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 10px;
    }
    
    a{
        padding: 0 28px;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }
    
    div{
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        margin-top: 20px;
    }

    button{
        width: 150px;
        height: 30px;
        border-radius: 50px;
       
    }

    button:hover{
        cursor: pointer;
    }

    .seeRepo{
        border: none;
        background-color: #FAFAFA20;
    }

    .seeRepo:hover{
        border: 1px solid #FAFAFA20;
        background-color: transparent;
        opacity: 60%;
    }

    .linkRepo{
        color: #FFFFFF;
    }

    .remove{
        border: 1px solid #FF0000;
        background-color: transparent;
        color: #FF0000;
    }

    .remove:hover{
        background-color: #FF0000;
        color: #FAFAFA;
        opacity: 60%;
    }

    hr{
        color: #FAFAFA60;
        margin: 20px 0;
    }

`
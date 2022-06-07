import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction:row;
    box-shadow: 0px 2px 10px black;
    position:fixed;
    background: white;
    top 0;
    z-index: 1;
    padding: 10px 0;

    @media(max-width: 460px){
        flex-direction: column;
        height:auto;
    }
`

export const ContainerUser = styled.div`
    width: 300px;
    heigth: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

img{
    width: 80px;
    height: 80px;
    border-radius: 100%
}
p{
    font-size: 20px;
}
`

export const BtnSair = styled.button`
    width: 80px;
    height: 50px;
    background: #FF3019;
    border-radius: 10px;
    border: none;
    color: white;
    transition: .25s;

    &:hover{
        background: #CC2714;
    }

    @media(max-width: 460px){
        margin-top:20px;
    }
`
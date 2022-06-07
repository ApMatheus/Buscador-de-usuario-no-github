import React, {useEffect, useState} from "react";
import * as S from './styled'
import {useHistory} from 'react-router-dom'
import Header from "../Components/Header";



export default function Repositories(){
    const history = useHistory()
    const[repositories, setRepositories] = useState([])
    useEffect(()=>{
        const repositoresName = localStorage.getItem('repositoresName');
        if(repositoresName != null){
            const names = JSON.parse(repositoresName);
            setRepositories(names);
        }else{
            history.push('/');
        }

    },[]);
    return(
        <>
        <Header></Header>
        <S.Container>
        <S.Title>Seus Repositorios</S.Title>
        <S.List>
            {
                repositories.map(repository =>{
                    return(
                        <S.ListItem>Repositorio: {repository}</S.ListItem>
                    )
                })
            }
        </S.List>
        </S.Container>
        </>
    )
}

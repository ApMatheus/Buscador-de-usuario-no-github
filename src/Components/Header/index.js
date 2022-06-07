import React, {useEffect, useState} from "react";
import * as S from './styled'
import {useHistory} from 'react-router-dom'

function Header(){
    const history = useHistory();
    const[details, setDetails] = useState('');

    useEffect(()=>{
        const destailsRepo = localStorage.getItem('UserDetails');
        if(destailsRepo != null){
            const infos = JSON.parse(destailsRepo);
            setDetails(infos[0].owner);
        }else{
            history.push('/');
        }
    },{});

    function Exit(){
        localStorage.clear();
        history.push('/')
    }
    return(
        <S.Header>
            <S.ContainerUser>
                <img src={details.avatar_url}></img>
                <p><strong>Usuário:</strong> {details.login}</p>
            </S.ContainerUser>
            <S.BtnSair onClick={Exit}>Sair</S.BtnSair>
        </S.Header>
    );
}

export default Header;
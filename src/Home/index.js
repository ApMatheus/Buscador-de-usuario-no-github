import * as S from './styled.js'
import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import icon from '../assets/icon-github.svg';

function Home(props) {
  const history = useHistory()
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
    const repositories = response.data; 
    const repositoriesName = [];
    const userDetails = [];
    repositories.map(repository => {
      repositoriesName.push(repository.name);
      userDetails.push(response.data[0]);
    });
    localStorage.setItem('repositoresName', JSON.stringify(repositoriesName));
    localStorage.setItem('UserDetails', JSON.stringify(userDetails));
    history.push("/repositories");
  }).catch(err =>{
    setErro(true);
  })
  }
  return (
    <>
      <S.HomeContainer>
        <S.iconGit><img  src={icon}/></S.iconGit>
        <S.Title>Olá Dev, Pesquise pelo usuário</S.Title>
        <S.Container>
          <S.Input name="nome" id="usuario" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Container>
        {
          erro ? <S.ErrorMsg>Este usuário não foi encontrado</S.ErrorMsg> : ''
        }
      </S.HomeContainer>
    </>
  );
}

export default Home;

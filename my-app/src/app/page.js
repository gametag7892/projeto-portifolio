'use client'

import React, { useState } from 'react';

function NavBar() {
  return (
    <div className="header">
      <div className="nav-bar">
        <ul className="list-nav">
          <li className="item"><a href="#">Inicio</a></li>
          <li className="item"><a href="#">Sobre</a></li>
          <li className="item"><a href="#">Projetos</a></li>
          <li className="item"><a href="https://github.com/gametag7892">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}



function PopUp(){
  const [mostrarModal, setMostrarModal] = useState(true);

  const fecharModal = () => {
    setMostrarModal(false);
  };

  if (!mostrarModal) {
    return null;
  }

  return( 
    <div className="blur">
      <div className="popUp">
        <div className="topModal">
          <div className="circle"><button className="closeButton" onClick={fecharModal}></button></div>
          <div className="circle"><button className="minButton"></button></div>
          <div className="circle"><button className="maxButton"></button></div>
          <p>Atenção</p>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="Title">
      <h2>Seja bem vindo ao meu ✨Projeto✨</h2>
    </div>
  );
}

function Subtitle(){
  return (
    <div className="Subtitle">
      <h3>Uma IA que responde perguntas sobre mim</h3>
    </div>
  );
}

function Top(){
  return(
    <div className="topbar">
      <div className="top-left">
        <h3 className="myNick"><a href="https://github.com/gametag7892">GameTag7892</a></h3>
      </div>

      <div className="top-center">
      </div>
      
      <div className="top-right">
        <button className="button">
          <a href="#">Login</a>
        </button>

      </div>
    </div>
  );
}


export default function Home() {
  return (
    <>
      <main className="main">
        <NavBar/>
        <div className="board">
          <Top/>
          <div className="central">
            <div>
              <Title/>
              <Subtitle/>
            </div>
            
            <div className='inputBox'>
              <input className="input" placeholder="Coloque sua dúvida sobre mim"></input>
              <button className="button">Enviar</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
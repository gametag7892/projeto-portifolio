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

      <div className="button">
        <a href="#">Login</a>
      </div>

      <div className="button">
        <a href="#">Create</a>
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
      <h1>SEJA BEM VINDO</h1>
    </div>
  );
}

function Carriagem(){
  return(
    <div>
      <img></img>
      <img></img>
      <img></img>
      <img></img>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PopUp/>
      <NavBar/>
      <Title/>
      <Carriagem/>
    </>
  );
}
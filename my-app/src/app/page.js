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

function Title() {
  return (
    <div className="Title">
      <h1>TESTE</h1>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavBar/>
      <Title/>
    </>
  );
}



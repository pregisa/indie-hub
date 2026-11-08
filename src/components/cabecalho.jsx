
function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-conteudo">
        <a href="#inicio" className="logo">
          INDIE<span>HUB</span>
        </a>

        <nav className="navegacao">
          <a href="#inicio">Início</a>
          <a href="#jogos">Explorar</a>
          <a href="#recentes">Recentes</a>
        </nav>

        <a href="#jogos" className="botao-explorar">
          Explorar jogos
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;

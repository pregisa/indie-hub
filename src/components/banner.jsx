
function Banner() {
  return (
    <section className="banner" id="inicio">
      <div className="banner-conteudo">
        <span className="banner-etiqueta">
          DESCUBRA NOVOS UNIVERSOS
        </span>

        <h1>
          Grandes aventuras.
          <br />
          <span>Ideias independentes.</span>
        </h1>

        <p>
          Explore jogos únicos, conheça novos desenvolvedores
          e encontre sua próxima grande aventura.
        </p>

        <a href="#jogos" className="banner-botao">
          Explorar catálogo →
        </a>
      </div>

      <div className="banner-destaque">
        <span>INDIE GAMING</span>
        <h2>O próximo favorito está aqui.</h2>
      </div>
    </section>
  );
}

export default Banner;

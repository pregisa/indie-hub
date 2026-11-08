
function Card({
  titulo,
  imagem,
  ano,
  nota,
  plataforma = "Não informado"
}) {
  return (
    <div className={`card ${nota >= 9 ? "recomendado" : ""}`}>
      <img src={imagem} alt={titulo} />

      <div className="card-conteudo">
        <h3>{titulo}</h3>
        <p>Ano: {ano}</p>
        <p>Nota: {nota}</p>
        <p>Plataforma: {plataforma}</p>

        {nota >= 9 && (
          <span className="selo">Recomendado</span>
        )}
      </div>
    </div>
  );
}

export default Card;

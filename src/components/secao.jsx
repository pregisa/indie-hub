
function Secao({ titulo, children, id }) {
  return (
    <section className="secao" id={id}>
      <h2>{titulo}</h2>

      <div className="grade-cards">
        {children}
      </div>
    </section>
  );
}

export default Secao;


import { useState } from "react";

import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import Card from "./components/card";
import Secao from "./components/secao";
import Banner from "./components/banner";

import "./App.css";

function App() {
  const jogos = [
    {
      id: 1,
      titulo: "Hollow Knight",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
      ano: 2017,
      nota: 9.5,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 2,
      titulo: "Celeste",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg",
      ano: 2018,
      nota: 9.4,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 3,
      titulo: "Stardew Valley",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
      ano: 2016,
      nota: 9.2
    },
    {
      id: 4,
      titulo: "Hades",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
      ano: 2020,
      nota: 9.5,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 5,
      titulo: "Dead Cells",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg",
      ano: 2018,
      nota: 8.8,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 6,
      titulo: "Sea of Stars",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1244090/header.jpg",
      ano: 2023,
      nota: 8.9,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 7,
      titulo: "Balatro",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/2379780/header.jpg",
      ano: 2024,
      nota: 9.3,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 8,
      titulo: "Undertale",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg",
      ano: 2015,
      nota: 9.4,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 9,
      titulo: "Cuphead",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg",
      ano: 2017,
      nota: 9.1,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 10,
      titulo: "Terraria",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
      ano: 2011,
      nota: 9.2,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 11,
      titulo: "Slay the Spire",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg",
      ano: 2019,
      nota: 9.0,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    },
    {
      id: 12,
      titulo: "Ori and the Will of the Wisps",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg",
      ano: 2020,
      nota: 9.3,
      plataforma: "PC, Nintendo Switch, Xbox"
    },
    {
      id: 13,
      titulo: "Dave the Diver",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1868140/header.jpg",
      ano: 2023,
      nota: 9.0,
      plataforma: "PC, Nintendo Switch, PlayStation"
    },
    {
      id: 14,
      titulo: "Inscryption",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/1092790/header.jpg",
      ano: 2021,
      nota: 9.1,
      plataforma: "PC, PlayStation e Xbox"
    },
    {
      id: 15,
      titulo: "Spiritfarer",
      imagem: "https://cdn.cloudflare.steamstatic.com/steam/apps/972660/header.jpg",
      ano: 2020,
      nota: 9.0,
      plataforma: "PC, Nintendo Switch, PlayStation e Xbox"
    }
  ];

  // ESTADOS DOS FILTROS
  const [busca, setBusca] = useState("");
  const [plataforma, setPlataforma] = useState("Todas");
  const [filtroNota, setFiltroNota] = useState("Todos");
  const [ordenacao, setOrdenacao] = useState("padrao");

  // JOGOS LANÇADOS A PARTIR DE 2020
  const jogosRecentes = jogos.filter(
    (jogo) => jogo.ano >= 2020
  );

  // BUSCA, FILTROS E ORDENAÇÃO
  const jogosFiltrados = jogos
    .filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    )
    .filter((jogo) => {
      if (plataforma === "Todas") return true;

      if (plataforma === "Não informado") {
        return !jogo.plataforma;
      }

      return jogo.plataforma?.includes(plataforma);
    })
    .filter((jogo) => {
      if (filtroNota === "Recomendados") {
        return jogo.nota >= 9;
      }

      return true;
    })
    .sort((a, b) => {
      if (ordenacao === "nota") return b.nota - a.nota;
      if (ordenacao === "ano") return b.ano - a.ano;

      return a.id - b.id;
    });

  return (
    <>
      <Cabecalho />

      <Banner />

      <main>
        {/* PAINEL DE BUSCA E FILTROS */}
        <div className="painel-filtros" id="jogos">
          <div className="busca-container">
            <span className="icone-busca">⌕</span>

            <input
              type="text"
              placeholder="Busque por um jogo..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />

            {busca && (
              <button
                className="limpar-busca"
                onClick={() => setBusca("")}
                aria-label="Limpar pesquisa"
              >
                ×
              </button>
            )}
          </div>

          <select
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
          >
            <option value="Todas">Todas as plataformas</option>
            <option value="PC">PC</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox">Xbox</option>
            <option value="Não informado">Não informado</option>
          </select>

          <select
            value={filtroNota}
            onChange={(e) => setFiltroNota(e.target.value)}
          >
            <option value="Todos">Todos os jogos</option>
            <option value="Recomendados">Recomendados</option>
          </select>

          <select
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value)}
          >
            <option value="padrao">Ordem padrão</option>
            <option value="nota">Maior nota</option>
            <option value="ano">Mais recentes</option>
          </select>
        </div>

        {/* TODOS OS JOGOS */}
        <Secao titulo="Todos os Jogos Indie">
          {jogosFiltrados.map((jogo) => (
            <Card
              key={jogo.id}
              titulo={jogo.titulo}
              imagem={jogo.imagem}
              ano={jogo.ano}
              nota={jogo.nota}
              plataforma={jogo.plataforma}
            />
          ))}

          {jogosFiltrados.length === 0 && (
            <p className="sem-resultados">
              Nenhum jogo encontrado. Tente outra pesquisa ou altere os filtros.
            </p>
          )}
        </Secao>

        {/* JOGOS RECENTES */}
        <Secao titulo="Recentes" id="recentes">
          {jogosRecentes.map((jogo) => (
            <Card
              key={jogo.id}
              titulo={jogo.titulo}
              imagem={jogo.imagem}
              ano={jogo.ano}
              nota={jogo.nota}
              plataforma={jogo.plataforma}
            />
          ))}
        </Secao>
      </main>

      <Rodape />
    </>
  );
}

export default App;

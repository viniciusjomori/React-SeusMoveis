import './App.css'
import arrayMoveis from './ArrayMoveis';
import { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import CarrinhoDoCliente from './Componentes/CarrinhodoCliente/CarrinhoDoCliente';
import Contato from './Componentes/Contato/Contato';
import Footer from './Componentes/Footer/Footer';
import PaginaDeProduto from './Componentes/PaginaDeProduto/PaginaDeProduto';
import PaginaInicial from './Componentes/PaginaInicial/PaginaInicial';
import Produtos from './Componentes/Produtos/Produtos';
import QuemSomos from './Componentes/QuemSomos/QuemSomos';

function App() {

  let [visivel, setVisivel] = useState("pagina inicial")
  const exibirComponente = (componente) => {
    setMoveisFiltrados(arrayMoveis)
    setVisivel(componente)
  }

  let [moveisFiltrados, setMoveisFiltrados] = useState(arrayMoveis)
  let [busca, setBusca] = useState("")
  const buscarMoveis = (filtro) => {
    setVisivel("produtos")
    setBusca(filtro)
    const lowerFiltro = filtro.toLowerCase()
    let filtrandoMoveis = arrayMoveis.filter((movel) => movel.nome.toLowerCase().includes(lowerFiltro))
    setMoveisFiltrados(filtrandoMoveis)
  }

  const filtrar = (categoria, ordem) => {
    let filtrandoMoveis = []
    if (categoria !== "categoria" && categoria !== "") {
      filtrandoMoveis = arrayMoveis.filter((movel) => movel.categoria === categoria)
    } else {
      filtrandoMoveis = [...arrayMoveis]
    }
    switch (ordem) {
      case "mais-barato":
        filtrandoMoveis = bubbleLowerPrice(filtrandoMoveis)
        break;
      case "mais-caro":
        filtrandoMoveis = bubbleHigherPrice(filtrandoMoveis)
        break;
      case "a-z":
        filtrandoMoveis = AtoZ(filtrandoMoveis)
        break;
      case "z-a":
        filtrandoMoveis = AtoZ(filtrandoMoveis)
        filtrandoMoveis = filtrandoMoveis.reverse()
        break;
    }
    setMoveisFiltrados(filtrandoMoveis)
  }

  let [paginaDeProduto, setPaginaDeProduto] = useState("")
  const abrirPaginaDeProduto = (movel) => {
    setPaginaDeProduto(movel)
    setVisivel("pagina de produto")
  }
  
  let [carrinho, setCarrinho] = useState([])
  const adicionarAoCarrinho = (movel) => {
    const index = carrinho.findIndex(produtoNoCarrinho => produtoNoCarrinho[0] == movel)
    if (index == -1) {
      setCarrinho([...carrinho, [movel, 1]])
    }
  }

  const calcularTotal = (quantidade, index) => {
    let newCarrinho = [...carrinho]
    newCarrinho[index][1] = quantidade
    setCarrinho(newCarrinho)
  }

  const removerProduto = (movel) => {
    let newCarrinho = carrinho.filter(produtoNoCarrinho => produtoNoCarrinho[0] != movel)
    setCarrinho(newCarrinho)
  }

  return (
    <div className="App">
      <Banner 
        exibir={exibirComponente}
        buscarMoveis={buscarMoveis}
        visivel={visivel}
      />
      {visivel === "pagina inicial" && <PaginaInicial
        adicionarAoCarrinho={adicionarAoCarrinho}
        abrirPaginaDeProduto={abrirPaginaDeProduto}
      />}
      {visivel === "produtos" && <Produtos
        moveis={moveisFiltrados}
        filtrar={filtrar}
        adicionarAoCarrinhoApp={movel => adicionarAoCarrinho(movel)}
        carrinho={carrinho}
        abrirPaginaDeProduto={abrirPaginaDeProduto}
        busca={busca}
      />}
      {visivel === "contato" && <Contato/>}
      {visivel === "carrinho" && <CarrinhoDoCliente 
        carrinho={carrinho}
        abrirPaginaDeProduto={abrirPaginaDeProduto}
        alterarQuantidade={calcularTotal}
        removerProduto={removerProduto}
        exibir={exibirComponente}
      />}
      {visivel === "pagina de produto" && <PaginaDeProduto
        movel={paginaDeProduto}
        carrinho={carrinho}
        adicionarAoCarrinho={adicionarAoCarrinho}
      />}
      {visivel === "quem somos" && <QuemSomos/>}
      <Footer/>
    </div> 
    )

    function bubbleLowerPrice(filtrandoMoveis) {
      let repetir = true
      while(repetir) {
        repetir = false
        for (let i = 0; i<filtrandoMoveis.length-1; i++) {
          if (filtrandoMoveis[i].preço > filtrandoMoveis[i+1].preço) {
            repetir = true
            let troca = filtrandoMoveis[i]
            filtrandoMoveis[i] = filtrandoMoveis[i+1]
            filtrandoMoveis[i+1] = troca
          }
        }
      }
      return filtrandoMoveis
    }

    function bubbleHigherPrice(filtrandoMoveis) {
      let repetir = true
      while(repetir) {
        repetir = false
        for (let i = filtrandoMoveis.length-1; i > 0; i--) {
          if (filtrandoMoveis[i].preço > filtrandoMoveis[i-1].preço) {
            repetir = true
            let troca = filtrandoMoveis[i]
            filtrandoMoveis[i] = filtrandoMoveis[i-1]
            filtrandoMoveis[i-1] = troca
          }
        }
      }
      return filtrandoMoveis
    }

    function AtoZ(filtrandoMoveis) {
      let nomesEmOrdemAlfabetica = []
      let objetoEmOrdemAlfabetica = []
      filtrandoMoveis.forEach((movel) => nomesEmOrdemAlfabetica.push(movel.nome))
      nomesEmOrdemAlfabetica = nomesEmOrdemAlfabetica.sort()
      nomesEmOrdemAlfabetica.forEach((nome) => {
        objetoEmOrdemAlfabetica.push(filtrandoMoveis.find(movel => movel.nome == nome))
      })
      return objetoEmOrdemAlfabetica
    }

}
export default App;
import { useState, useEffect } from "react"

const minhaLista = [
  {id: 1, value: 'Banana'},
  {id: 2, value: 'Maçã'},
  {id: 3, value: 'Uva'},
  {id: 4, value: 'Abacaxi'},
  {id: 5, value: 'Abacate'},
  {id: 6, value: 'Melancia'},
  {id: 7, value: 'Jaca'},
]

export default function App() {
  
  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if(pesquisa) {
        const novaLista = minhaLista.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
  
        })
        setProdutos(novaLista)
      }
      else{
        setProdutos(minhaLista)
      }
    }
  , [pesquisa])
  return(
    <div>
      <h2>Efeitos Colaterais</h2>
      <input 
      type="text"
      placeholder="Digite o nome da fruta"
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
      />
      {produtos.map((item) => {
          return(
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
          )
      })}
    </div>
  )
}
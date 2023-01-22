import React from "react";
import Axios from "axios";

import { BsSearch } from "react-icons/bs";

import "./Style.scss";

export default function App() {
  const [inputCEP, setInputCEP] = React.useState("");
  const [data, setData] = React.useState("");

  function handleSearch() {
    if (inputCEP === "") {
      window.alert("Insira um CEP");
    } else {
      Axios.get(`https://viacep.com.br/ws/${inputCEP}/json`).then(
        (Response) => {
          setData(Response.data);
          console.log(Response.data)
        }
      );
      setInputCEP("");
    }
  }
  return (
    <div className="App">
      <h1>
        Buscador de CEP (<span>React JS</span>)
      </h1>
      <div className="InputSearch">
        <input
          type="text"
          name=""
          id=""
          placeholder="Insira um CEP"
          value={inputCEP}
          onChange={(e) => setInputCEP(e.target.value)}
        />
        <button onClick={handleSearch}>
          <BsSearch />
        </button>
      </div>
      <div className="Content">
        <h1>CEP: {data.cep}</h1>
        <p>Estado: {data.uf}</p>
        <p>Localidade: {data.localidade}</p>
        <p>Bairro: {data.bairro}</p>  
        <p>Rua: {data.logradouro}</p>      
      </div>
    </div>
  );
}

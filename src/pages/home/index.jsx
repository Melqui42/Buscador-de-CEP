import React, { useState } from "react";
import axios from "axios";

import * as Bs from "react-icons/bs";

import Details from "../../components/details";

import * as C from "./styled";

export default function App() {
  const [cepSearch, setCepSearch] = useState("");
  const [data, setData] = useState("");

  function handleSearch() {
    if (cepSearch === "") {
      window.alert("Insira um CEP");
    } else {
      axios
        .get(`https://viacep.com.br/ws/${cepSearch}/json`)
        .then((Response) => {
          setData(Response.data);
          console.log(Response.data);
        });
      setCepSearch("");
    }
  }

  return (
    <C.Container>
      <div className="content">
        <Details />
        <h1 className="title">Buscador de CEP</h1>
        <div className="center">
          <div className="inputSearch">
            <input
              type="text"
              name=""
              id=""
              value={cepSearch}
              onChange={(e) => setCepSearch(e.target.value)}
              placeholder="Insira um CEP"
            />
            <button onClick={handleSearch}>
              <Bs.BsSearch className="icon" />
            </button>
          </div>
          <div className="welcomeMessage">
            <p>Seja bem-vindo(a) ao meu projeto!!!👋</p>
          </div>
          <div className="informations">
            <h1>
              <span>CEP:</span>
              {data.cep}
            </h1>
            <p>
              <span>Estado:</span>
              {data.uf}
            </p>
            <p>
              <span>Localidade:</span>
              {data.localidade}
            </p>
            <p>
              <span>Bairro:</span>
              {data.bairro}
            </p>
            <p>
              <span>Rua:</span>
              {data.logradouro}
            </p>
          </div>
        </div>
      </div>
    </C.Container>
  );
}

import React, { useState } from "react";
import axios from "axios";

import * as Bs from "react-icons/bs";
import * as Ai from "react-icons/ai";
import * as Fc from "react-icons/fc";
import * as Md from "react-icons/md";

import NotificationWindow from "../../components/notificationWindow";

import * as C from "./styled";

export default function App() {
  const [cepSearch, setCepSearch] = useState("");
  const [data, setData] = useState("");
  const [listOfTech, setLisOftTech] = useState(false);
  const [listOfMySocialNet, setListOfMySocialNet] = useState(false);
  const [email, setEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(false);

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

  function emailNotification() {
    setEmail(true);

    if (phoneNumber === true) {
      setPhoneNumber(false);
    }
  }

  function phoneNumberNotification() {
    setPhoneNumber(true);

    if (email === true) {
      setEmail(false);
    }
  }

  return (
    <C.Container>
      <NotificationWindow
        title="E-mail"
        state={email}
        stateFunction={() => setEmail(false)}
        description="melquisedeque.martins42@gmail.com"
      >
        <Ai.AiOutlineMail className="icon" />
      </NotificationWindow>
      <NotificationWindow
        title="WhatsApp"
        state={phoneNumber}
        stateFunction={() => setPhoneNumber(false)}
        description="+55 81 98183-1177"
      >
        <Ai.AiOutlineMail className="icon" />
      </NotificationWindow>
      <div className="content">
        <h1 className="title">Buscador de CEP</h1>
        <ul>
          <li>
            <a
              href="https://github.com/Melqui42/Buscador-de-CEP"
              target="_blank"
            >
              <Ai.AiFillGithub className="icon" />
            </a>
          </li>
          <li>
            <button onClick={() => setLisOftTech(!listOfTech)}>
              {!listOfTech ? (
                <Fc.FcFolder className="icon" />
              ) : (
                <Fc.FcOpenedFolder />
              )}

              <ul className={listOfTech ? "listOfTechShow" : "listOfTechHide"}>
                <li className="item">
                  <div>
                    <img
                      src={require("../../assets/images/icons/reactJS.png")}
                      alt=""
                    />
                  </div>
                </li>
                <li className="item">
                  <div>
                    <img
                      src={require("../../assets/images/icons/javaScript.png")}
                      alt=""
                    />
                  </div>
                </li>
                <li className="item">
                  <div>
                    <img
                      src={require("../../assets/images/icons/styledComponents.png")}
                      alt=""
                    />
                  </div>
                </li>
                <li className="item">
                  <div>
                    <img
                      src={require("../../assets/images/icons/axios.png")}
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </button>
          </li>
          <li>
            <button onClick={() => setListOfMySocialNet(!listOfMySocialNet)}>
              <Fc.FcBriefcase className="icon" />

              <ul
                className={
                  listOfMySocialNet
                    ? "listOfMySocialNetShow"
                    : "listOfMySocialNetHide"
                }
              >
                <li className="item">
                  <a
                    href="https://www.linkedin.com/in/melquisedeque-martins-54108a25a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Ai.AiFillLinkedin />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://github.com/Melqui42"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Ai.AiFillGithub />
                  </a>
                </li>
                <li className="item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => phoneNumberNotification()}
                  >
                    <Ai.AiOutlineWhatsApp />
                  </a>
                </li>
                <li className="item">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => emailNotification()}
                  >
                    <Md.MdOutlineMail />
                  </a>
                </li>
              </ul>
            </button>
          </li>
        </ul>
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

import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerCustom">
      <div className="creators">
        Site criado por:
        <div className="groupCreators">
          <div className="individualCreator">
            <a href="https://www.linkedin.com/in/fellype-almeida-queiroz/">
              <img src="https://imagens-revista-pro.vivadecora.com.br/uploads/2017/10/como-usar-o-linkedin-para-empresas.png" />
            </a>
            <p>Fellype Queiroz</p>
          </div>
          <div className="individualCreator">
            <a href="https://www.linkedin.com/in/denisonamaral/">
              <img src="https://imagens-revista-pro.vivadecora.com.br/uploads/2017/10/como-usar-o-linkedin-para-empresas.png" />
            </a>
            <p>Denison Amaral</p>
          </div>
        </div>
      </div>
      <div className="school">
        <div>
          <p>
            Criado como projeto FrontEnd no BootCamp da IronHack São Paulo em
            11/2020.
          </p>
          <p>
            Utilizando de integração de APIs, React JavaScript, Bootstrap entre
            outras bibliotecas
          </p>
        </div>
        <a href="https://www.ironhack.com/br">
          <img src="https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/ajracsdqu5gmyfl6nai0" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

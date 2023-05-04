import React, { useState } from "react";
import "./Footer.css";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <footer>
        <p>© myTouloulist 2023</p>
        <button type="button" className="about-us" onClick={openModal}>
          About us
        </button>
        {/* contain of Modal card */}
        {isModalOpen && (
          <button className="modalContainer" type="button" onClick={closeModal}>
            <div className="aboutUsContent">
              <h2>Qui Sommes-Nous</h2>
              <p>
                Bienvenue sur myTouloulist ! <br />
                <br />
                Nous sommes Gaspard Caillaud, Nolan de Puydt et Jean-Nicaise
                Konan, trois étudiants en développement web à Toulouse. <br />
                <br />
                Ce site a été créé dans le cadre de notre projet d'études, nous
                sommes ravis de pouvoir le partager avec vous. Notre site a été
                conçu dans un but non-commercial et nous sommes fiers de pouvoir
                offrir ce service gratuitement à la communauté toulousaine.{" "}
                <br />
                <br />
                Si vous avez des questions sur ce projet, ou si vous avez des
                idées de fonctionnalités que vous aimeriez voir implémentées,
                n'hésitez pas à nous contacter. Nous sommes toujours ouverts aux
                commentaires et suggestions et sommes ravis de pouvoir
                travailler à l’amélioration de notre site. <br />
                <br />
                Enfin, nous aimerions remercier Toulouse Métropole pour la
                qualité et la disponibilité de ses données. Nous vous invitons à
                visiter leur site Web 🌐:
                <br />
                <a
                  href="https://data.toulouse-metropole.fr/pages/accueil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* {" "}
                  The rel="noreferrer" attribute is included to prevent the
                  linked site from knowing the exact URL of the referring page. */}
                  https://data.toulouse-metropole.fr/pages/accueil/
                </a>
                <br />
                <br />
                Nous espérons que vous prendrez autant de plaisir à naviguer
                dessus que nous à le créer. Merci de votre visite !
              </p>
            </div>
          </button>
        )}
      </footer>
    </div>
  );
}

export default Footer;

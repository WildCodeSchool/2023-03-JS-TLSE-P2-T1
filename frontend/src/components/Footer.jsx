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
          <button
            className="modalAboutContainer"
            type="button"
            onClick={closeModal}
          >
            <div className="modalAboutContent">
              <h2>Qui sommes-nous ?</h2>
              <p>
                Bienvenue sur myTouloulist ! Nous sommes{" "}
                <a href="https://www.linkedin.com/in/gaspardcaillaud/">
                  Gaspard Caillaud
                </a>
                ,{" "}
                <a href="https://www.linkedin.com/in/nolandepuydt/">
                  Nolan de Puydt
                </a>{" "}
                et{" "}
                <a href="https://github.com/jeannicaise">Jean-Nicaise Konan</a>{" "}
                , trois étudiants en développement web à Toulouse.{" "}
              </p>
              <br />
              <p>
                Ce site a été créé dans le cadre de notre projet d'études et
                nous sommes ravis de pouvoir le partager avec vous et d'offrir
                ce service à la communauté toulousaine. 🚀🚀🚀{" "}
              </p>
              <br />
              <p>
                💡Si vous avez des questions sur ce projet, ou si vous avez des
                idées de fonctionnalités que vous aimeriez voir implémentées,
                n'hésitez pas à nous contacter. Nous sommes toujours ouverts aux
                commentaires et suggestions et sommes ravis de pouvoir
                travailler à l’amélioration de notre site.💡{" "}
              </p>
              <br />

              <p>
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
              </p>
              <br />
              <p>
                Nous espérons que vous apprécierez notre site et que vous
                prendre autant de plaisir à naviguer dessus que nous à le créer.
              </p>
              <br />
              <p>Merci de votre visite ! 🙏</p>
            </div>
          </button>
        )}
      </footer>
    </div>
  );
}

export default Footer;

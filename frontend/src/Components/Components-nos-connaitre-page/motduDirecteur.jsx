import React from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/NOS CONNAÎTRE/motDirecteurHeading.png";
import imageDirecteur from "../../assets/images/NOS CONNAÎTRE/directeurMot.png";

function PageHeadingNosConnaitre() {
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 59, 139, 0.9), rgba(0, 59, 139, 0.4), rgba(0,0,0,0)), url(${imageHeading})`,
      }}>
      <div className="absolute inset-0 flex flex-col justify-center pl-10 gap-4 text-white">
        <span className="text-sm uppercase  border-l-4 border-[#00904a]  ps-2 ">
          Nos connaître
        </span>
        <h1 className="text-3xl font-bold">Mot de la direction</h1>
        <p className="text-md w-[900px] ">
          Laissez-vous guider par le mot du Directeur, qui partage sa vision,
          ses ambitions et son message à l’ensemble de la communauté de
          l’institut.
        </p>
      </div>
    </div>
  );
}

function BodyPage() {
  return (
    <div className="container mx-auto  py-10 ">
      <h2 className="text-[#00904a] font-bold text-2xl mb-6 text-center">
        MOT DU DIRECTEUR
      </h2>

      <div className="flex flex-col items-center mb-6 relative">
        <img className="w-[370px] h-[370px]" src={imageDirecteur} alt="" />

        <h3 className="text-[#004a93] font-bold text-lg">Mohamed KARAOUI</h3>
        <p className="text-[#004a93]  text-sm">
          Directeur de l’établissement ISTA Mohamed EL FASSI - ERRACHIDIA
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-justify text-gray-700 space-y-4 text-base leading-7">
        <p>
          C’est avec une grande fierté que je vous souhaite la bienvenue sur la
          plateforme officielle de l’Institut Spécialisé de Technologie
          Appliquée (ISTA) Mohamed El Fassi à Errachidia.
        </p>
        <p>
          Dans un monde en constante évolution, l’accès à l’information et aux
          services digitaux devient un levier essentiel pour le développement de
          la formation professionnelle. À travers ce site web, nous avons pour
          ambition de rapprocher davantage notre institut de ses stagiaires,
          formateurs, partenaires et futurs candidats.
        </p>
        <p>
          Vous y trouverez toutes les informations utiles concernant nos
          filières, nos programmes de formation, les actualités de l’institut,
          ainsi que des services pratiques tels que la consultation des emplois
          du temps, des notes ou encore les offres de stages et d’emplois.
        </p>
        <p>
          Notre objectif est de garantir une communication fluide, une meilleure
          organisation pédagogique et une visibilité renforcée de notre
          institut, en phase avec les exigences du marché de l’emploi.
        </p>
        <p>
          Je tiens à remercier l’ensemble des équipes pédagogiques et
          administratives qui œuvrent chaque jour pour offrir un encadrement de
          qualité à nos stagiaires, ainsi que tous ceux qui ont contribué à la
          réalisation de ce projet digital.
        </p>
        <p>
          Ensemble, continuons à bâtir un avenir professionnel solide pour nos
          jeunes.
        </p>
      </div>
    </div>
  );
}

export function Content() {
  return (
    <>
      <PageHeadingNosConnaitre />
      <BodyPage />
    </>
  );
}

function MotduDirecteur() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default MotduDirecteur;

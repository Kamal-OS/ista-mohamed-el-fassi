import React from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/NOS CONNAÎTRE/HeadingHistory.png";
import MsMohammedELFassi from "../../assets/images/NOS CONNAÎTRE/MohammedElfassi.png";

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
        <h1 className="text-3xl font-bold">Histoire</h1>
        <p className="text-md w-[900px] ">
          Retour sur le parcours de Mohamed El Fassi, figure emblématique du
          savoir et de l’engagement national, dont le nom honore notre institut.
        </p>
      </div>
    </div>
  );
}

function BodyPage() {
  return (
    <div className="max-w-4xl mx-auto  bg-white rounded-lg shadow-md p-7">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-full md:w-1/3">
          <img
            src={MsMohammedELFassi}
            alt="Mohammed Ghali El Fassi"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
          <p className="text-sm text-[#004a93] mt-2 text-center">
            Mohammed Ghali El Fassi (1908-1991)
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Mohammed Ghali El Fassi
          </h1>
          <p className="text-gray-600 mb-4">
            Né en 1908 à Fès et mort à Rabat le 21 décembre 1991, est un homme
            d'État marocain.
          </p>
          <p className="text-gray-700 mb-4">
            Comme son cousin Allal El Fassi, il passera au nationalisme et à
            l'Istiqlal en étant le lien entre le Sultan Mohammed V et les
            nationalistes durant la période préindépendance, où son rôle était
            de transmettre les informations de l'extérieur vers l'intérieur du
            Palais Royal. Il a été aussi l'un des signataires du Manifeste de
            l'indépendance du 11 janvier 1944 et a été longuement emprisonné
            pour son nationalisme et sa proximité avec Feu Mohammed V.
          </p>
          <p className="text-gray-700 mb-4">
            Il eut une formation au collège Moulay-Driss de Fès puis à la
            Quaraouiyine dont il deviendra le recteur. Plus tard, il obtiendra
            une licence en lettres à la Sorbonne ainsi qu'un diplôme de
            l'institut des langues orientales.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Études</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Licence ès lettres – Diplôme de l’Ecole des langues orientales
            (1929-1931)
          </li>
          <li>
            Etudes univers itaires à Paris – Diplôme des études supérieures
            (1932)
          </li>
          <li>
            Doctorat honorifique de l’Université Bridge port (Connecticut-
            Etats-Unis), de l’Université de Lagos (Nigéria) et de l’Université
            de Djakarta (Indonésie)
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Postes scientifiques et politiques:
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Professeur au collège royal</li>
          <li>Directeur de l'Université Al Qaraouiyine</li>
          <li>
            Ministre de l'éducation nationale au premier gouvernement du Maroc
            indépendant (1955) et dans le second gouvernement (1956)
          </li>
          <li>
            Ministre d'Etat chargé des affaires culturelles et de l'enseignement
            originel (1968)
          </li>
          <li>
            Président du Bureau permanent de la Commission nationale marocaine
            de l'éducation, de la culture et des sciences
          </li>
          <li>
            Président du Centre de coordination entre les commissions nationales
            arabes de l'éducation, de la culture et des sciences (UNESCO-ALESCO)
          </li>
          <li>Membre de l'Académie de la langue arabe du Caire (1958)</li>
          <li>Membre de l'Académie des sciences irakienne</li>
          <li>Membre de l'Académie de la langue arabe de Damas</li>
          <li>Président de l'association des sciences humaines</li>
          <li>Membre du Conseil exécutif de l'UNESCO (1958-1966)</li>
          <li>Président du Conseil exécutif de l'UNESCO (1964-1966)</li>
          <li>Président du Conseil de l'Institut d'arabisation (Maroc)</li>
          <li>Président de la Ligue des universités islamiques</li>
          <li>Président de l'association des universités africaines</li>
          <li>
            Membre honorifique du Centre méditerranéen de la musique comparée
          </li>
          <li>
            Membre fondateur de l'association des études pour le développement
            des relations maroco-américaines
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Content() {
  return (
    <>
      <PageHeadingNosConnaitre />
      <div className="p-5">
        <BodyPage />
      </div>
    </>
  );
}

function HistoirISTA() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default HistoirISTA;

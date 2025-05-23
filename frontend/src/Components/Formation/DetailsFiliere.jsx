import { useParams } from "react-router-dom";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/Formation/HeadPage.png";
import iconeNiveau from "../../assets/images/ACTUALITÉS/icones/EcriteurIcone.png";
import iconeClock from "../../assets/images/ACTUALITÉS/icones/ClockIcone.png";
import iconeDiplome from "../../assets/images/ACTUALITÉS/icones/DiplomeIcon.png";
import iconePanne from "../../assets/images/ACTUALITÉS/icones/PremierAnneIcone.png";
import { FaUser, FaClock, FaGraduationCap } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

// page heading
function HeadingPage() {
  const Intitule = useParams().filiere;
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 59, 139, 0.9), rgba(0, 59, 139, 0.4), rgba(0,0,0,0)), url(${imageHeading})`,
      }}>
      <div className="absolute inset-0 flex flex-col justify-center pl-10 gap-4 text-white">
        <span className="text-sm uppercase  border-l-4 border-[#00904a]  ps-2 ">
          FORMATIONS
        </span>
        <h1 className="text-3xl font-bold">{Intitule}</h1>
      </div>
    </div>
  );
}
// content
const CardPresentation = ({ img, titre, bg, colorText }) => {
  var bgCadre = "bg-gray-300";
  if (titre === "Cours du jour") {
    bgCadre = "bg-[#00904a]/20";
  }
  if (titre === "Diplomante") {
    bgCadre = "bg-[#004a93]/30";
  }
  if (titre === "Tronc commun") {
    bgCadre = "bg-[#00904a]/20";
  }

  return (
    <div className="relative w-[250px]  mx-auto ">
      <div
        className={`absolute -top-1 left-1/2 transform -translate-x-1/2 bg-${bg} rounded-full p-2`}>
        <img src={img} alt="Custom Icon" className="w-5 h-5 object-contain" />
      </div>

      {/* Card */}
      <div
        className={`mt-5 ${bgCadre} rounded-lg px-6 py-4 text-center flex flex-col justify-center h-[100px]`}>
        <p className={`text-${colorText} font-bold `}>{titre}</p>
      </div>
    </div>
  );
};

export function PresentationFiliere() {
  return (
    <>
      <div className="flex justify-center mt-10 py-5 gap-6 flex-wrap">
        <CardPresentation
          img={iconeNiveau}
          titre="Technicien Spécialisé"
          bg="[#a4a3a3]"
          colorText="black"
        />
        <CardPresentation
          img={iconeClock}
          titre="Cours du jour"
          bg="[#00904a]"
          colorText="[#00904a]"
        />
        <CardPresentation
          img={iconeDiplome}
          titre="Diplomante"
          bg="[#004a93]"
          colorText="[#004a93]"
        />
        <CardPresentation
          img={iconePanne}
          titre="Tronc commun"
          bg="blue-500"
          colorText="blue-500"
        />
      </div>

      <div className="py-6 px-4">
        <h1 className="text-[#004a93] font-bold text-3xl">
          <span className="border-b-4 pb-1 border-[#004a93]">Pr</span>ésentation
          du tronc commun
        </h1>

        <p className="py-5 text-xl">
          Le tronc commun en Développement Digital est une étape importante pour
          acquérir les bases nécessaires à l'étude, la conception, la
          construction, le développement, la mise au point, la maintenance et à
          l'amélioration des logiciels, des applications et des sites web. Au
          cours de cette étape, qui dure une année de formation professionnelle,
          les stagiaires suivent une formation qui a la vocation de répondre à
          deux types de compétences :
        </p>

        <ul className="space-y-1 text-xl pl-6">
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
            <strong>Compétences transversales :</strong> Les langues,
            l'entrepreneuriat, compétences comportementales et sociales, culture
            et techniques avancées du numérique.
          </li>
          <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
            <strong>Compétences techniques :</strong> Acquérir les bases de
            l'algorithmique, programmer en orienté objet, développer des sites
            web statiques, programmer en JavaScript, développer des sites web
            dynamiques.
          </li>
        </ul>
      </div>
    </>
  );
}

// card
// Card Presentation des FILIERES
const CardFiliere = ({ Information }) => {
  return (
    <div className="max-w-sm w-[350px] p-5 bg-white rounded-xl shadow border h-auto flex flex-col gap-5">
      <h2 className="text-3xl font-bold text-black leading-tight">
        {Information.title}
      </h2>

      <div className="mt-4 space-y-4">
        <div className="flex items-center bg-gray-200 rounded-md px-3 py-2">
          <FaUser className="mr-2 text-gray-600" />
          <span className="text-sm font-medium text-gray-800">
            {Information.Niveaux}
          </span>
        </div>

        <div className="flex items-center bg-green-100 rounded-md px-3 py-2">
          <FaClock className="mr-2 text-green-600" />
          <span className="text-sm font-medium text-green-800">
            {Information.mode}
          </span>
        </div>

        <div className="flex items-center bg-blue-200 rounded-md px-3 py-2">
          <FaGraduationCap className="mr-2 text-blue-900" />
          <span className="text-sm font-medium text-blue-900">
            {Information.certification}
          </span>
        </div>
      </div>
    </div>
  );
};
//
function OptionDisponible() {
  return (
    <>
      <div className="py-5">
        <h1 className="font-bold text-4xl text-[#004a93] text-center">
          Les options de la deuxième année
        </h1>
        <div className="flex justify-between py-10">
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
          <CardFiliere
            Information={{
              title: "Développement Digital option Applications Mobiles",
              Niveaux: "Technicien Spécialisé",
              mode: "Cours du jour",
              certification: "Diplomante",
            }}
          />
        </div>
      </div>
    </>
  );
}



function Programme() {
  const syllabus = [
    "EGTS101 : ARABE",
    "EGTS102 : FRANÇAIS",
    "EGTS103 : ANGLAIS TECHNIQUE/ESPAGNOLE",
    "EGTS104 : CULTURE ENTREPRENEURIALE-PARTIE 1",
    "EGTS105 : COMPÉTENCES COMPORTEMENTALES ET SOCIALES",
    "EGTS106 : ENTREPRENEURIAT-P1",
    "EGTS107 : CULTURE ET TECHNIQUES AVANCÉES DU NUMÉRIQUE",
  ];
  
  const modules = [
    "M101 : SE SITUER AU REGARD DU MÉTIER ET DE LA DÉMARCHE DE FORMATION",
    "M102 : ACQUÉRIR LES BASES DE L’ALGORITHMIQUE",
    "M103 : PROGRAMMER EN ORIENTÉ OBJET",
    "M104 : DÉVELOPPER DES SITES WEB STATIQUES",
    "M105 : PROGRAMMER EN JAVASCRIPT",
    "M106 : MANIPULER DES BASES DE DONNÉES",
    "M107 : DÉVELOPPER DES SITES WEB DYNAMIQUES",
    "M108 : S’INITIER À LA SÉCURITÉ DES SYSTÈMES D’INFORMATION",
  ];
  return (
    <div className="bg-white text-[#0049B7] p-6 md:p-12 space-y-8">
      <h1 className="text-2xl font-bold">Programme de formation</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4 col-span-2">
          <section>
            <h2 className="font-semibold text-xl">Conditions d'admission</h2>
            <ul className="list-disc list-inside text-black text-sm">
              <li>Âge limite : Au plus 30 ans au 1er Septembre 2023 ; Au plus 33 ans au 1er Septembre 2023 pour les bénéficiaires du Système des Passerelles.</li>
              <li>Niveau scolaire : Être titulaire du baccalauréat au moins ou équivalent ou avoir un diplôme de niveau Technicien, selon le tableau de correspondance 2023/2024.</li>
              <li>Branche(s) du Bac : Science ; Techniques scientifiques.</li>
              <li>Aptitudes et qualités :
                <ul className="list-disc list-inside ml-5">
                  <li>Sens des responsabilités</li>
                  <li>de l’organisation et de la discipline</li>
                  <li>Capacités d’analyse et de synthèse</li>
                  <li>Sens du service</li>
                  <li>Esprit d’initiative</li>
                  <li>Curiosité pour les nouvelles technologies de l’information</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Évaluation de la formation</h2>
            <p className="text-black text-sm">
              La formation dispensée est modulaire et les évaluations sont organisées selon l’acquisition du champ de compétence :
            </p>
            <ul className="list-disc list-inside text-black text-sm ml-5">
              <li>Contrôles continus ;</li>
              <li>Examens de fin de module.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Modalités de sélection</h2>
            <p className="text-black text-sm">
              L’inscription et la confirmation, hors délibérations, sont possibles pour les candidats ayant une moyenne au baccalauréat supérieure ou égale à 12/20 ainsi que les candidats disposant d’un Baccalauréat Technique ou Professionnel en respectant le tableau de correspondance entre l’option du baccalauréat et les filières de formation choisies.
            </p>
            <p className="text-black text-sm mt-2">
              Le classement des candidats se fait selon la moyenne du baccalauréat en respectant les classes suivantes :
            </p>
            <ul className="list-disc list-inside text-black text-sm ml-5">
              <li className="text-[#0049B7]">Les candidats de toutes les branches ayant une moyenne supérieure ou égale à 12/20;</li>
              <li className="text-[#0049B7]">Les candidats ayant un baccalauréat option Sciences Mathématiques et une moyenne inférieure à 12/20;</li>
              <li className="text-[#0049B7]">Les candidats ayant un baccalauréat technique (dont le Bac Pro) et une moyenne inférieure à 12/20;</li>
              <li className="text-[#0049B7]">Les candidats des autres options ayant une moyenne inférieure à 12/20.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Organisation de la formation</h2>
            <ul className="list-disc list-inside text-black text-sm">
              <li>La durée de formation du tronc commun est étalée sur 2 semestre(s) ;</li>
              <li>Le programme peut être dispensé en mode de formation résidentiel ou alterné ;</li>
            </ul>
          </section>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="font-semibold text-xl">Compétences</h2>
            <ul className="space-y-2 text-black text-sm">
              {syllabus.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{item}</span>
                  <FaDownload className="text-[#0049B7] cursor-pointer" />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Modules</h2>
            <ul className="space-y-2 text-black text-sm">
              {modules.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{item}</span>
                  <FaDownload className="text-[#0049B7] cursor-pointer" />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


// programme
function PresentationProgrammeEtude() {
  return (
    <>
    <div className="py-7">
      <h1 className="text-[#004a93] font-bold text-4xl "><span className="border-b-4 border-[#004a93] py-2">To</span>us ce que vous devez savoir</h1>
    <ProgramInfo />
    </div>
    </>
  )
}
function PageBody() {
  return (
    <>
      <HeadingPage />
      <div className="container mx-auto">
        <PresentationFiliere />
        <OptionDisponible />
        <Programme />
      </div>
    </>
  );
}

function DetailsFiliere() {
  return (
    <>
      <Header />
      <PageBody />
      <Footer />
    </>
  );
}

export default DetailsFiliere;

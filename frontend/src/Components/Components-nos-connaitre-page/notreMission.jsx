// librarys
import React,{useState} from "react";
// components
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/NOS CONNAÎTRE/headingImage.png";
import formateurCard from "../../assets/images/NOS CONNAÎTRE/formateurCard.png";
import stafCard from "../../assets/images/NOS CONNAÎTRE/stafCard.png";
import formationCard from "../../assets/images/NOS CONNAÎTRE/formationCard.png";
import stagiaireCard from "../../assets/images/NOS CONNAÎTRE/Stagiaire.png";
import directeurImage from "../../assets/images/NOS CONNAÎTRE/directeur.jpg";
import imageSectionChange1 from "../../assets/images/imageCardAcctualites.png";
import imageSectionChange2 from "../../assets/images/imageIsta2.png";
import imageSectionChange3 from "../../assets/images/imageIsta3.png";
import imageSectionChange4 from "../../assets/images/imageCardAcctualites.png";


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
        <h1 className="text-3xl font-bold">Presentation de l’etablissement</h1>
        <p className="text-md w-[900px] ">
          Explorez les chiffres clés, la mission, la vision, les valeurs, les
          principes éthiques et l’offre de formation de l’ISTA MOHAMED EL FASSI,
          reflet de notre engagement envers l’excellence professionnelle.
        </p>
      </div>
    </div>
  );
}
// component create card
function CreateCard({ img, nombre, role, bg }) {
  return (
    <>
      <div
        className={
          "flex flex-col items-center gap-4 w-[254px] h-[252px] rounded-[14px] p-7"
        }
        style={{ backgroundColor: bg }}>
        <div className="flex flex-col items-center gap-3">
          <img
            src={img}
            alt="Icone card"
          />
          <span className="text-2xl font-bold text-white text-center mt-3">
            {nombre.toLocaleString().replace(/,/, ' ')}
          </span>
        </div>
        <div className="text-[16px] text-white text-center">{role}</div>
      </div>
    </>
  );
}
// statistique ista
function CardStatistique() {
  return (
    <>
      <div className="flex justify-between p-5">
        <CreateCard
          img={stagiaireCard}
          nombre={5000}
          role={"Stagiaires"}
          bg={"#004a93"}
        />
        <CreateCard
          img={formateurCard}
          nombre={52200}
          role={"Formateur"}
          bg={"#004a93"}
        />
        <CreateCard
          img={formationCard}
          nombre={5000}
          role={"Formation"}
          bg={"#004a93"}
        />
        <CreateCard
          img={stafCard}
          nombre={5000}
          role={"Staff administratif"}
          bg={"#004a93"}
        />
      </div>
    </>
  );
}

// starts

const sections = [
  {
    id: 'mission',
    title: 'Notre Mission',
    content: `L’ISTA Mohamed El Fassi Errachidia a pour mission principale de former des professionnels qualifiés, capables de s’intégrer rapidement dans le monde du travail et de répondre efficacement aux besoins des entreprises. Nous visons à doter nos apprenants de compétences techniques et comportementales de haut niveau.`,
    images: [
      imageSectionChange1,
      imageSectionChange2,
      imageSectionChange3,
      imageSectionChange4
    ],
  },
  {
    id: 'vision',
    title: 'Notre Vision',
        content: `Nous aspirons à devenir un institut de formation de référence au niveau régional et national, reconnu pour l’excellence de ses programmes, son innovation pédagogique, et sa capacité à accompagner la transformation des métiers et des secteurs industriels.`,
    images: [
      imageSectionChange1,
      imageSectionChange3,
      imageSectionChange4,
      imageSectionChange2
    ],
  },
  {
    id: 'valeurs',
    title: 'Nos Valeurs',
    content: `L’ISTA Mohamed El Fassi Errachidia a pour mission principale de former des professionnels qualifiés, capables de s’intégrer rapidement dans le monde du travail et de répondre efficacement aux besoins des entreprises. Nous visons à doter nos apprenants de compétences techniques et comportementales de haut niveau.`,
    images: [
      imageSectionChange1,
      imageSectionChange2,
      imageSectionChange3,
      imageSectionChange4
    ],
  },
  {
    id: 'ethique',
    title: 'Nos principes éthiques',
        content: `L’ISTA Mohamed El Fassi Errachidia a pour mission principale de former des professionnels qualifiés, capables de s’intégrer rapidement dans le monde du travail et de répondre efficacement aux besoins des entreprises. Nous visons à doter nos apprenants de compétences techniques et comportementales de haut niveau.`,
    images: [
      imageSectionChange1,
      imageSectionChange2,
      imageSectionChange3,
      imageSectionChange4
    ],
  },
  {
    id: 'formation',
    title: 'Offre de formation',
        content: `L’ISTA Mohamed El Fassi Errachidia a pour mission principale de former des professionnels qualifiés, capables de s’intégrer rapidement dans le monde du travail et de répondre efficacement aux besoins des entreprises. Nous visons à doter nos apprenants de compétences techniques et comportementales de haut niveau.`,
    images: [
      imageSectionChange1,
      imageSectionChange2,
      imageSectionChange3,
      imageSectionChange4
    ],
  },
];

function SectionChange() {
  const [active, setActive] = useState(0);

  const handleClick = (index, id) => {
    setActive(index);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex h-full p-4">
      <div className="w-1/4 p-6">
        <div className="flex flex-col items-start  relative">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-start ">
              <div className="flex flex-col items-center mr-3 ">
                <button
                  onClick={() => handleClick(index, section.id)}
                  className={`w-10 h-10 rounded-full border-2 font-bold text-sm flex items-center justify-center   ${
                    active === index
                      ? 'bg-blue-700 text-white border-blue-700 '
                      : 'bg-white text-gray-500 border-gray-300 '
                  }`}
                >
                  {index + 1}
                </button>
                {index < sections.length - 1 && (
                  <div className="w-[3.5px] h-10 bg-gray-400" />
                )}
              </div>
              <span
                className={`font-semibold  mt-1 ${
                  active === index ? 'text-blue-700 text-md' : 'text-gray-400 text-sm'
                }`}
              >
                {section.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <div className="w-3/4 border-l-3 border-gray-300 p-6">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            className={`${index === active ? 'block' : 'hidden'}`}
          >
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              {index + 1}. {section.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>

            {section.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {section.images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`img-${i}`}
                    className="rounded shadow object-cover h-50 w-full"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


// ends



function NotreMissionPage() {
  return (
    <>
      <Header />
      <div className="">
        <PageHeadingNosConnaitre />
        <div className="container mx-auto ">
          <CardStatistique />
        </div>
          <div className="border-b-1 border-black my-5"></div>
          <div className="container mx-auto flex justify-around  p-5">
            <div className="w-[180px] h-[180px]">
              <img src={directeurImage} alt="" className=" rounded-[50%]"/>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <h1 className="text-3xl font-bold">“Former aujourd’hui les compétences de demain.”</h1>
              <span className="text-center">Mohamed karaoui</span>
              <span className="text-center">Directeur, ista mohamed el fassi - errachidia</span>
            </div>
          </div>
          <div className="border-b-1 border-black my-5"></div>
          <div className="container mx-auto">
            <SectionChange />
          </div>
          
      </div>
      <Footer />
    </>
  );
}

export default NotreMissionPage;









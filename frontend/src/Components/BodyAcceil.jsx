import React, { useState } from "react";
import img1 from "../assets/images/image.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import iconeActualites from "../assets/Icones/ActualliteIcone.png";
import imageCardAcctualitess from "../assets/images/imageCardAcctualites.png";
import image2 from "../assets/images/imageIsta2.png";
import image3 from "../assets/images/imageIsta3.png";
import ServiceDisponibleImage from "../assets/images/imageServiceIsta.png";
import ImageStagiaireStati from "../assets/images/StagaireStatistique.png";
import ImageStafStati from "../assets/images/StafeStatistique.png";
import ImageCisco from "../assets/images/Logo_Hover_Effect.png";
import ImageAfrique from "../assets/images/Logo_Hover_Effect-4.png";
import ImageOracle from "../assets/images/Logo_Hover_Effect-1.png";
import ImageMicrosoft from "../assets/images/PartenaireMicrosoft.png";
import ImageAmazone from "../assets/images/Logo_Hover_Effect-3.png";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: img1,
      titreImage: "Les opportunités dans le monde de l’IA",
      textImage:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      src: img2,
      titreImage: "China-North Africa Competition with OFPPT",
      textImage:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      src: img3,
      titreImage: "Les calendriers des examens fin de formation",
      textImage:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).o using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).o using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full "
      data-carousel="static">
      <div className="relative h-56 overflow-hidden md:h-[600px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
              activeIndex === index ? "block" : "hidden"
            }`}
            data-carousel-item>
            <img
              src={image.src}
              className="w-full h-full " // This ensures the whole image is visible without cropping
              alt={`carousel-item-${index}`}
            />
            <div class="absolute top-40 right-0 p-7 w-[470px] h-[290px] bg-[#004A93] text-white p-6 overflow-hidden">
              <h3 class="text-[28px] font-bold mb-2">{image.titreImage}</h3>
              <p class="text-[16px] line-clamp-6 w-[360px]">
                {image.textImage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500  dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
//
function CreateCard({ img, titre, text, bg }) {
  return (
    <>
      <div
        className={
          "flex flex-col items-center gap-4 w-[234px] h-[212px] rounded-[14px] p-7"
        }
        // I use this declaration of bg because sometime Tailwind not support bg in class
        style={{ backgroundColor: bg }}>
        <div className="flex flex-col items-center gap-2">
          <img src={img} alt="Formation Icone" className="w-[50px] h-[50px]" />
          <span className="text-xl font-semibold text-white text-center">
            {titre}
          </span>
        </div>
        <div className="text-[14px] text-white text-center">{text}</div>
      </div>
    </>
  );
}
function CardsAccueil() {
  return (
    <>
      <div
        id="CardAccueil"
        className="w-full mt-5 mb-5  h-[250px] py-4 container mx-auto">
        <div className="flex justify-center gap-24 ">
          <CreateCard
            img="https://img.icons8.com/?size=100&id=11173&format=png&color=FFFFFF"
            titre="NOS formations"
            text="Tous les cours disponibles dans notre établissement"
            bg="#004a93"
          />

          <CreateCard
            img="https://img.icons8.com/?size=100&id=104385&format=png&color=FFFFFF"
            titre="E-COURS"
            text="Votre passerelle vers la plateforme e-learning"
            bg="#00904a"
          />
          <CreateCard
            img="https://img.icons8.com/?size=100&id=79615&format=png&color=FFFFFF"
            titre="Emplois du temps"
            text="Accédez aux emplois du temps de votre formation"
            bg="#a4a3a3"
          />
        </div>
      </div>
    </>
  );
}
// Annonce Recente Accueil
function CreateLine({ icone, titre }) {
  return (
    <>
      <div className="flex items-center justify-center gap-2 w-full my-6">
        <div className="flex-grow h-[1.5px] bg-[#004a93]"></div>
        <div className="flex items-center gap-2 px-4">
          <img src={icone} alt="icon" className="w-8 h-8]" />
          <span className="text-2xl font-semibold text-[#004a93]">
            {titre.toUpperCase()}
          </span>
        </div>
        <div className="flex-grow h-[1.5px] bg-[#004a93]"></div>
      </div>
    </>
  );
}
function CardActualitess({
  image = imageCardAcctualitess,
  GroupeCible,
  Titre,
  date,
}) {
  return (
    <>
      <div className="w-[470px] h-[460px] bg-[#F2F2F2] rounded-2xl">
        <div className="absolute w-[330px] h-[300px] bg-[#004a93] clip-trapezoid rounded-t-2xl p-5">
          <div className="w-[130px] h-9 bg-[#00904a] p-2 mt-10 font text-white font-bold mb-5">
            {GroupeCible}
          </div>
          <div className="flex flex-col gap-6 p-3 max-w-[200px]">
            <p className="font text-[16px] font-bold text-white ">
              {Titre.toUpperCase()}
            </p>
            <p className="font text-[14px] text-white ">
              ISTA MOHAMED EL FASSI ERRACHIDIA
            </p>
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="w-full h-[300px] ms-0 rounded-t-2xl"
        />
        <div className="h-9 w-f bg-[#A4A3A3] p-2">
          <span className="flex justify-center gap-2">
            <img
              src="https://img.icons8.com/?size=100&id=kCYgJWe7oksb&format=png&color=FFFFFF"
              alt=""
              className="size-6"
            />
            <span className="text-white">{date}</span>
          </span>
        </div>
        <div className="p-7 font font-bold text-[20px] text-center">
          {Titre.toUpperCase()}
        </div>
      </div>
    </>
  );
}
function Actualitess() {
  return (
    <>
      <div className="w-full mt-5 mb-5  h-[600px] py-4 container mx-auto">
        <CreateLine icone={iconeActualites} titre={"Actualitéss"} />
        <div className="flex justify-center gap-10 p-5">
          <CardActualitess
            date="10-10-2000"
            Titre="Les calendriers des fins de formations"
            GroupeCible="VIE STAGIARES"
          />
          <CardActualitess
            date="10-10-2000"
            Titre="Les calendriers des fins de formations"
            GroupeCible="VIE STAGIARES"
          />
          <CardActualitess
            date="10-10-2000"
            Titre="Les calendriers des fins de formations"
            GroupeCible="VIE STAGIARES"
          />
        </div>
      </div>
    </>
  );
}
function PresentationISTA() {
  return (
    <>
      <div className="w-full mt-5 mb-5  h-[600px] py-4 container mx-auto">
        <div className="flex justify-start gap-[1px] p-10">
          <div
            id="images"
            className="h-[500px] w-[700px] flex justify-start gap-5 p-5">
            <div className="">
              <img
                src={imageCardAcctualitess}
                alt=""
                className="w-[430px] h-[450px] rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-start gap-5">
              <img
                src={image2}
                alt=""
                className="w-[350px] h-[215px] rounded-xl"
              />
              <img
                src={image3}
                alt=""
                className="w-[350px] h-[215px] rounded-xl"
              />
            </div>
          </div>
          <div id="Content" className=" h-[500px] w-[600px] p-5">
            <h1 className="text-[#004A93] font-bold font text-[30px] ">
              À LA DECOUVERTE D’ISTA MOHAMED EL FASSI
            </h1>
            <div className="font text-[30px] font-medium py-5 ">
              {"Notre institut, notre engagement.".toUpperCase()}
            </div>
            <p className="font text-[#707070] text-[20px] max-w-[600px] py-5">
              L’Institut Spécialisé de Technologie Appliquée Mohamed El Fassi
              d’Errachidia est un établissement public relevant de l’OFPPT. Il a
              pour mission de former des techniciens et des professionnels
              qualifiés, capables de répondre aux besoins du marché du travail
              et de contribuer au développement économique et social, au niveau
              régional et national.
            </p>
            <div className="flex gap-4 py-7">
              <span className="font-bold text-[23px]">LA SUITE</span>
              <svg
                width="13"
                height="32"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.0950232 2.2689L1.76711 0.598391L10.8745 9.70265C11.0213 9.84853 11.1378 10.022 11.2173 10.2131C11.2968 10.4042 11.3378 10.6091 11.3378 10.8161C11.3378 11.023 11.2968 11.2279 11.2173 11.419C11.1378 11.6101 11.0213 11.7836 10.8745 11.9295L1.76711 21.0385L0.0965986 19.3679L8.64455 10.8184L0.0950232 2.2689Z"
                  fill="#2B2B2B"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SectionService() {
  return (
    <>
      <div className="w-full py-10">
        <img src={ServiceDisponibleImage} alt="" />
      </div>
    </>
  );
}
function CreateCardStatistique({ Image, Number, GroupeCible }) {
  return (
    <>
      <div className="flex flex-col items-center gap-2 h-[250px] w-auto ">
        <img src={Image} alt="" className="size-36" />
        <span className="text-[#004A93] font-extrabold text-[30px] ">
          {Number}
        </span>
        <span className=" font-bold text-[25px]">
          {GroupeCible.toUpperCase()}
        </span>
      </div>
    </>
  );
}
function StatistiqueIsta() {
  return (
    <div className="w-full container mx-auto">
      <CreateLine
        icone={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEL0lEQVR4nO1Ya4hVVRRephlmZASRUVH2wsw0kqyUModp5qx1ZiqJ2y/BCulH0MPAwP5cpUCkdOasda56oyIqoqaXYEEOSUX2Ig0iESW1ILEX5viITB1vnH11rufsde7xXvcdEM4H+8/h2+t8a++1115rA+TIkSPHGYbKCCgsHwNnFPzeyYDMQLIdiA8DSQWIB4BkHaDMh0JxdFN2u3giEP9btRcb77gR7gXnAPFKQD6q/KQ2kHcA8syGbBeLZwHJBtseD4C/6tLTFx+FCfLndYXHxyFAvu+U7aM8odrxZR44AckbDYg/MQ6acMu0HV4BxAeU+evNGTtt+HJXisCtgLIUUBYB8tu185AUkQHkj3XnV14FTkC8VonNXij0jYzxvNIUINltcbvk5nTx8lDK4jzmRnwU+1Zm4C9St9aXTsXZosqlcDyQ7FHEf20tTtMwqS3xAy94uO4ckl/jWUne1Hn8rnr4vWCSG/HGAbldcaCj7hzkrxJz1lkcL+hOScHPgFP4vdcqIfFo/XzOfyR24PUYp708DpB3KXZ/gGnls906EN2qJPsSgn5MvW2J5yrCFsY58rKy+kfAD6ZBSxDFsLXV8h7c23OBFRYo+xPijwHKdTXxwWzzzba3FFoGn6cCyqDy070m/yOXgfg7Paalb8hOV/ncav1k7dC21heEJMsavolRfoeO0uVDNpB7FM4gUHgntByFvpENlhN7wAtuG5rv83S1CEQpwfChMgKIF1iH2k6Fn4IXXF1zvjjaHHybt8tkpGGHF1wEnjwJxP1A/BMg/wYk3wPKakBus/goi1VHfbkn9R/t5XHuU2ozoNL15na1V/+1GO/u58ce390NtdLFZLCdJsw6wxuGX3x0qaF8qYj/y+ziCSCjWgRSbM5RIA6b7vaaAspTuqDwgSEO8YOZHR7FxnrTGbYcnT1X6k0Kr605yDNTeohKxnhxOLJVvyJ+ALzgslp48SYlVP4BlJdMi4n8nGmabDvHTFpuGaKXCf1im1/jcJsifofVhc0qjjIPCba9t1ojvnPFJYD8t3o3nNwEoaywOF7pljrJYGOCv89d03MykN9Xw6IjvCbOkw8TYbG5rl3ix22Hj4ejM/hS0A8dL7AdTaZX7q9rG+V+JSRvdCe+Y/mFpnizf/KtutXIaxLcnzMcWGTZ7u692J0DyK8q4v9LfRdCXqKUFnNU7qzwPED+JcHf7ebNqCqmTW1S0l4jIlB4U0p/gTFetMrEnyi2V7kRH9UwUfqzD+6WzBuT+KOUdLsRiF8xl16UAGzOIejmCW4cqL5SJwUMAgUzMudGJbf+LlSpO5CfdiOewltT6pgXTtmGz3eo9walDnH51L5ZWf2dJqwaQdT0k3yWIfzPzAe1Bn/6bEqN0t60TQpmm9of+Ztq1jEL9AH48gh4wfnuxOfIkSNHDtDxP5gddoZsTI3FAAAAAElFTkSuQmCC"
        }
        titre={"L’établissement en chiffres"}
      />
      <div className="flex justify-around">
        <CreateCardStatistique
          Image={ImageStagiaireStati}
          Number={30000}
          GroupeCible={"STAGIAIRES"}
        />
        <CreateCardStatistique
          Image={ImageStagiaireStati}
          Number={4000}
          GroupeCible={"formateurs"}
        />
        <CreateCardStatistique
          Image={ImageStagiaireStati}
          Number={12000}
          GroupeCible={"formations"}
        />
        <CreateCardStatistique
          Image={ImageStafStati}
          Number={10000}
          GroupeCible={"staff administratif"}
        />
      </div>
    </div>
  );
}
function Partenaire() {
  return (
    <div className="w-full container mx-auto">
      <CreateLine
        icone={
          "https://img.icons8.com/?size=100&id=xGUZ15gQQ60G&format=png&color=004A93"
        }
        titre={"Nos partenaires"}
      />
<div className="flex justify-around py-10 gap-4 flex-wrap">
  {[ImageCisco, ImageAfrique, ImageOracle, ImageMicrosoft, ImageAmazone].map((img, index) => (
    <div
      key={index}
      className="p-4 rounded-lg transition duration-300 hover:bg-transparent hover:grayscale-0 grayscale"
    >
      <img src={img} alt="" className="w-30 h-30 object-contain" />
    </div>
  ))}
</div>

    </div>
  );
}
function BodyAcceil() {
  return (
    <>
      <Carousel />
      <CardsAccueil />
      <Actualitess />
      <PresentationISTA />
      <SectionService />
      <StatistiqueIsta />
      <Partenaire />
    </>
  );
}

export default BodyAcceil;

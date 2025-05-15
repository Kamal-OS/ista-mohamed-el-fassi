import React from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
import imageHeading from "../../assets/images/NOS CONNAÎTRE/AmbassadeursHeading.png";
import imgG from "../../assets/images/NOS CONNAÎTRE/Man.png";
import imgF from "../../assets/images/NOS CONNAÎTRE/women.png";
function HeadingPage() {
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
        <h1 className="text-3xl font-bold">Ambassadeurs</h1>
      </div>
    </div>
  );
}

function Content() {
    const images = [imgG, imgF]
    const LesAmbassadeurs = Array.from({ length: 13 }, (_, i) => ({
        id: i + 1,
        nomC: "Nom PRÉNOM",
        filière: "filière",
        image: images[Math.floor(Math.random() * images.length)],
      }));
  return (
    <>
      <HeadingPage />
      <div className="container mx-auto">
        <p className="w-[90%] font-[18px] py-10 ">
          Les ambassadeurs de l’ISTA MOHAMED EL FASSI jouent un rôle essentiel
          au sein de l’institut. Véritables relais entre l’administration et les
          stagiaires, ils contribuent activement à la vie de l’établissement.
          Ils participent à l’organisation d’événements, soutiennent la
          communication interne. Leur engagement est reconnu chaque fin d’année
          par la remise de certificats valorisant leur implication et leur
          esprit de leadership.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className=" border-2 border-transparent rounded-1xl p-2 bg-[#00904a] text-white w-60 text-center">
            Devenir Ambassadeur
          </a>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#004a93]">Ambassadeurs</h1>
          <div className="border-3 border-[#004a93] w-20"></div>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-6 py-5 mb-6">
        {LesAmbassadeurs.map((person) => (
          <div
            key={person.id}
            className="w-[220px] h-[250px] bg-gray-100 relative shadow-md">
            <img
              src={person.image}
              alt={person.nomC}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-white/50 backdrop-blur-sm  p-3">
              <h3 className="text-sm font-bold text-[#004a93]">
                {person.nomC}
              </h3>
              <p className="text-xs text-black">
                {person.filière}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

function Ambassadeurs() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Ambassadeurs;

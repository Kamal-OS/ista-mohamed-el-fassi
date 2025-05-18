import React, { useState } from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imgG from "../../assets/images/NOS CONNAÎTRE/Man.png";
import imgF from "../../assets/images/NOS CONNAÎTRE/women.png";
import imageHeading from "../../assets/images/NOS CONNAÎTRE/CorpsEnseignantsHeading.png";
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
        <h1 className="text-3xl font-bold">Staff administratifs</h1>
      </div>
    </div>
  );
}

function Content() {
  // LesProfesseurs = formateurs + formatrices
  const images = [imgG, imgF];
  const LesProfesseurs = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    nomC: "Nom PRÉNOM",
    Role: "rôle",
    filière: "filière",
    image: images[Math.floor(Math.random() * images.length)],
  }));

  const ITEMS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(LesProfesseurs.length / ITEMS_PER_PAGE);

  const FormateurEtFormatriceCurrente = LesProfesseurs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show the first page
      pages.push(1);

      if (currentPage <= 3) {
        pages.push(2, 3, 4);
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push("...");
        pages.push(totalPages - 3, totalPages - 2, totalPages - 1);
        pages.push(totalPages);
      } else {
        pages.push("...");
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push("...", totalPages);
      }
    }

    // Remove duplicates
    return [...new Set(pages)];
  };

  return (
    <>
      <HeadingPage />
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#004a93] mb-4 p-5">
          L'ISTA MOHAMED EL FASSI d’Errachidia compte <br />
          <span>50 formateurs et formatrices permanents</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-6 justify-items-center">
          {FormateurEtFormatriceCurrente.map((person) => (
            <div
              key={person.id}
              className="w-[220px] h-[250px] bg-gray-100 relative shadow-md">
              <img
                src={person.image}
                alt={person.nomC}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white/50 backdrop-blur-sm px-2 py-1">
                <h3 className="text-sm font-bold text-[#004a93]">
                  {person.nomC}
                </h3>
                <p className="text-xs text-black">
                  {person.filière} - {person.Role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2 text-sm p-5">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50">
            Précédent
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() =>
                typeof page === "number" ? setCurrentPage(page) : null
              }
              disabled={page === "..."}
              className={`px-3 py-1 border border-gray-300 rounded-lg transition-colors ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 hover:text-blue-600"
              }`}>
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white transition-colors disabled:opacity-50">
            Suivante
          </button>
        </div>
      </div>
    </>
  );
}

function CorpsEnseignants() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default CorpsEnseignants;

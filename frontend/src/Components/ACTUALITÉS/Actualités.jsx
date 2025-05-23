import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/ACTUALITÉS/acctualite.png";
import imgAcctualite from "../../assets/images/ACTUALITÉS/imageAcctualiteDefault.png";
import iconeDate from "../../assets/images/ACTUALITÉS/icones/date.png";
import iconePinterer from "../../assets/images/ACTUALITÉS/icones/personneIntere.png";
import iconeAuthor from "../../assets/images/ACTUALITÉS/icones/author.png";
import RechercheIcone from "../../assets/images/ACTUALITÉS/icones/searchIcon.png";

function HeadingPage() {
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 59, 139, 0.9), rgba(0, 59, 139, 0.4), rgba(0,0,0,0)), url(${imageHeading})`,
      }}>
      <div className="absolute inset-0 flex flex-col justify-center pl-10 gap-4 text-white">
        <span className="text-sm uppercase  border-l-4 border-[#00904a]  ps-2 ">
          ACTUALITÉS
        </span>
        <h1 className="text-3xl font-bold">Actualités</h1>
      </div>
    </div>
  );
}
// section creation d'actualite

const ListActualités = Array(7).fill({
  id:1,
  title: "Ouverture des inscriptions pour l’année 2025-2026",
  date: "8 mai 2025",
  author: "Directeur",
  views: "stagiaires, formateurs, événement",
  text: "Les inscriptions pour la rentrée prochaine sont ouvertes du 1er mai au 15 juillet 2025. Les bacheliers et candidats à la formation professionnelle sont invités à soumettre leur dossier en ligne via notre plateforme.",
  image: imgAcctualite,
});

const LesActualites = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(ListActualités.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = ListActualités.slice(start, start + itemsPerPage);

  return (
    <div className="p-4 grid gap-8">
      {currentItems.map((Actualité, index) => (
        <div key={index} className="flex flex-col md:flex-row border-b pb-6">
          <img
            src={Actualité.image}
            alt="Actualité"
            className="w-full md:w-1/3 h-auto object-cover rounded"
          />
          <div className="flex flex-col gap-2 md:ml-7 mt-5 md:mt-2 w-[650px]">
            <div className="flex gap-7 mb-3">
              <div className="flex items-center text-sm text-gray-500 gap-1">
                <img src={iconeDate} alt="calendar" className="w-4 h-4" />
                <span>{Actualité.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 gap-1">
                <img src={iconePinterer} alt="views" className="w-4 h-4" />
                <span>{Actualité.views}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 gap-1">
                <img src={iconeAuthor} alt="author" className="w-4 h-4" />
                <span>{Actualité.author}</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#004a93] ">
              {Actualité.title}
            </h2>
            <p className="text-[#a4a3a3] mt-2">{Actualité.text}</p>
            <Link
              to={"/ACTUALITES/Actualités/"+Actualité.id}
              className="text-[#00904a] font-semibold hover:underline mt-5 inline-block">
              Continuer la lecture →
            </Link>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2 p-5">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-3 py-1 rounded bg-[#004a93] text-white text-sm disabled:opacity-50"
          disabled={currentPage === 1}>
          Précédent
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === i + 1
                ? "bg-[#00904a] text-white"
                : "bg-gray-200 text-gray-700"
            }`}>
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-3 py-1 rounded bg-[#004a93] text-white text-sm disabled:opacity-50"
          disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  );
};
// Body Page

export function BodyPage() {
  return (
    <>
      <HeadingPage />
      <div className="container mx-auto p-6 ">
        <div className="flex justify-end mt-5">
          <div className="relative min-w-[300px] max-w-md ">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#004a93]"
            />
            <img
              src={RechercheIcone}
              alt="Search"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-50"
            />
          </div>
        </div>
        <LesActualites />
      </div>
    </>
  );
}
// full page Content
function Actualités() {
  return (
    <>
      <Header />
      <BodyPage />
      <Footer />
    </>
  );
}

export default Actualités;

import React from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
import { Link } from "react-router-dom";
// images
import imageHeading from "../../assets/images/ACTUALITÉS/acctualite.png";
import imageAnnonce from "../../assets/images/ACTUALITÉS/imageAcctualiteDefault.png";
import IconePdf from '../../assets/images/ACTUALITÉS/icones/pdficone.png'

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

const ContentGenerale = () => {
  return (
    <div className=" min-h-screen">
      <header className="py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            02 Avril 2023
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
              />
            </svg>
            Stagiaires, formateurs, événement
          </span>
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Directeur
          </span>
        </div>
      </header>

      <main className="">
        <h1 className="text-3xl md:text-3xl font-bold text-[#004a93] mb-8">
          <span className="border-b-4 border-[#004a93] pb-1">Ouverture</span>{" "}
          des inscriptions pour l'année 2025-2026
        </h1>

        <div className="mb-8 flex justify-center">
          <img
            src={imageAnnonce} // Make sure this path is correct relative to your public folder
            alt="OFPPT Rabat Hay Riad, ISTA Institute of Mohamed El Fassi Errachidia"
            className="w-[990px] h-[490px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="text-black text-base leading-7 ">
          <p className="mb-4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum. It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              <span className="border-b-4 border-[#004a93] pb-1">Piè</span>ces
              Jointes
            </h3>
            <Link
              to="/path/to/annonce_fichier.pdf" // Replace with actual PDF path
              download
              className="flex gap-2 text-blue-600 hover:underline py-4">
              <img
                src={IconePdf}
                alt="PDF Icon"
                className="h-5 w-4 " 
              />
              annonce_fichier.pdf
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 md:text-right pb-2 ">
              <span className="border-b-4 border-[#004a93] pb-1">Par</span>tager
              Cet Annonce
            </h3>
            <div className="flex space-x-3 justify-start md:justify-end py-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-blue-600 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-facebook-f"></i>{" "}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-pink-500 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-red-600 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 text-white rounded-full hover:opacity-90 transition-opacity">
                <i className="fab fa-x-twitter"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function BodyPage() {
  return (
    <>
      <HeadingPage />
      <div className="container mx-auto">
        <ContentGenerale />
      </div>
    </>
  );
}

function PageDetaileActualite() {
  return (
    <>
      <Header />
      <BodyPage />
      <Footer />
    </>
  );
}

export default PageDetaileActualite;

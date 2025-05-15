import React, { useState, useEffect, useRef } from "react";
import OfpptLogo from "../assets/Logos/ofppt-logo.svg";
function TopBar() {
  return (
    <div className="fixed top-0 right-0 w-full h-[40px] bg-[#a4a3a3] text-white z-50">
      <ul className="flex justify-end items-center gap-5 h-full pr-5">
        <li className="p-1">
          <a
            href="/login"
            className="text-base font-bold cursor-pointer hover:underline">
            Connexion
          </a>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <a href="/icon1">
            <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
              alt="Icon 1"
              className="size-6 object-contain"
            />
          </a>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <a href="/icon2">
            <img
              src="https://img.icons8.com/?size=100&id=60440&format=png&color=FFFFFF"
              alt="Icon 2"
              className="size-6 object-contain"
            />
          </a>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <a href="/icon3">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FFFFFF"
              alt="Icon 3"
              className="size-6"
            />
          </a>
        </li>

        <div className="h-6 border-l border-white" />

        <li className="p-1">
          <a href="/icon4">
            <img
              src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF"
              alt="Icon 4"
              className="size-6"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

function LogoSection() {
  return (
    <>
      {/* Add top margin equal to the height of the TopBar to avoid overlap */}
      <div id="partie2" className="w-full py-5 mt-[40px] container mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4">
          <img
            src={OfpptLogo}
            alt="OFPPT Logo"
            className="w-24 h-24 sm:w-28 sm:h-28"
          />
          <div className="text-center sm:text-left">
            <p className="ISTA font text-sm sm:text-base">
              Institut Spécialisé de Technologie Appliquée
            </p>
            <p className="ISTA-Errachidia font font-bold text-xl sm:text-2xl">
              MOHAMED EL FASSI ERRACHIDIA
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState({
    nosConnaitre: false,
    formations: false,
    annonces: false,
    stagiaire: false,
    entreprise: false,
    parascolaire: false,
  });

  // Create a unique ref for each menu item
  const nosConnaitreRef = useRef(null);
  const formationsRef = useRef(null);
  const annoncesRef = useRef(null);
  const stagiaireRef = useRef(null);
  const entrepriseRef = useRef(null);
  const parascolaireRef = useRef(null);

  // Handle the toggle of the dropdown
  const handleToggle = (menu) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Close the dropdown when clicking outside of it
  const handleClickOutside = (e) => {
    if (
      !nosConnaitreRef.current.contains(e.target) &&
      !formationsRef.current.contains(e.target) &&
      !annoncesRef.current.contains(e.target) &&
      !stagiaireRef.current.contains(e.target) &&
      !entrepriseRef.current.contains(e.target) &&
      !parascolaireRef.current.contains(e.target)
    ) {
      setIsOpen({
        nosConnaitre: false,
        formations: false,
        annonces: false,
        stagiaire: false,
        entreprise: false,
        parascolaire: false,
      });
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of the dropdowns
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-[#1e3a8a] py-3 px-2 text-white font relative z-40">
      <ul className="flex flex-wrap justify-center gap-8 text-sm sm:text-base relative">
        {/* ACCUEIL */}
        <li className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://img.icons8.com/?size=100&id=72&format=png&color=FFFFFF"
            alt="Accueil Icon"
            className="size-4"
          />
          <a href="/" className="text-base mt-1">
            ACCUEIL
          </a>
        </li>

        {/* NOS CONNAÎTRE */}
        <li className="relative cursor-pointer" ref={nosConnaitreRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("nosConnaitre")}>
            <img
              src="https://img.icons8.com/?size=100&id=90393&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-base mt-1">NOS CONNAÎTRE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.nosConnaitre && (
            <ul
              className="absolute bg-white text-black rounded shadow-md mt-2 w-48 z-50"
              onMouseLeave={() =>
                setIsOpen((prevState) => {
                  return { ...prevState, nosConnaitre: false };
                })
              }>
              <li>
                <a
                  href="/mot-directeur"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Mot du directeur
                </a>
              </li>
              <li>
                <a
                  href="/notre-mission"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Notre mission
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* FORMATIONS */}
        <li className="relative cursor-pointer" ref={formationsRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("formations")}>
            <img
              src="https://img.icons8.com/?size=100&id=79387&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-base mt-1">FORMATIONS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.formations && (
            <ul
              className="absolute bg-white text-black rounded shadow-md mt-2 w-52 z-50"
              onMouseLeave={() =>
                setIsOpen((prevState) => {
                  return { ...prevState, formations: false };
                })
              }>
              <li>
                <a
                  href="/formations/dev-digital"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Développement Digital
                </a>
              </li>
              <li>
                <a
                  href="/formations/reseau"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Réseaux Informatiques
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* ANNONCES */}
        <li className="relative cursor-pointer" ref={annoncesRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("annonces")}>
            <img
              src="https://img.icons8.com/?size=100&id=IzYXNYBBP9ql&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-base mt-1">ACTUALITÉS</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.annonces && (
            <ul
              className="absolute bg-white text-black rounded shadow-md mt-2 w-48 z-50"
              onMouseLeave={() =>
                setIsOpen((prevState) => {
                  return { ...prevState, annonces: false };
                })
              }>
              <li>
                <a
                  href="/ACTUALITÉS/Actualités"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Actualités
                </a>
              </li>
              <li>
                <a
                  href="/ACTUALITÉS/Appel d’offres"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Appel d’offres
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* STAGIAIRE */}
        <li className="relative cursor-pointer" ref={stagiaireRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("stagiaire")}>
            <img
              src="https://img.icons8.com/?size=100&id=38834&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-base mt-1">ESPACE STAGIAIRE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.stagiaire && (
            <ul
              className="absolute bg-white text-black rounded shadow-md mt-2 w-52 z-50"
              onMouseLeave={() =>
                setIsOpen((prevState) => {
                  return { ...prevState, stagiaire: false };
                })
              }>
              <li>
                <a
                  href="/stagiaire/emplois"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Emplois du temps
                </a>
              </li>
              <li>
                <a
                  href="/stagiaire/absences"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Absences
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* ENTREPRISE */}
        <li className="relative cursor-pointer" ref={entrepriseRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("entreprise")}>
            <img
              src="https://img.icons8.com/?size=100&id=39368&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-base mt-1">SPACE ENTREPRISE</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.entreprise && (
            <ul
              className="absolute bg-white text-black rounded shadow-md mt-2 w-56 z-50"
              onMouseLeave={() =>
                setIsOpen((prevState) => {
                  return { ...prevState, entreprise: false };
                })
              }>
              <li>
                <a
                  href="/entreprise/offres"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Offres de stage
                </a>
              </li>
              <li>
                <a
                  href="/entreprise/deposer"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Déposer une offre
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* PARASCOLAIRES */}
        <li className="relative cursor-pointer" ref={parascolaireRef}>
          <div
            className="flex items-center gap-2"
            onClick={() => handleToggle("parascolaire")}>
            <img
              src="https://img.icons8.com/?size=100&id=85959&format=png&color=FFFFFF"
              alt="Icon"
              className="size-5"
            />
            <span className="text-base mt-1">ACTIVITÉS PARASCOLAIRES</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen.parascolaire && (
            <ul
              className="absolute bg-white text-black rounded shadow-md mt-2 w-60 z-50"
              onMouseLeave={() =>
                setIsOpen((prevState) => {
                  return { ...prevState, parascolaire: false };
                })
              }>
              <li>
                <a
                  href="/parascolaire/clubs"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Clubs
                </a>
              </li>
              <li>
                <a
                  href="/parascolaire/evenements"
                  className="block px-4 py-2 hover:bg-blue-100">
                  Événements
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

function Header() {
  return (
    <div className="navbar">
      <TopBar />
      <LogoSection />
      <NavBar />
    </div>
  );
}

export default Header;

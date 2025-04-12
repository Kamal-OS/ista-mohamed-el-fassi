import React from "react";
import OfpptLogo from "../assets/Logos/ofppt-logo.svg";
function TopBar() {
  return (
    <>
      <div id="partie1" className="mt-0 w-full h-[40px] ">
        <ul className="flex justify-end gap-5 mr-5">
          <li id="item1" className="p-1">
            <div className="p-2">
              <span className="font text-base font-bold">Connexion</span>
            </div>
          </li>
          <div className="h-10 border-l border-white"></div>
          <li id="item2" className="p-1">
            <img
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF"
              alt=""
              className="size-7 object-contain"
            />
          </li>
          <div className="h-10 border-l border-white"></div>
          <li id="item3" className="p-1">
            <img
              src="https://img.icons8.com/?size=100&id=60440&format=png&color=FFFFFF"
              alt=""
              className="size-8 object-contain"
            />
          </li>
          <div className="h-10 border-l border-white"></div>
          <li id="item4" className="p-1">
            <img
              src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FFFFFF"
              alt=""
              className="size-7"
            />
          </li>
          <div className="h-10 border-l border-white"></div>
          <li id="item4" className="p-1">
            <img
              src="https://img.icons8.com/?size=100&id=37326&format=png&color=FFFFFF"
              alt=""
              className="size-7"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
function LogoSection() {
  return (
    <>
      <div id="partie2" className="w-full py-4 container mx-auto">
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
  return (
    <>
      <div
        id="partie3"
        className="w-full bg-[#1e3a8a] py-3 px-2 text-white font">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 text-center text-sm sm:text-base">
          <li className="flex items-center  gap-2 h-6">
            <img
              src="https://img.icons8.com/?size=100&id=72&format=png&color=FFFFFF"
              alt="Accueil Icon"
              className="size-4"
            />
            <span className="text-base mt-1">ACCUEIL</span>
          </li>
          <li className="flex items-center gap-2 h-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=90393&format=png&color=FFFFFF"
              alt="school Icon"
              className="size-5"
            />
            <span className="text-base mt-1">NOS CONNAÎTRE</span>
          </li>
          <li className="flex items-center gap-2 h-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=79387&format=png&color=FFFFFF"
              alt="school Icon"
              className="size-5"
            />
            <span className="text-base mt-1">FORMATIONS</span>
          </li>
          <li className="flex items-center gap-2 h-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=IzYXNYBBP9ql&format=png&color=FFFFFF"
              alt="school Icon"
              className="size-5"
            />
            <span className="text-base mt-1">ANNONCES</span>
          </li>
          <li className="flex items-center gap-2 h-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=38834&format=png&color=FFFFFF"
              alt="school Icon"
              className="size-5"
            />
            <span className="text-base mt-1">ESPACE STAGIAIRE</span>
          </li>
          <li className="flex items-center gap-2 h-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=39368&format=png&color=FFFFFF"
              alt="school Icon"
              className="size-5"
            />
            <span className="text-base mt-1">SPACE ENTREPRISE</span>
          </li>
          <li className="flex items-center gap-2 h-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=85959&format=png&color=FFFFFF"
              alt="school Icon"
              className="size-5"
            />
            <span className="text-base mt-1"> ACTIVITÉS PARASCOLAIRES</span>
          </li>
        </ul>
      </div>
    </>
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

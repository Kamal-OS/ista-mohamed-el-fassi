import React from "react";
import LogoOfppt from "../../assets/Logos/logoHorizontale.png";
function TopFooter() {
  return (
    <div id="TopFooter" className="m-0 w-full h-[480px] ">
      <div className="flex justify-start gap-20">
        <div className="p-[80px] mt-16">
          <img
            src={LogoOfppt}
            alt="Logo Ofppt"
            className="w-[327px] h-[102px]  ms-[200px]"
          />
          <div className="w-[327px] ms-[200px] mt-2  border-b-[1px] border-dashed border-white" />
          <div className="flex justify-start gap-9 ms-[220px] ">
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=8818&format=png&color=FFFFFF"
                className="size-10 mt-5"
                alt="SocialMediaIcone"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=59813&format=png&color=FFFFFF"
                className="size-10 mt-5"
                alt="SocialMediaIcone"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=FFFFFF"
                className="size-10 mt-5"
                alt="SocialMediaIcone"
              />
            </a>
            <a href="#">
              <img
                src="https://img.icons8.com/?size=100&id=IuI5Yd3J3qcC&format=png&color=FFFFFF"
                className="size-10  mt-5 "
                alt="SocialMediaIcone"
              />
            </a>
          </div>
        </div>
        <div className="border-s-[0.1px] border-dashed mt-16 h-[370px] border-white" />
        <div className="flex flex-col gap-7   p-[80px]">
          <div>
            <div className="font text-white text-xl font-bold ">
              Lient utiles
            </div>
            <div className="border-b-4 border-white w-[48px] mt-[7px]" />
          </div>
          <ul className="flex flex-col gap-5 text-white font">
            <li>
              <a href="#">Ofppt Site Officiel</a>{" "}
            </li>
            <li>
              <a href="#">MY WAY</a>{" "}
            </li>
            <li>
              <a href="#">Altissia/OFPPT-Langues</a>{" "}
            </li>
            <li>
              <a href="#">Scholar VOX</a>{" "}
            </li>
          </ul>
        </div>
        <div className="border-s-[0.1px] border-dashed mt-16 h-[370px] border-white" />
        <div className="flex flex-col gap-5  p-[80px]">
          <div>
            <div className="font text-white text-xl font-bold ">Contacts</div>
            <div className="border-b-4 border-white w-[48px] mt-[7px]" />
          </div>
          <ul className=" list-disc text-white font  space-y-2 ms-8">
            <li>Adresse</li>
            <span>B.P. 528 Boutalamine 52000 Errachidia</span>
            <li>numero de telephone</li>
            <span>05 35 52 06 10 / 05 35 51 33 52 / 05 35 57 27 40</span>
            <li>Email</li>
            <span>youssef.brnyoussef@ofppt.ma</span>
            <li>Fax</li>
            <span>0535528832</span>
            <li>Coordination</li>
            <span>ISBTP ERRACHIDIA/ DRCS</span>
          </ul>
        </div>
      </div>
    </div>
  );
}
function BottomFooter() {
  return (
    <div id="BottoFooter" className="m-0 w-full h-[36px] ">
      <p className="font text-base text-white p-1.5 text-center">
        Institut Spécialisé de Technologie Appliquée Mohamed El Fassi Errachidia
        © 2025
      </p>
    </div>
  );
}
function Footer() {
  return (
    <footer className="bottom-0  w-full">
      <TopFooter />
      <BottomFooter />
    </footer>
  );
}

export default Footer;

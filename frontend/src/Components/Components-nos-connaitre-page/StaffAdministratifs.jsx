import React from "react";
import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
// images
import imageHeading from "../../assets/images/NOS CONNAÎTRE/StaffAdmin.png";
import imgPersonne from "../../assets/images/NOS CONNAÎTRE/imageStaffDefault.png";
import cadreImage from "../../assets/images/NOS CONNAÎTRE/cadreStaffAdmin.png";

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
// card Staf
export function CardStaf({ img, nomC, role }) {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mt-5">
        <img src={img} alt="" className="size-36" />
        <h3 className="">{nomC}</h3>
        <span className="text-[#004a93]">{role}</span>
      </div>
    </>
  );
}

export function Content() {
  const StaffAdmins = [
    { id: 1, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 2, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 3, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 4, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 5, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 6, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 7, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 8, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 9, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 9, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 10, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 11, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
    { id: 12, name: "Nom PRÉNOM", role: "LE RÔLE", image:  imgPersonne  },
  ];
  return (
    <>
      <HeadingPage />
      <div className="container mx-auto p-5">
        <h1 className="text-center text-[#004a93] font-bold text-2xl">
          Premier Corps Administratif
        </h1>
        <div
          className="flex justify-around p-7"
          id="Premier Corps Administratif">
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
          <CardStaf img={imgPersonne} nomC={"Nom PRÉNOM"} role={"Le Rôle"} />
        </div>
        <div className="border-b-1 border-[#004a93] my-5"></div>
        <div
          className="w-full h-auto bg-cover bg-center relative"
          id="Tous Staff Adminstration"
          style={{
            backgroundImage: ` url(${cadreImage})`,
          }}>
          <div className="">
            <h1 className="text-center p-3 font-bold text-2xl text-[#004a93]">
              <span className="border-b-4 p-1">Corps</span> Administratif
            </h1>
            <div className="grid md:grid-cols-5 gap-x-2 gap-y-5 p-4 ms-10 mt-5">
              {StaffAdmins.map((person) => (
                <div
                  key={person.id}
                  className="bg-white shadow rounded p-5  w-[230px] h-[240px] ">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-35 h-35 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-blue-800">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PageStaffAdministratifs() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default PageStaffAdministratifs;

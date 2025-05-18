import Header from "../Components-home-page/Header";
import Footer from "../Components-home-page/Footer";
import imageHeading from "../../assets/images/NOS CONNAÎTRE/statistique.png";

// 🎯 En-tête avec image de fond
function HeadingPage() {
  return (
    <div
      className="w-full h-[200px] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 59, 139, 0.9), rgba(0, 59, 139, 0.4), rgba(0,0,0,0)), url(${imageHeading})`,
      }}>
      <div className="absolute inset-0 flex flex-col justify-center pl-10 gap-4 text-white">
        <span className="text-sm uppercase border-l-4 border-[#00904a] ps-2">
          Nos connaître
        </span>
        <h1 className="text-3xl font-bold">Chiffres clés</h1>
      </div>
    </div>
  );
}

// 🎓 Carte pour chaque filière
const FiliereCard = ({ title, nombre }) => (
  <div className="flex flex-col border-l border-gray-300 pl-5">
    <div className="flex items-center justify-between border rounded-full px-10 py-3 mb-4 shadow-sm max-w-md bg-white">
      <span className="font-semibold text-lg">{title}</span>
      <span className="flex items-center bg-blue-100 text-blue-700 font-bold rounded-full px-4 py-1">
        ● {nombre}
      </span>
    </div>
  </div>
);

// 📦 Section générique pour un niveau
const SectionNiveau = ({ title, data }) => (
  <div className="py-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {data.map((filiere, index) => (
      <FiliereCard key={index} title={filiere.title} nombre={filiere.nombre} />
    ))}
  </div>
);

// 📊 Contenu principal des statistiques
export function Content() {
  const niveaux = {
    "Technicien Spécialisé": [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
    Technicien: [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
    Qualification: [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
    Spécialisation: [
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
      { title: "Digital et Intelligence Artificielle", nombre: 101 },
    ],
  };

  return (
    <>
      <HeadingPage />
      <div className="container mx-auto flex flex-col p-5">
        {Object.entries(niveaux).map(([niveau, data], index) => (
          <SectionNiveau
            key={index}
            title={`Effectifs des étudiants inscrits au ${niveau}`}
            data={data}
          />
        ))}
      </div>
    </>
  );
}

// 🧩 Composant global
function ChiffresClés() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default ChiffresClés;

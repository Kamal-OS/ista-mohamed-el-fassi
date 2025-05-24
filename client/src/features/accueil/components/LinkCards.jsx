import LinkCard from "@/features/accueil/components/LinkCard";
import Container from "@/layouts/Container";
import {
  faBook,
  faCalendarCheck,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cards = [
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    title: "Nos formations",
    content: "Tous les cours disponibles dans notre établissement",
    color: "blue",
  },
  {
    icon: <FontAwesomeIcon icon={faBook} />,
    title: "E-cours",
    content: "Votre passerelle vers la plateforme e-learning",
    color: "green",
  },
  {
    icon: <FontAwesomeIcon icon={faCalendarCheck} />,
    title: "Emplois du temps",
    content: "Accédez aux emplois du temps de votre formation",
    color: "gray",
  },
];

function LinkCards() {
  return (
    <Container>
      <div className="flex flex-col justify-center gap-4 md:flex-row lg:px-28">
        {cards.map((card, index) => (
          <LinkCard
            key={`card-${index}`}
            icon={card.icon}
            title={card.title}
            content={card.content}
            color={card.color}
          />
        ))}
      </div>
    </Container>
  );
}

export default LinkCards;

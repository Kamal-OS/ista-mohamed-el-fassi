import SectionHeading from "@/features/accueil/components/SectionHeading";
import Container from "@/layouts/Container";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiBooksFill, PiStudentFill } from "react-icons/pi";

const counts = [
  {
    name: "Stagiaires",
    number: 3601,
    icon: <PiStudentFill />,
  },
  {
    name: "Formateurs",
    number: 50,
    icon: <FaChalkboardTeacher />,
  },
  {
    name: "Formations",
    number: 60,
    icon: <PiBooksFill />,
  },
  {
    name: "Staff administratif",
    number: 20,
    icon: <BsFillPersonFill />,
  },
];

function Numbers() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <Container>
      <section>
        <SectionHeading
          icon={<FontAwesomeIcon icon={faHashtag} />}
          heading="L’établissement en chiffres"
        />

        <ul className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {counts.map((count, index) => (
            <li
              ref={ref}
              key={`count-${index}`}
              className="flex flex-col items-center justify-center gap-2">
              <div className="text-green text-9xl">{count.icon}</div>
              {isInView && (
                <CountUp
                  delay={0.5}
                  duration={3}
                  end={count.number}
                  className="text-blue text-5xl font-bold"
                />
              )}
              <div className="text-xl font-bold uppercase">{count.name}</div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

export default Numbers;

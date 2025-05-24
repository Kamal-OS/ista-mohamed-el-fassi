import Container from "@/layouts/Container";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const images = [
  "https://scontent.frak4-2.fna.fbcdn.net/v/t39.30808-6/369689373_1258577938040750_6041276940304890478_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFJdgqQJeCtesi0u4w2Sg-ukRNGBU67RAmRE0YFTrtECbtWx3xOVivmvD5SPsnydgENMhVdnmzVnlyhZm_X-3gh&_nc_ohc=M1ZMgIfii_sQ7kNvwHWM0so&_nc_oc=Adm_wvzTOp9ovymKzOvYjIlKASSbnZ3cxs7a74kSpbLR7fhMApvkQPl6sAFM7IsC-RM&_nc_zt=23&_nc_ht=scontent.frak4-2.fna&_nc_gid=Ai-Ba_GtFMthiaSIrbkIOQ&oh=00_AfJr5oxzvTL0Bpnfpt2E_iN79jLbZ9bGw8jpk1Er5BbqjQ&oe=6834D3E4",
  "https://www.sinpress.ma/wp-content/uploads/2023/06/inbound1940487853019975535.jpg",
  "https://static.lematin.ma/files/lematin/images/articles/2017/12/f29de8bdd60686a1befa99908ef749d6.jpg",
];

function Outline() {
  return (
    <Container>
      <section className="flex flex-col-reverse gap-8 lg:flex-row">
        <article className="basis-1/2">
          <div className="grid grid-cols-2 gap-2">
            <div className="row-span-2">
              <img className="h-full object-cover" src={images[0]} />
            </div>
            <div>
              <img src={images[1]} />
            </div>
            <div>
              <img src={images[2]} />
            </div>
          </div>
        </article>
        <article className="grid basis-1/2 gap-8">
          <div className="grid gap-4">
            <h2 className="text-blue text-4xl font-bold">
              À LA DECOUVERTE D’ISTA MOHAMED EL FASSI
            </h2>
            <p className="text-xl font-bold">
              Notre institut, notre engagement.
            </p>
            <div className="text-gray text-md space-y-2">
              <p>
                L’Institut Spécialisé de Technologie Appliquée Mohamed El Fassi
                d’Errachidia est un établissement public relevant de l’OFPPT.
              </p>
              <p>
                Il a p our mission de former des techniciens et des
                professionnels qualifiés, capables de répondre aux besoins du
                marché du travail et de contribuer au développement économique
                et social, au niveau région al et national.
              </p>
            </div>
          </div>

          <div className="group flex w-fit items-center gap-1 self-end text-2xl font-bold">
            <Link to="#">La suite</Link>
            <FontAwesomeIcon
              className="group-hover:translate-x-1.5"
              icon={faChevronRight}
            />
          </div>
        </article>
      </section>
    </Container>
  );
}

export default Outline;

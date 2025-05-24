import SocialMediaIcons from "@/components/SocialMediaIcons";
import Container from "@/layouts/Container";

function Topbar() {
  return (
    <div className="bg-blue w-full">
      <Container>
        <div className="flex flex-col items-center gap-4 py-2 text-center text-xs sm:flex-row sm:justify-between md:text-sm">
          <div className="inline-flex text-white">
            <a href="#">
              Institut Spécialisé de Technologie Appliquée MOHAMED EL FASSI -
              ERRACHIDIA
            </a>
          </div>

          <SocialMediaIcons />
        </div>
      </Container>
    </div>
  );
}

export default Topbar;

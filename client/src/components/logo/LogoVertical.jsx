import LogoIcon from "@/components/logo/LogoIcon";
import { Link } from "react-router-dom";

function LogoVertical({ height = 40 }) {
  return (
    <Link to="/" className="group flex min-w-max flex-col items-center gap-2">
      <div aria-label="OFPPT Logo" className="mb-2">
        <LogoIcon height={height} />
      </div>
      <div className="text-center font-bold">
        <p className="text-xs text-nowrap">
          Institut Spécialisé de Technologie Appliquée
        </p>
        <p className="text-sm text-nowrap transition-transform duration-300 group-hover:scale-110">
          MOHAMED EL FASSI ERRACHIDIA
        </p>
      </div>
    </Link>
  );
}

export default LogoVertical;

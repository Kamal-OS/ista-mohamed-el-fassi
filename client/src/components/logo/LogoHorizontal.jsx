import LogoIcon from "@/components/logo/LogoIcon";
import { Link } from "react-router-dom";

function LogoHorizontal({ height = 40 }) {
  return (
    <Link to="/" className="group flex min-w-max flex-row items-center gap-2">
      <LogoIcon height={height} />
      <div className="text-left font-bold">
        <p className="text-xs text-nowrap">
          Institut Spécialisé de Technologie Appliquée
        </p>
        <p className="origin-left text-sm text-nowrap transition-transform duration-300 group-hover:scale-110">
          MOHAMED EL FASSI ERRACHIDIA
        </p>
      </div>
    </Link>
  );
}

export default LogoHorizontal;

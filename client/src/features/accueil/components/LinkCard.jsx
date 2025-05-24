import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

function LinkCard({ icon, title, content, color }) {
  // Hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Styles hover effect
  const styles = useMemo(
    () => ({
      backgroundColor: isHovered
        ? `var(--color-${color})`
        : `var(--color-${color})`,
      filter: isHovered ? "brightness(95%)" : "none",
    }),
    [isHovered, color],
  );

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styles}
      className={`relative flex flex-col gap-4 rounded-2xl p-8 text-center text-white shadow-xl`}>
      <div className="flex-1 text-5xl">{icon}</div>
      <Link to="#">
        {/* Make it a11y for screen readers */}
        <span className="absolute inset-0"></span>
        <h3 className="mb-2 flex-1 py-2 text-2xl font-bold uppercase">
          {title}
        </h3>
      </Link>
      <p className="flex-2 text-lg text-white/75">{content}</p>
    </div>
  );
}

export default LinkCard;

import { NavLink } from "react-router-dom";

function NavItem({ to, label, className, revertColors }) {
  const classes = `${className} hover:text-green font-bold transition-colors duration-300`;

  return (
    <NavLink
      aria-current="page"
      className={({ isActive }) => {
        return `${isActive && to !== "#" ? "text-green" : revertColors ? "text-white" : "text-blue"} ${classes}`;
      }}
      to={to}>
      {label}
    </NavLink>
  );
}

export default NavItem;

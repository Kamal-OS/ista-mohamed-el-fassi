import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";

function MobileDropdown({ item, expanded, setExpanded }) {
  const isOpen = expanded === item.label;
  const { pathname } = useLocation();

  const isActive = item.dropdown.some((item) => item.href === pathname);

  return (
    <div className="space-y-2">
      <div
        onClick={() => setExpanded(isOpen ? false : item.label)}
        className={`${isActive ? "text-green" : "text-white"} hover:text-green flex cursor-default items-center justify-center gap-2 transition-colors duration-300 select-none`}>
        <h3 className="font-bold">{item.label}</h3>

        <motion.i
          animate={{
            rotate: isOpen ? 90 : 0,
          }}>
          <FontAwesomeIcon className="text-xs" icon={faChevronRight} />
        </motion.i>
      </div>
      <AnimatePresence>
        {item.dropdown && isOpen && (
          <motion.ul
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="m-auto w-fit min-w-1/2 space-y-4 rounded-md bg-neutral-100 p-6">
            {item.dropdown.map((subItem) => (
              <li key={subItem.label}>
                <NavItem to={subItem.href} label={subItem.label} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileDropdown;

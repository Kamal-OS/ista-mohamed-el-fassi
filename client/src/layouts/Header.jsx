import Navbar from "@/layouts/navbar/Navbar";
import Topbar from "@/layouts/topbar/Topbar";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header className="z-2 shadow-xl/30">
      <Topbar />
      <Navbar />
    </motion.header>
  );
}

export default Header;

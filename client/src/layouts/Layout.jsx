import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/Header";
import ScrollToTop from "@/layouts/ScrollToTop";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default Layout;

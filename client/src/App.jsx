import Layout from "@/layouts/Layout";
import Accueil from "@/pages/Accueil";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Accueil />} />
      </Route>
    </Routes>
  );
}

export default App;

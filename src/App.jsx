import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import StarField from "./components/StarField";
import FloatingCat from "./components/FloatingCat";
import HabitatPage from "./pages/HabitatPage";
import "./App.css";
import Meteors from "./components/Meteors";
import PlantAsplenium from "./pages/PlantAsplenium";
import PlantSyngonium from "./pages/PlantSyngonium";
import Habitats from "./pages/Habitats";
import Plants from "./pages/Plants.jsx";
import Build from "./pages/Build.jsx";
import Analysis from "./pages/Analysis";
import ConclusionsPage from "./pages/ConclusionsPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <HashRouter>

      <div
        className="fixed inset-0 -z-10"
        style={{
          background: `
      linear-gradient(180deg, #020617 0%, #020617 40%, #000000 100%),
      radial-gradient(1200px 600px at 20% 10%, rgba(99,102,241,0.15), transparent),
      radial-gradient(1000px 500px at 80% 20%, rgba(168,85,247,0.12), transparent),
      radial-gradient(800px 400px at 50% 80%, rgba(59,130,246,0.10), transparent)
    `
        }}
      ></div>

      <div className="min-h-screen flex flex-col pt-16 md:pt-24 relative overflow-hidden text-white">
        <StarField />
        <Meteors />
        <FloatingCat />
        <Navbar />
        <div className="relative z-10 flex-1 pt-8 md:pt-10 pb-26 min-h-[75vh] max-w-6xl mx-auto px-6 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habitats" element={<Habitats />} />
            <Route path="/habitat/:id" element={<HabitatPage />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plant/asplenium" element={<PlantAsplenium />} />
            <Route path="/plant/syngonium" element={<PlantSyngonium />} />
            <Route path="/build" element={<Build />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/conclusions" element={<ConclusionsPage />} />

          </Routes>
        </div>
        <Footer />
      </div>

    </HashRouter>
  );
}
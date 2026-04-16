import { useNavigate } from "react-router-dom";

export default function Habitats() {

  const navigate = useNavigate();

  return (
    <div className="text-center space-y-10">

      <h2 className="text-4xl font-bold">
        Habitaty 🛰️
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">

        <button
          onClick={() => navigate("/habitat/H1")}
          className="px-10 py-6 rounded-2xl border border-indigo-400/30
          text-xl font-semibold text-white
          bg-slate-900/60
          shadow-[0_0_25px_rgba(99,102,241,0.4),inset_0_0_12px_rgba(99,102,241,0.2)]
          transition-all duration-300
          hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]
          hover:-translate-y-1"
        >
          🧪 Habitat 1
        </button>

        <button
          onClick={() => navigate("/habitat/H2")}
          className="px-10 py-6 rounded-2xl border border-indigo-400/30
          text-xl font-semibold text-white
          bg-slate-900/60
          shadow-[0_0_25px_rgba(99,102,241,0.4),inset_0_0_12px_rgba(99,102,241,0.2)]
          transition-all duration-300
          hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]
          hover:-translate-y-1"
        >
          🌿 Habitat 2
        </button>

        <button
          onClick={() => navigate("/habitat/H3")}
          className="px-10 py-6 rounded-2xl border border-indigo-400/30
          text-xl font-semibold text-white
          bg-slate-900/60
          shadow-[0_0_25px_rgba(99,102,241,0.4),inset_0_0_12px_rgba(99,102,241,0.2)]
          transition-all duration-300
          hover:shadow-[0_0_50px_rgba(99,102,241,0.8)]
          hover:-translate-y-1"
        >
          🍃 Habitat 3
        </button>

      </div>

    </div>
  );
}
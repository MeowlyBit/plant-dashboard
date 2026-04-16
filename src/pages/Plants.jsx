import { useNavigate } from "react-router-dom";

export default function Plants() {

  const navigate = useNavigate();

  return (
    <div className="space-y-10 text-center">

      <h2 className="text-4xl font-bold">
        Rośliny 🌱
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-8">

        {/* ASPLENIUM */}
        <button
          onClick={() => navigate("/plant/asplenium")}
          className="px-10 py-6 rounded-2xl border border-indigo-400/30
          text-xl font-semibold text-white
          bg-slate-900/60 backdrop-blur-md
          shadow-[0_0_25px_rgba(99,102,241,0.4),inset_0_0_12px_rgba(99,102,241,0.2)]
          transition-all duration-300
          hover:shadow-[0_0_50px_rgba(99,102,241,0.8),inset_0_0_20px_rgba(99,102,241,0.4)]
          hover:-translate-y-1"
        >
          🌿 Asplenium
        </button>

        {/* SYNGONIUM */}
        <button
          onClick={() => navigate("/plant/syngonium")}
          className="px-10 py-6 rounded-2xl border border-indigo-400/30
          text-xl font-semibold text-white
          bg-slate-900/60 backdrop-blur-md
          shadow-[0_0_25px_rgba(99,102,241,0.4),inset_0_0_12px_rgba(99,102,241,0.2)]
          transition-all duration-300
          hover:shadow-[0_0_50px_rgba(99,102,241,0.8),inset_0_0_20px_rgba(99,102,241,0.4)]
          hover:-translate-y-1"
        >
          🍃 Syngonium
        </button>

      </div>

    </div>
  );
}
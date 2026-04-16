export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-indigo-500/20 bg-slate-900/60 backdrop-blur-md">

      <div className="absolute inset-0 -z-10 opacity-30 blur-2xl 
      bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-6">

        <h3 className="text-lg font-semibold text-indigo-200">
          🚀 Kosmiczny Habitat
        </h3>

        <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Projekt badawczy dotyczący redukcji CO₂ w zamkniętych ekosystemach.
          Realizowany we współpracy z programem{" "}
          <span className="text-indigo-300 font-medium">
            Inżynierowie Przyszłości
          </span>.
        </p>

        <div className="text-sm text-slate-400 space-y-1">
          <p>
            Autor projektu:{" "}
            <span className="text-indigo-300 font-medium">
              Weronika Pawłowska
            </span>
          </p>

          <p>
            Mentor projektu:{" "}
            <span className="text-indigo-300 font-medium">
              Paweł Derwich
            </span>
          </p>
        </div>

        <div className="text-xs text-slate-500 pt-2">
          © {new Date().getFullYear()} • Weronika Pawłowska
        </div>

      </div>

    </footer>
  );
}
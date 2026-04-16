export default function Home() {
  return (
    <div className="space-y-16 text-center">

      {/* HERO */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Kosmiczny Habitat 🌍
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Badania naturalnych metod redukcji CO₂ w przestrzeniach zamkniętych.
          Monitorowanie parametrów środowiska i analiza danych w czasie rzeczywistym.
        </p>
      </div>

      {/* KAFELKI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30
        shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:scale-105 transition">
          <h3 className="text-indigo-300 font-semibold mb-2">🌱 Habitat</h3>
          <p className="text-sm text-gray-400">
            Dobór odpowiedniego gatunku rośliny oraz warunków środowiskowych.
          </p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30
        shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:scale-105 transition">
          <h3 className="text-indigo-300 font-semibold mb-2">📡 Zbieranie danych</h3>
          <p className="text-sm text-gray-400">
            Pomiar CO₂, temperatury, wilgotności i innych parametrów.
          </p>
        </div>

        <div className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/30
        shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:scale-105 transition">
          <h3 className="text-indigo-300 font-semibold mb-2">📊 Analiza</h3>
          <p className="text-sm text-gray-400">
            Wizualizacja danych i porównanie wyników eksperymentu.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="flex flex-wrap justify-center gap-6">

        <a href="/habitats"
          className="px-8 py-3 rounded-xl bg-indigo-500/30 border border-indigo-400
          shadow-[0_0_25px_rgba(99,102,241,0.8)]
          hover:scale-105 transition">
          🔬 Zobacz habitaty
        </a>

        <a href="/analysis"
          className="px-8 py-3 rounded-xl bg-purple-500/20 border border-purple-400
          shadow-[0_0_20px_rgba(168,85,247,0.7)]
          hover:scale-105 transition">
          📊 Analiza danych
        </a>

      </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

  {[
    { value: "3", label: "Habitaty" },
    { value: "6", label: "Parametrów" },
    { value: "3", label: "Cykle" },
    { value: "∞", label: "Danych" },
  ].map((item, i) => (
    <div
      key={i}
      className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-md 
      border border-indigo-400/30
      shadow-[0_0_20px_rgba(99,102,241,0.3),inset_0_0_10px_rgba(99,102,241,0.15)]
      hover:scale-105 transition-all duration-300"
    >
      <p className="text-3xl font-bold text-indigo-300 mb-1">
        {item.value}
      </p>
      <p className="text-slate-400 text-sm">
        {item.label}
      </p>
    </div>
  ))}

</div>

    </div>
  );
}
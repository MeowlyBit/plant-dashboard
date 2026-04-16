export default function BuildHabitat() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">

      {/* TYTUŁ */}
      <h1 className="text-4xl font-bold text-center">
        Budowa habitatu 🚀
      </h1>

      {/* SYSTEM */}
      <section className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6 backdrop-blur-md
      shadow-[0_0_25px_rgba(99,102,241,0.25)]">
        <h2 className="text-2xl font-semibold mb-3">System pomiarowy</h2>
        <p className="text-slate-300">
          Każdy habitat wyposażony jest w zestaw czujników środowiskowych.
          W trakcie projektu konfiguracja została zmodyfikowana w celu poprawy
          stabilności i dokładności pomiarów.
        </p>
      </section>

      {/* CZUJNIKI */}
<section>
  <h2 className="text-2xl font-semibold mb-6 text-center">
    Zastosowane czujniki
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      {
        title: "CO₂ SCD30",
        desc: "Pomiar stężenia dwutlenku węgla (NDIR), temperatury i wilgotności powietrza",
        icon: "🫧"
      },
      {
        title: "O₂ SEN0465",
        desc: "Pomiar stężenia tlenu oraz temperatury sensora",
        icon: "🧪"
      },
      {
        title: "BME280",
        desc: "Pomiar temperatury, wilgotności i ciśnienia atmosferycznego",
        icon: "🌡️"
      },
      {
        title: "Czujnik światła",
        desc: "Ocena poziomu oświetlenia w habitatcie (fotorezystor / analogowy)",
        icon: "💡"
      },
      {
        title: "Wilgotność gleby SEN0193",
        desc: "Pojemnościowy pomiar wilgotności podłoża – stabilny i długoterminowy monitoring",
        icon: "🌱"
      }
    ].map(({ title, desc, icon }) => (
      <div
        key={title}
        className="group bg-slate-900/60 border border-indigo-400/20 rounded-xl p-5
        shadow-[0_0_20px_rgba(99,102,241,0.2)]
        hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]
        transition-all duration-300 hover:-translate-y-1"
      >

        <div className="flex items-start gap-4">

          <div className="text-2xl">
            {icon}
          </div>

          <div>
            <h3 className="font-semibold text-lg text-white">
              {title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {desc}
            </p>
          </div>

        </div>

      </div>
    ))}

  </div>
</section>

      {/* ESP32 */}
      <section className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Sterowanie (ESP32)</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>cykliczny odczyt czujników</li>
          <li>zapis danych na kartę microSD</li>
          <li>wysyłanie danych do ThingSpeak</li>
          <li>komunikacja Modbus TCP</li>
        </ul>
      </section>

      {/* OŚWIETLENIE */}
      <section className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Oświetlenie</h2>
        <p className="text-slate-300">
          Zastosowano oświetlenie LED grow (czerwone + niebieskie).
        </p>
        <p className="text-slate-400 mt-2">
          Cykl: <b>14h dzień / 10h noc</b>
        </p>
      </section>

      {/* PLC */}
      <section className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Sterownik PLC</h2>
        <p className="text-slate-300">
          Sterowanie oświetleniem i wentylacją zostało przeniesione na sterownik PLC HORNER,
          co poprawiło stabilność systemu.
        </p>
      </section>

      {/* CO2 */}
      <section className="bg-slate-900/60 border border-red-400/30 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">CO₂ – wyzwania</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>ryzyko wzrostu ciśnienia</li>
          <li>trudność dozowania</li>
          <li>ryzyko „zatrucia” czujnika</li>
        </ul>
      </section>

      {/* DANE */}
      <section className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Rejestracja danych</h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-300">
          <li>ThingSpeak (chmura)</li>
          <li>karta microSD (backup)</li>
          <li>PLC (dodatkowa archiwizacja)</li>
        </ul>
      </section>

    </div>
  );
}
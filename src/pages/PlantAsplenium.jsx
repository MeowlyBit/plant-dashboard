import img1 from "../assets/plants/asplenium1.jpg";
import img2 from "../assets/plants/asplenium2.jpg";
import img3 from "../assets/plants/asplenium3.jpg";

export default function PlantAsplenium() {

  const data = [
    [1, 13.340, 2.000, 22.601],
    [2, 15.656, 2.342, 29.512],
    [3, 16.395, 2.344, 33.979],
    [4, 11.315, 2.150, 18.652],
    [5, 16.031, 2.549, 31.794],
    [6, 21.915, 3.736, 57.555],
    [7, 17.577, 2.792, 38.136],
    [8, 15.588, 2.488, 26.087],
    [9, 6.289, 2.259, 12.843],
    [10, 17.596, 3.016, 42.650],
    [11, 20.488, 3.007, 46.470],
    [12, 26.571, 3.202, 57.493],
    [13, 21.548, 3.116, 54.494],
    [14, 30.228, 4.289, 83.422],
    [15, 26.306, 3.478, 65.887],
    [16, 26.899, 3.773, 61.044],
    [17, 20.973, 3.300, 55.268],
    [18, 27.363, 3.954, 68.394],
    [19, 26.260, 3.583, 64.927],
    [20, 31.721, 4.003, 72.367],
    [21, 9.794, 2.112, 12.934],
    [22, 7.397, 2.045, 9.844],
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6 
shadow-[0_0_25px_rgba(99,102,241,0.3),inset_0_0_10px_rgba(99,102,241,0.1)]">

        <h2 className="text-2xl font-bold mb-4 text-indigo-300">
          🌿 Asplenium sp.
        </h2>

        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Paproć tropikalna o bardzo dużej powierzchni liści i stabilnym tempie wzrostu.
          Preferuje środowisko o wysokiej wilgotności, co sprzyja efektywnej fotosyntezie
          i długoterminowej stabilności warunków pomiarowych.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">

          <p><span className="text-slate-400">Światło:</span> umiarkowane, rozproszone</p>
          <p><span className="text-slate-400">Temperatura:</span> 18–25°C</p>

          <p><span className="text-slate-400">Wilgotność:</span>
            <span className="text-indigo-300"> wysoka</span>
          </p>

          <p><span className="text-slate-400">Podlewanie:</span> regularne</p>

          <p><span className="text-slate-400">Tempo wzrostu:</span>
            <span className="text-yellow-400"> umiarkowane</span>
          </p>

          <p><span className="text-slate-400">Charakterystyka:</span> paproć</p>

        </div>

        <div className="mt-4 text-sm text-slate-300">
          <span className="text-slate-400">Znaczenie w projekcie:</span><br />
          bardzo duża powierzchnia liści zapewnia wysoką efektywność fotosyntezy i absorpcji CO₂
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[img1, img2, img3].map((img, i) => (
          <img key={i} src={img}
            className="rounded-xl object-cover h-60 w-full
            border border-indigo-400/30
            shadow-[0_0_20px_rgba(99,102,241,0.3)]
            hover:scale-105 transition"/>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="bg-slate-900/60 p-6 rounded-xl border border-indigo-400/30">
          <p className="text-slate-400">Liczba liści</p>
          <p className="text-2xl font-bold">22</p>
        </div>

        <div className="bg-slate-900/60 p-6 rounded-xl border border-indigo-400/30">
          <p className="text-slate-400">Powierzchnia</p>
          <p className="text-2xl font-bold">966.353 cm²</p>
        </div>

        <div className="bg-slate-900/60 p-6 rounded-xl border border-indigo-400/30">
          <p className="text-slate-400">Metoda</p>
          <p className="text-sm text-slate-300 leading-snug">
            Analiza powierzchni liści metodą fotograficzną<br />
            z wykorzystaniem <span className="text-indigo-300">ImageJ</span>
          </p>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-indigo-400/30 rounded-xl p-4 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-indigo-300 border-b border-indigo-400/30">
            <tr>
              <th className="p-2">Nr</th>
              <th className="p-2">Długość (cm)</th>
              <th className="p-2">Szerokość (cm)</th>
              <th className="p-2">Pole (cm²)</th>
            </tr>
          </thead>
          <tbody>
            {data.map(([n, l, w, p]) => (
              <tr key={n} className="border-b border-slate-700/50 hover:bg-indigo-500/10">
                <td className="p-2">{n}</td>
                <td className="p-2">{l}</td>
                <td className="p-2">{w}</td>
                <td className="p-2">{p}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-right mt-4 text-lg">
          Suma: <span className="font-bold">966.353 cm²</span>
        </p>
      </div>

    </div>
  );
}
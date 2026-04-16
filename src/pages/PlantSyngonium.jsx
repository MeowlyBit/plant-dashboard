import img1 from "../assets/plants/syngonium1.jpg";
import img2 from "../assets/plants/syngonium2.jpg";
import img3 from "../assets/plants/syngonium3.jpg";

export default function PlantSyngonium() {

  const data = [
    [1, 6.728, 4.645, 20.815],
    [2, 9.050, 6.067, 39.390],
    [3, 6.796, 3.873, 17.482],
    [4, 5.201, 3.864, 13.259],
    [5, 7.242, 4.837, 24.663],
    [6, 6.633, 4.137, 16.833],
    [7, 10.880, 5.228, 40.616],
    [8, 9.427, 5.491, 34.326],
    [9, 5.928, 3.273, 11.995],
    [10, 8.108, 4.851, 27.484],
    [11, 6.404, 4.042, 17.174],
    [12, 5.644, 3.447, 12.612],
    [13, 7.339, 4.642, 24.355],
    [14, 7.983, 5.565, 30.311],
    [15, 9.672, 5.368, 35.149],
    [16, 9.111, 5.835, 35.732],
    [17, 6.385, 3.393, 13.457],
    [18, 10.596, 5.991, 42.723],
    [19, 9.045, 4.735, 28.550],
    [20, 11.185, 6.401, 49.498],
    [21, 10.714, 6.099, 43.859],
    [22, 13.798, 6.773, 62.580],
    [23, 9.449, 6.334, 39.317],
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">

      <div className="bg-slate-900/60 border border-indigo-400/30 rounded-2xl p-6 
shadow-[0_0_25px_rgba(99,102,241,0.3),inset_0_0_10px_rgba(99,102,241,0.1)]">

        <h2 className="text-2xl font-bold mb-4 text-indigo-300">
          🍃 Syngonium sp.
        </h2>

        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Roślina tropikalna o szybkim tempie wzrostu i dużej powierzchni liści.
          Dzięki dynamicznemu przyrostowi biomasy wykazuje wysoki potencjał pochłaniania CO₂,
          szczególnie w warunkach wysokiej wilgotności i stabilnego oświetlenia.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">

          <p><span className="text-slate-400">Światło:</span> jasne, rozproszone</p>
          <p><span className="text-slate-400">Temperatura:</span> 18–28°C</p>

          <p><span className="text-slate-400">Wilgotność:</span> 50–70%</p>
          <p><span className="text-slate-400">Podlewanie:</span> umiarkowane</p>

          <p><span className="text-slate-400">Tempo wzrostu:</span>
            <span className="text-green-400"> szybkie</span>
          </p>

          <p><span className="text-slate-400">Charakterystyka:</span> roślina pnąca</p>

        </div>

        <div className="mt-4 text-sm text-slate-300">
          <span className="text-slate-400">Znaczenie w projekcie:</span><br />
          wysoka zdolność absorpcji CO₂ dzięki dużej powierzchni liści i szybkiemu wzrostowi
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
          <p className="text-2xl font-bold">23</p>
        </div>

        <div className="bg-slate-900/60 p-6 rounded-xl border border-indigo-400/30">
          <p className="text-slate-400">Powierzchnia</p>
          <p className="text-2xl font-bold">686.751 cm²</p>
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
          Suma: <span className="font-bold">686.751 cm²</span>
        </p>
      </div>

    </div>
  );
}
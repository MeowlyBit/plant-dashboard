import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getFiles, loadHabitatData } from "../data/dataLoader";

import FiltersPanel from "../components/FiltersPanel";
import ChartBox from "../components/ChartBox";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function Analysis() {

  const [cycle, setCycle] = useState("cycle1");
  const [loading, setLoading] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");

  const [labels, setLabels] = useState([]);

  const [data, setData] = useState({
    H1: null,
    H2: null,
    H3: null
  });

  const [visible, setVisible] = useState({
    H1: true,
    H2: true,
    H3: true
  });

  useEffect(() => {
    setData({ H1: null, H2: null, H3: null });
    setLabels([]);
  }, [cycle]);

  useEffect(() => {
    const files = getFiles("H2", cycle);
    if (!files || files.length === 0) return;

    const dates = files.map(f => f.replace(".csv", ""));

    setStartDate(dates[0]);
    setEndDate(dates[Math.min(4, dates.length - 1)]);
  }, [cycle]);

  useEffect(() => {

    if (!startDate || !endDate) return;

    const fetchData = async () => {

      setLoading(true);

      try {

        if (cycle === "cycle3") {
          const h2 = await loadHabitatData(
            "H2",
            cycle,
            startDate,
            endDate,
            startTime,
            endTime
          );

          setLabels(h2?.labels || []);
          setData({ H1: null, H2: h2, H3: null });

          setLoading(false);
          return;
        }

        const [h1, h2, h3] = await Promise.all([
          loadHabitatData("H1", cycle, startDate, endDate, startTime, endTime),
          loadHabitatData("H2", cycle, startDate, endDate, startTime, endTime),
          loadHabitatData("H3", cycle, startDate, endDate, startTime, endTime)
        ]);

        setLabels(h2?.labels || []);
        setData({ H1: h1, H2: h2, H3: h3 });

      } catch (e) {
        console.error("ANALYSIS ERROR:", e);
      }

      setLoading(false);
    };

    fetchData();

  }, [cycle, startDate, endDate, startTime, endTime]);

  const makeDataset = (field, colors) => {

    if (!labels || labels.length === 0) {
      return { labels: [], datasets: [] };
    }

    if (cycle === "cycle3") {
      if (!data.H2) return { labels, datasets: [] };

      return {
        labels,
        datasets: [
          {
            label: "Asplenium (cykl 3)",
            data: data.H2[field] || [],
            borderColor: "#a855f7",
            tension: 0.4,
            pointRadius: 0
          }
        ]
      };
    }

    const datasets = [];

    if (visible.H1 && data.H1) {
      datasets.push({
        label: "Kontrola",
        data: data.H1[field] || [],
        borderColor: colors[0],
        tension: 0.4,
        pointRadius: 0
      });
    }

    if (visible.H2 && data.H2) {
      datasets.push({
        label: "Asplenium",
        data: data.H2[field] || [],
        borderColor: colors[1],
        tension: 0.4,
        pointRadius: 0
      });
    }

    if (visible.H3 && data.H3) {
      datasets.push({
        label: "Syngonium",
        data: data.H3[field] || [],
        borderColor: colors[2],
        tension: 0.4,
        pointRadius: 0
      });
    }

    return { labels, datasets };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#cbd5f5" }
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
          maxRotation: 0,
          autoSkip: true,
          autoSkipPadding: 20,
          maxTicksLimit: window.innerWidth < 1400 ? 10 : 20
        },
        grid: {
          color: "rgba(148,163,184,0.2)"
        }
      },
      y: {
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148,163,184,0.1)" }
      }
    }
  };

  return (
    <div className="space-y-10">

      <h1 className="text-3xl md:text-4xl font-bold flex flex-col items-center gap-2 text-center">
        <span>Analiza danych 📊</span>
      </h1>

      {/* CYKLE */}
      <div className="flex justify-center gap-4">
        {[
          { key: "cycle1", label: "Cykl 1" },
          { key: "cycle2", label: "Cykl 2" },
          { key: "cycle3", label: "Cykl 3" }
        ].map(c => (
          <button
            key={c.key}
            onClick={() => setCycle(c.key)}
            className={`px-6 py-2 rounded ${c.key === "cycle3"
                ? cycle === c.key
                  ? "bg-purple-500"
                  : "bg-purple-500/20 hover:bg-purple-600/40"
                : cycle === c.key
                  ? "bg-indigo-500"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* PANEL */}
      <FiltersPanel
        dates={getFiles("H2", cycle).map(f => f.replace(".csv", ""))}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />

      {/* TOGGLE */}
      {cycle !== "cycle3" && (
        <div className="flex justify-center gap-6">
          {["H1", "H2", "H3"].map(h => (
            <label key={h} className="flex gap-2 text-slate-300">
              <input
                type="checkbox"
                checked={visible[h]}
                onChange={() => setVisible(v => ({ ...v, [h]: !v[h] }))}
              />
              {h}
            </label>
          ))}
        </div>
      )}

      {/* WYKRESY */}

      <ChartBox title="Natężenie światła (%)">
        <Line data={makeDataset("f1", ["#ef4444", "#22c55e", "#3b82f6"])} options={chartOptions} />
      </ChartBox>

      <ChartBox title="Temperatura (°C)">
        <Line data={makeDataset("f3", ["#ef4444", "#22c55e", "#3b82f6"])} options={chartOptions} />
      </ChartBox>

      <ChartBox title="Wilgotność powietrza (%)">
        <Line data={makeDataset("f4", ["#ef4444", "#22c55e", "#3b82f6"])} options={chartOptions} />
      </ChartBox>

      <ChartBox title="Ciśnienie atmosferyczne (hPa)">
        <Line data={makeDataset("f5", ["#ef4444", "#22c55e", "#3b82f6"])} options={chartOptions} />
      </ChartBox>

      <ChartBox title="Tlen (%)">
        <Line data={makeDataset("f6", ["#ef4444", "#22c55e", "#3b82f6"])} options={chartOptions} />
      </ChartBox>

      <ChartBox title="CO₂ (ppm)">
        <Line data={makeDataset("f7", ["#ef4444", "#22c55e", "#3b82f6"])} options={chartOptions} />
      </ChartBox>

      {loading && (
        <div className="text-center text-xl">
          Ładowanie danych...
        </div>
      )}

    </div>
  );
}
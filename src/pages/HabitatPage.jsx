import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";

import FiltersPanel from "../components/FiltersPanel";
import ChartBox from "../components/ChartBox";
import { getFiles, loadHabitatData } from "../data/dataLoader";

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

export default function HabitatPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const habitatInfo = {
    H1: { name: "Próba badawczo-kontrolna", icon: "🧪" },
    H2: { name: "Asplenium", icon: "🌿" },
    H3: { name: "Syngonium", icon: "🍃" }
  };

  const [cycle, setCycle] = useState("cycle1");
  const [loading, setLoading] = useState(false);

  let files = getFiles(id, cycle);
  const dates = files.map(f => f.replace(".csv", ""));

  const [startDate, setStartDate] = useState(dates[0]);
  const [endDate, setEndDate] = useState(dates[Math.min(4, dates.length - 1)]);

  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("23:59");

  const [labels, setLabels] = useState([]);

  const [f1, setF1] = useState([]);
  const [f3, setF3] = useState([]);
  const [f4, setF4] = useState([]);
  const [f5, setF5] = useState([]);
  const [f6, setF6] = useState([]);
  const [f7, setF7] = useState([]);

  useEffect(() => {
    if (id !== "H2" && cycle === "cycle3") {
      setCycle("cycle1");
    }
  }, [id]);

  useEffect(() => {
    const newFiles = getFiles(id, cycle);
    const newDates = newFiles.map(f => f.replace(".csv", ""));

    setStartDate(newDates[0]);
    setEndDate(newDates[Math.min(4, newDates.length - 1)]);
  }, [cycle, id]);

  useEffect(() => {

    const load = async () => {

      setLoading(true);

      const data = await loadHabitatData(
        id,
        cycle,
        startDate,
        endDate,
        startTime,
        endTime
      );

      setLabels(data.labels);
      setF1(data.f1);
      setF3(data.f3);
      setF4(data.f4);
      setF5(data.f5);
      setF6(data.f6);
      setF7(data.f7);

      setLoading(false);
    };

    load();

  }, [id, cycle, startDate, endDate, startTime, endTime]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
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

  const field1Options = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        min: 0,
        max: 100,
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148,163,184,0.1)" }
      }
    }
  };

  const field6Options = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        min: 20,
        max: 21.4,
        ticks: { color: "#94a3b8" },
        grid: { color: "rgba(148,163,184,0.1)" }
      }
    }
  };

  const makeChart = (label, data, color) => ({
    labels,
    datasets: [
      {
        label,
        data,
        borderColor: color,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  });

  return (
    <div className="mt-10 space-y-10">

      {/* MENU */}
      <div className="hidden md:flex justify-center gap-6">
        {["H1", "H2", "H3"].map(h => (
          <button
            key={h}
            onClick={() => navigate(`/habitat/${h}`)}
            className={`px-6 py-3 rounded-xl border transition-all duration-300
            ${id === h
                ? "bg-indigo-600/30 border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.9)]"
                : "border-indigo-400/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]"
              }`}
          >
            {habitatInfo[h].icon} Habitat {h.slice(1)}
          </button>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-6 py-3 rounded-xl border border-indigo-400/30 bg-slate-900/70 text-white shadow-[0_0_20px_rgba(99,102,241,0.6)]"
        >
          ☰ Habitaty
        </button>

        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4">
            {["H1", "H2", "H3"].map(h => (
              <button
                key={h}
                onClick={() => {
                  navigate(`/habitat/${h}`);
                  setMenuOpen(false);
                }}
                className="px-6 py-3 rounded-xl border border-indigo-400/30"
              >
                {habitatInfo[h].icon} Habitat {h.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl">{habitatInfo[id].icon}</h1>
        <h2 className="text-2xl font-bold">{habitatInfo[id].name}</h2>
      </div>

      {/* CYKLE */}
      <div className="flex justify-center gap-4">
        <button onClick={()=>setCycle("cycle1")} className={cycle==="cycle1"?"bg-indigo-500 px-6 py-2 rounded":"bg-slate-800 px-6 py-2 rounded"}>Cykl 1</button>
        <button onClick={()=>setCycle("cycle2")} className={cycle==="cycle2"?"bg-indigo-500 px-6 py-2 rounded":"bg-slate-800 px-6 py-2 rounded"}>Cykl 2</button>

        {id==="H2" && (
          <button onClick={()=>setCycle("cycle3")}
            className={cycle==="cycle3"?"bg-purple-500 px-6 py-2 rounded":"bg-purple-500/20 px-6 py-2 rounded"}>
            Cykl 3
          </button>
        )}
      </div>

      {/* PANEL */}
      <FiltersPanel
        dates={dates}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />

      {/* WYKRESY */}
      <ChartBox title="Natężenie światła (%)">
        <Line data={makeChart("Światło", f1, "#22c55e")} options={field1Options}/>
      </ChartBox>

      <ChartBox title="Temperatura (°C)">
        <Line data={makeChart("Temp", f3, "#3b82f6")} options={chartOptions}/>
      </ChartBox>

      <ChartBox title="Wilgotność powietrza (%)">
        <Line data={makeChart("Wilgotność", f4, "#f97316")} options={chartOptions}/>
      </ChartBox>

      <ChartBox title="Ciśnienie atmosferyczne (hPa)">
        <Line data={makeChart("Ciśnienie", f5, "#eab308")} options={chartOptions}/>
      </ChartBox>

      <ChartBox title="Tlen (%)">
        <Line data={makeChart("Tlen", f6, "#a855f7")} options={field6Options}/>
      </ChartBox>

      <ChartBox title="CO₂ (ppm)">
        <Line data={makeChart("CO2", f7, "#ef4444")} options={chartOptions}/>
      </ChartBox>

      {loading && <div className="text-center">Ładowanie...</div>}

    </div>
  );
}
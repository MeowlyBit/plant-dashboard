export default function FiltersPanel({
  dates,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  startTime,
  endTime,
  setStartTime,
  setEndTime
}) {
  return (
    <div className="mx-auto w-fit bg-slate-900/70 border border-indigo-400/30 rounded-2xl p-6 
    shadow-[0_0_25px_rgba(99,102,241,0.4),inset_0_0_15px_rgba(99,102,241,0.15)] 
    backdrop-blur-md">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="flex flex-col text-sm">
          <label className="text-slate-400 mb-1">Data od</label>
          <select
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
            className="bg-slate-800 px-3 py-2 rounded-lg border border-indigo-400/20
            transition-all duration-300
            focus:outline-none focus:border-indigo-400
            focus:shadow-[0_0_15px_rgba(99,102,241,0.7)]
            hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          >
            {dates.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col text-sm">
          <label className="text-slate-400 mb-1">Godzina od</label>
          <input
            type="time"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
            className="bg-slate-800 px-3 py-2 rounded-lg border border-indigo-400/20
            transition-all duration-300
            focus:outline-none focus:border-indigo-400
            focus:shadow-[0_0_15px_rgba(99,102,241,0.7)]
            hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          />
        </div>

        <div className="flex flex-col text-sm">
          <label className="text-slate-400 mb-1">Data do</label>
          <select
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
            className="bg-slate-800 px-3 py-2 rounded-lg border border-indigo-400/20
            transition-all duration-300
            focus:outline-none focus:border-indigo-400
            focus:shadow-[0_0_15px_rgba(99,102,241,0.7)]
            hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          >
            {dates.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col text-sm">
          <label className="text-slate-400 mb-1">Godzina do</label>
          <input
            type="time"
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
            className="bg-slate-800 px-3 py-2 rounded-lg border border-indigo-400/20
            transition-all duration-300
            focus:outline-none focus:border-indigo-400
            focus:shadow-[0_0_15px_rgba(99,102,241,0.7)]
            hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          />
        </div>

      </div>
    </div>
  );
}
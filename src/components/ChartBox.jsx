export default function ChartBox({ title, children }) {
  return (
    <div className="bg-slate-900/60 border border-indigo-400/30 rounded-xl p-4
    shadow-[0_0_25px_rgba(99,102,241,0.35),inset_0_0_12px_rgba(99,102,241,0.15)]
    transition-all duration-300
    hover:shadow-[0_0_40px_rgba(99,102,241,0.6),inset_0_0_18px_rgba(99,102,241,0.25)]">

      <h2 className="text-lg mb-3 text-slate-300">
        {title}
      </h2>

      {children}
    </div>
  );
}
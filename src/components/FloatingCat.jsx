import cat from "../assets/cat.png";

export default function FloatingCat() {
  return (
    <div className="fixed left-[calc(50%-576px-300px)] top-1/3 -translate-y-1/2 z-20 pointer-events-none hidden ultra:block">
      <img
        src={cat}
        alt="Space Cat"
        className="w-80 animate-float drop-shadow-[0_0_40px_rgba(99,102,241,0.8)]"
      />
    </div>
  );
}
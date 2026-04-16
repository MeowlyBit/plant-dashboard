import { useEffect, useState } from "react";

export default function Meteors() {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {

      const newMeteor = {
        id: Math.random(),
        top: Math.random() * -20,
        left: Math.random() * 120,
        length: Math.random() * 200 + 150,
        duration: Math.random() * 0.1 + 1
      };

      setMeteors(m => [...m, newMeteor]);

      setTimeout(() => {
        setMeteors(m => m.filter(x => x.id !== newMeteor.id));
      }, newMeteor.duration * 1000);

    }, Math.random() * 4000 + 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {meteors.map(m => (
        <div
          key={m.id}
          className="meteor"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            width: `${m.length}px`,
            animationDuration: `${m.duration}s`
          }}
        />
      ))}
    </>
  );
}
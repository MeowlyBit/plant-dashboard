export const filesCycle1 = [
  "2026-01-30.csv","2026-01-31.csv","2026-02-01.csv","2026-02-02.csv",
  "2026-02-03.csv","2026-02-04.csv","2026-02-05.csv","2026-02-06.csv",
  "2026-02-07.csv","2026-02-08.csv","2026-02-09.csv","2026-02-10.csv",
  "2026-02-11.csv","2026-02-12.csv","2026-02-13.csv","2026-02-14.csv",
  "2026-02-15.csv","2026-02-16.csv"
];

export const filesCycle2 = [
  "2026-02-16.csv","2026-02-17.csv","2026-02-18.csv","2026-02-19.csv",
  "2026-02-20.csv","2026-02-21.csv","2026-02-22.csv","2026-02-23.csv",
  "2026-02-24.csv","2026-02-25.csv","2026-02-26.csv","2026-02-27.csv",
  "2026-02-28.csv","2026-03-01.csv","2026-03-02.csv","2026-03-03.csv",
  "2026-03-04.csv","2026-03-05.csv"
];

export const filesCycle3 = [
  "2026-03-19.csv","2026-03-20.csv","2026-03-21.csv","2026-03-22.csv",
  "2026-03-23.csv","2026-03-24.csv","2026-03-25.csv","2026-03-26.csv",
  "2026-03-27.csv","2026-03-28.csv","2026-03-29.csv","2026-03-30.csv",
  "2026-03-31.csv","2026-04-01.csv","2026-04-02.csv","2026-04-03.csv",
  "2026-04-04.csv","2026-04-05.csv","2026-04-06.csv","2026-04-07.csv",
  "2026-04-08.csv","2026-04-09.csv"
];

export function getFiles(id, cycle) {
  if (cycle === "cycle1") return filesCycle1;
  if (cycle === "cycle2") return filesCycle2;
  if (cycle === "cycle3" && id === "H2") return filesCycle3;
  return filesCycle1;
}

export async function loadHabitatData(id, cycle, startDate, endDate, startTime, endTime) {

  const files = getFiles(id, cycle);

  const start = new Date(`${startDate} ${startTime}`);
  const end = new Date(`${endDate} ${endTime}`);

  const l = [];
  const f1 = [];
  const f3 = [];
  const f4 = [];
  const f5 = [];
  const f6 = [];
  const f7 = [];

  const responses = await Promise.all(
    files.map(file => fetch(`/data/${id}/${cycle}/${file}`))
  );

  const csvFiles = await Promise.all(
    responses.map(res => res.text())
  );

  csvFiles.forEach(csv => {

    const lines = csv.trim().split("\n").slice(1);

    lines.forEach(line => {

      const cols = line.split(",");
      const timestamp = new Date(cols[0]);

      if (timestamp >= start && timestamp <= end) {

        const label = [
          timestamp.toLocaleDateString("pl-PL", {
            day: "2-digit",
            month: "2-digit"
          }),
          timestamp.toLocaleTimeString("pl-PL", {
            hour: "2-digit",
            minute: "2-digit"
          })
        ];

        l.push(label);

        f1.push(Number(cols[1]));

        const v3 = Number(cols[3]);
        f3.push([179.79,180.13,180.52,525].includes(v3) ? null : v3);

        f4.push(Number(cols[4]));
        f5.push(Number(cols[5]));

        const v6 = Number(cols[6]);
        f6.push([0,532.4,550,525,515].includes(v6) ? null : v6);

        const v7 = Number(cols[7]);
        f7.push([-62,0,-159].includes(v7) ? null : v7);

      }

    });

  });

  return { labels:l, f1, f3, f4, f5, f6, f7 };
}
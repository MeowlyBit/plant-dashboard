import { useState } from "react";

export default function ConclusionsPage() {

    const [cycle, setCycle] = useState("cycle1");

    const cycleButtons = [
        { key: "cycle1", label: "Cykl 1" },
        { key: "cycle2", label: "Cykl 2" },
        { key: "cycle3", label: "Cykl 3" }
    ];

    return (
        <div className="space-y-10">

            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">
                    Wnioski końcowe 📊
                </h1>
            </div>
            {/* 🔥 PRZYCISKI */}
            <div className="flex justify-center gap-4">
                {cycleButtons.map(c => (
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



            {/* 🔥 TREŚĆ */}
            <div className="space-y-8">

                {/* ================= CYKL 1 ================= */}
                {cycle === "cycle1" && (
                    <>
                        <div className="space-y-10">

                            {/* 1. BENCHMARK */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🧪 Próba kontrolna (benchmark)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    W habitatcie bez roślin CO₂ spadł z ~2067 do ~1579 ppm (≈ –28 ppm/dzień).
                                    Brak wyraźnego rytmu dobowego oraz stabilny poziom O₂ (~20,3 → 20,2%)
                                    wskazują na brak aktywnej fotosyntezy.
                                    <br /><br />
                                    <b>Wniosek:</b> habitat pusty stanowi punkt odniesienia – zmiany są minimalne
                                    i wynikają głównie z procesów fizycznych, nie biologicznych.
                                </p>
                            </div>

                            {/* 2. ASPLENIUM */}
                            <div className="p-6 rounded-2xl border border-green-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🌿 Asplenium</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    CO₂ spadł z ~2052 do ~340 ppm (≈ –100 ppm/dzień).
                                    Zaobserwowano wyraźny rytm dobowy:
                                    <br />
                                    • dzień: ~–24 ppm/h (fotosynteza)
                                    • noc: ~+24 ppm/h (respiracja)
                                    <br /><br />
                                    Tempo redukcji rosło wraz ze stężeniem CO₂ (do ~–108 ppm/h przy 2000 ppm).
                                    Towarzyszył temu wzrost O₂ (+0,3 pp).
                                    <br /><br />
                                    <b>Wniosek:</b> Asplenium wykazuje wysoką efektywność fotosyntezy i stabilną
                                    redukcję CO₂ nawet w warunkach bardzo wysokiej wilgotności (~98% RH).
                                </p>
                            </div>

                            {/* 3. SYNGONIUM */}
                            <div className="p-6 rounded-2xl border border-emerald-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🍃 Syngonium</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    CO₂ wzrósł z ~2031 do ~4972 ppm (+172 ppm/dzień).
                                    W dzień asymilacja była minimalna (~–5 ppm/h), natomiast w nocy dominowała
                                    respiracja (+24 ppm/h).
                                    <br /><br />
                                    O₂ lekko spadł (–0,1 pp), co wskazuje na przewagę procesów oddychania.
                                    <br /><br />
                                    <b>Wniosek:</b> habitat funkcjonował jako źródło CO₂ – fotosynteza była zbyt
                                    słaba, aby zrównoważyć emisję (prawdopodobnie przez wilgotność lub światło).
                                </p>
                            </div>

                            {/* 4. MIKROKLIMAT */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🌡️ Mikroklimat</h3>
                                <ul className="text-slate-300 text-sm space-y-1">
                                    <li>• Cykl światła: 14h dzień / 10h noc</li>
                                    <li>• Temperatura: ~20°C</li>
                                    <li>• Wilgotność: H1 ~47%, H2 ~98%, H3 ~93%</li>
                                    <li>• Wilgotność gleby: H2 ~49%, H3 ~58%</li>
                                </ul>
                            </div>

                            <div className="bg-slate-900/60 border border-indigo-400/20 rounded-2xl p-6 backdrop-blur-md
shadow-[0_0_25px_rgba(99,102,241,0.25),inset_0_0_12px_rgba(99,102,241,0.1)]">

                                <h2 className="text-xl font-semibold mb-6 text-center">
                                    📊 Podsumowanie
                                </h2>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">

                                        <thead>
                                            <tr className="text-indigo-300 border-b border-indigo-400/20">
                                                <th className="py-3 text-left">Habitat</th>
                                                <th className="py-3 text-right">ΔCO₂</th>
                                                <th className="py-3 text-right">Trend</th>
                                                <th className="py-3 text-right">Dzień</th>
                                                <th className="py-3 text-right">Noc</th>
                                                <th className="py-3 text-right">ΔO₂</th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-indigo-400/10">

                                            <tr className="hover:bg-indigo-500/5 transition">
                                                <td className="py-3 font-medium">H1</td>
                                                <td className="py-3 text-right text-blue-300">–488 ppm</td>
                                                <td className="py-3 text-right text-blue-300">–28 ppm/d</td>
                                                <td className="py-3 text-right text-slate-300">≈0</td>
                                                <td className="py-3 text-right text-slate-300">≈0</td>
                                                <td className="py-3 text-right text-slate-300">–0,1</td>
                                            </tr>

                                            <tr className="hover:bg-indigo-500/5 transition">
                                                <td className="py-3 font-medium">H2</td>
                                                <td className="py-3 text-right text-green-400">–1712 ppm</td>
                                                <td className="py-3 text-right text-green-400">–100 ppm/d</td>
                                                <td className="py-3 text-right text-green-400">–24</td>
                                                <td className="py-3 text-right text-orange-300">+24</td>
                                                <td className="py-3 text-right text-green-400">+0,3</td>
                                            </tr>

                                            <tr className="hover:bg-indigo-500/5 transition">
                                                <td className="py-3 font-medium">H3</td>
                                                <td className="py-3 text-right text-red-400">+2941 ppm</td>
                                                <td className="py-3 text-right text-red-400">+172 ppm/d</td>
                                                <td className="py-3 text-right text-slate-300">~0</td>
                                                <td className="py-3 text-right text-orange-300">+24</td>
                                                <td className="py-3 text-right text-red-300">–0,1</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* 6. INTERPRETACJA */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🧠 Interpretacja biologiczna</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Wysokie stężenie CO₂ zwiększa tempo fotosyntezy (efekt wyraźny w H2).
                                    W H3 dominują procesy emisji CO₂ (respiracja roślin i mikroorganizmów),
                                    co wskazuje na niewystarczające warunki dla efektywnej asymilacji.
                                </p>
                            </div>

                            {/* 7. REKOMENDACJE */}
                            <div className="p-6 rounded-2xl border border-purple-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🚀 Rekomendacje</h3>
                                <ul className="text-slate-300 text-sm space-y-2">
                                    <li>• zwiększyć natężenie światła dla Syngonium</li>
                                    <li>• obniżyć wilgotność do 70–85%</li>
                                    <li>• poprawić cyrkulację powietrza</li>
                                    <li>• rozważyć zmianę podłoża (wpływ mikroorganizmów)</li>
                                </ul>
                            </div>

                        </div>
                    </>
                )}

                {/* ================= CYKL 2 ================= */}
                {cycle === "cycle2" && (
                    <>
                        <div className="space-y-10">

                            {/* 1. GŁÓWNA OBSERWACJA */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">📉 Spłaszczenie zakresów CO₂</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    W cyklu 2 zaobserwowano wyraźne zmniejszenie zakresu zmian stężenia CO₂:
                                    <br /><br />
                                    • Asplenium: minimum wzrosło z ~300–400 ppm do ~500–600 ppm
                                    • Syngonium: maksimum spadło z ~5000 ppm do ~3000 ppm
                                    <br /><br />
                                    <b>Wniosek:</b> układ stał się bardziej stabilny, ale jednocześnie mniej „wydajny”
                                    – zarówno minima, jak i maksima zostały ograniczone.
                                </p>
                            </div>

                            {/* 2. TEMPERATURA */}
                            <div className="p-6 rounded-2xl border border-orange-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🌡️ Wpływ temperatury (+3°C)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    W cyklu 2 temperatura wzrosła średnio o ~3°C (ok. 20 → 22°C).
                                    <br /><br />
                                    Dla roślin typu C3 (np. Asplenium) powoduje to:
                                    <br />
                                    • wzrost fotorespiracji
                                    • spadek efektywności fotosyntezy
                                    <br /><br />
                                    <b>Efekt:</b> roślina nie redukuje CO₂ tak intensywnie jak wcześniej,
                                    co powoduje wyższe minimum stężenia.
                                </p>
                            </div>

                            {/* 3. RESPIRACJA */}
                            <div className="p-6 rounded-2xl border border-red-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🌬️ Respiracja i źródła CO₂</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Wyższa temperatura zwiększa tempo procesów metabolicznych
                                    (reguła Q10 ~2).
                                    <br /><br />
                                    Oznacza to:
                                    <br />
                                    • większą emisję CO₂ przez rośliny i mikroorganizmy
                                    • szybsze narastanie CO₂ w nocy
                                    <br /><br />
                                    Jednocześnie poprawiona cyrkulacja powietrza ograniczyła lokalne
                                    akumulacje gazu.
                                    <br /><br />
                                    <b>Efekt:</b> maksimum CO₂ nie osiąga już ekstremalnych wartości (~5000 ppm).
                                </p>
                            </div>

                            {/* 4. WILGOTNOŚĆ */}
                            <div className="p-6 rounded-2xl border border-blue-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">💧 Wilgotność i dyfuzja gazów</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    W cyklu 2 utrzymywała się bardzo wysoka wilgotność:
                                    <br /><br />
                                    • Syngonium: ~98% RH
                                    • Asplenium: ~94% RH
                                    <br /><br />
                                    Powoduje to:
                                    <br />
                                    • pogrubienie warstwy granicznej na liściach
                                    • utrudnioną wymianę gazową
                                    • możliwą kondensację na powierzchni liści
                                    <br /><br />
                                    <b>Efekt:</b> ograniczenie zarówno asymilacji CO₂, jak i jego lokalnej akumulacji
                                    → „spłaszczenie” wykresów.
                                </p>
                            </div>

                            {/* 5. INTERPRETACJA */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🧠 Interpretacja</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Spłaszczenie przebiegów CO₂ nie wynika z błędów pomiarowych,
                                    lecz ze zmiany warunków środowiskowych:
                                    <br /><br />
                                    • wyższa temperatura → słabsza fotosynteza + większa respiracja
                                    • wysoka wilgotność → ograniczona dyfuzja gazów
                                    • lepsze mieszanie → mniejsze lokalne skoki stężenia
                                    <br /><br />
                                    <b>Wniosek:</b> układ osiągnął większą stabilność kosztem wydajności
                                    biologicznej.
                                </p>
                            </div>

                            {/* 6. CYKL 3 – STRATEGIA */}
                            <div className="p-6 rounded-2xl border border-purple-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🚀 Strategia dla cyklu 3</h3>

                                <ul className="text-slate-300 text-sm space-y-2">
                                    <li>• wydłużenie dnia do 16 h (np. 05:00–21:00)</li>
                                    <li>• wentylator: 30 s co 5 min (ciągła cyrkulacja)</li>
                                    <li>• limit temperatury: 22,5–23°C (z redukcją LED)</li>
                                    <li>• kontrola wilgotności: utrzymywać 80–85% RH</li>
                                </ul>

                                <p className="text-slate-300 text-sm mt-4">
                                    <b>Cel:</b> maksymalizacja fotosyntezy przy jednoczesnym uniknięciu
                                    przegrzewania i ograniczeń dyfuzji gazów.
                                </p>
                            </div>

                        </div>
                    </>
                )}

                {/* ================= CYKL 3 ================= */}
                {cycle === "cycle3" && (
                    <>
                        <div className="space-y-10">

                            {/* 1. ZJAWISKO PRZEJŚCIOWE */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">⏱️ Okres przejściowy (pierwsze 48h)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Po ponownym włożeniu Asplenium i zwiększeniu stężenia CO₂ do ~2000 ppm
                                    zaobserwowano początkowo dodatni bilans CO₂.
                                    <br /><br />
                                    • 20–22.03: bilans dodatni (emisja CO₂)
                                    • 23.03: przejście do redukcji (–52 mg/d)
                                    <br /><br />
                                    <b>Wniosek:</b> układ potrzebował ~2–3 dni na stabilizację i powrót
                                    do efektywnej fotosyntezy.
                                </p>
                            </div>

                            {/* 2. RE-ENTRAINMENT */}
                            <div className="p-6 rounded-2xl border border-green-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🕒 Re-entrainment rośliny</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Zmiana fotoperiodu na 16h dzień / 8h noc oraz wcześniejszy pobyt
                                    rośliny na parapecie spowodowały rozregulowanie rytmu dobowego.
                                    <br /><br />
                                    Roślina potrzebowała ok. 1–3 dni na ponowną synchronizację:
                                    <br />
                                    • otwierania aparatów szparkowych
                                    • aktywności fotosyntetycznej
                                    <br /><br />
                                    <b>Efekt:</b> początkowo słaba asymilacja CO₂ mimo obecności światła.
                                </p>
                            </div>

                            {/* 3. PODŁOŻE / BIRCH EFFECT */}
                            <div className="p-6 rounded-2xl border border-emerald-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🌱 Wpływ podłoża (Birch effect)</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Podlanie rośliny przed umieszczeniem w habitatcie wywołało
                                    impuls emisji CO₂ z gleby (tzw. Birch effect).
                                    <br /><br />
                                    • wzrost aktywności mikroorganizmów
                                    • intensywna respiracja przez 24–48 h
                                    <br /><br />
                                    <b>Efekt:</b> emisja CO₂ z podłoża maskowała dzienną fotosyntezę.
                                </p>
                            </div>

                            {/* 4. WARUNKI ŚRODOWISKOWE */}
                            <div className="p-6 rounded-2xl border border-blue-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🌡️ Warunki środowiskowe</h3>
                                <ul className="text-slate-300 text-sm space-y-1">
                                    <li>• wilgotność powietrza: 91–94% RH</li>
                                    <li>• wilgotność podłoża: ~52–53</li>
                                    <li>• temperatura: średnio ~23–24°C (pik do 25°C)</li>
                                    <li>• światło: stabilne (~76–81)</li>
                                </ul>

                                <p className="text-slate-300 text-sm mt-3">
                                    <b>Wpływ:</b> wysoka wilgotność i temperatura ograniczały efektywną
                                    wymianę gazową oraz zwiększały respirację.
                                </p>
                            </div>

                            {/* 5. DLACZEGO CO2 ROSŁO */}
                            <div className="p-6 rounded-2xl border border-red-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">📈 Dlaczego CO₂ początkowo rosło?</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    W pierwszych dniach zadziałało jednocześnie kilka czynników:
                                    <br /><br />
                                    • rozregulowany rytm rośliny (po parapecie)
                                    • impuls respiracji gleby po podlaniu
                                    • wysoka wilgotność ograniczająca dyfuzję
                                    • podwyższona temperatura zwiększająca fotorespirację
                                    <br /><br />
                                    <b>Efekt:</b> emisja CO₂ przewyższała jego redukcję.
                                </p>
                            </div>

                            {/* 6. MOMENT PRZEŁAMANIA */}
                            <div className="p-6 rounded-2xl border border-indigo-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">📉 Moment przejścia w redukcję</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    23.03 nastąpiło przejście do stabilnej pracy:
                                    <br /><br />
                                    • dzienne tempo: –6,95 mg/h
                                    • bilans dobowy: –52 mg/d
                                    <br /><br />
                                    <b>Wniosek:</b> po ustabilizowaniu warunków i adaptacji rośliny
                                    system osiągnął wysoką efektywność redukcji CO₂.
                                </p>
                            </div>

                            {/* 7. KLUCZOWY WNIOSEK */}
                            <div className="p-6 rounded-2xl border border-purple-400/30 bg-slate-900/60">
                                <h3 className="text-xl font-semibold mb-3">🧠 Kluczowy wniosek</h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Początkowa emisja CO₂ nie była błędem systemu, lecz naturalnym efektem
                                    przejściowym wynikającym z:
                                    <br /><br />
                                    • adaptacji rośliny do nowych warunków
                                    • aktywności biologicznej podłoża
                                    • warunków środowiskowych
                                    <br /><br />
                                    <b>Interpretacja:</b> cykl 3 potwierdza, że stabilność i efektywność
                                    fotosyntezy zależą nie tylko od światła, ale również od historii rośliny
                                    oraz warunków początkowych eksperymentu.
                                </p>
                            </div>

                        </div>
                    </>
                )}

            </div>

        </div>
    );
}
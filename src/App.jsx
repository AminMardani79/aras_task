// components
import ExchangeInfo from "./components/infoBox/ExchangeInfo";
import ImpactIndexTable from "./components/table/ImpactIndexTable";
import SelectedIndicatorTable from "./components/table/SelectedIndicatorTable";
import TransactionSymbolTable from "./components/table/TransactionSymbolTable";

export default function App() {
  return (
    <div className="app-container">
      <section className="exchange-section">
        <ExchangeInfo />
        <SelectedIndicatorTable
          items={[
            { id: 1, name: "شاخص كل", time: "18:48", count: 20, change: "(10)",percent: "(0.62)", min: "299792458", max: "1234898494" },
            { id: 2, name: "شاخص قيمت(وزني-ارزشي)", time: "18:48", count: 32, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
            { id: 3, name: "شاخص كل (هم وزن)", time: "18:48", count: 12, change: "(10)",percent: "(0.62)", min: "2156489494", max: "759878" },
            { id: 4, name: "شاخص قيمت (هم وزن)", time: "18:48", count: 9, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
            { id: 5, name: "شاخص آزاد شناور", time: "18:48", count: 99, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
            { id: 6, name: "شاخص بازار اول", time: "18:48", count: 86, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
            { id: 7, name: "شاخص بازار دوم", time: "18:48", count: 12, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
          ]}
        />
        <TransactionSymbolTable
          items={[
            { id: 1, name: "فولاد", final: 4.9, effect: 20 },
            { id: 2, name: "شپنا", final: 1.9, effect: 32 },
            { id: 3, name: "وغدير", final: 2.4, effect: 12 },
            { id: 4, name: "فملي", final: 3.9, effect: 9 },
            { id: 5, name: "شبندر", final: 0.9, effect: 99 },
            { id: 6, name: "فارس", final: 2.9, effect: 86 },
            { id: 7, name: "تاصيكو", final: 99, effect: 12 },
          ]}
        />
        <ImpactIndexTable
          items={[
            { id: 1, name: "شاخص كل", time: "18:48", count: 20, change: "(10)",percent: "(0.62)", min: "2156489494", max: "5892161" },
            { id: 2, name: "شاخص قيمت(وزني-ارزشي)", time: "18:48", count: 32, change: "(10)",percent: "(0.62)", min: "100000", max: "378524" },
            { id: 3, name: "شاخص كل (هم وزن)", time: "18:48", count: 12, change: "(10)",percent: "(0.62)", min: "12752", max: "5846" },
            { id: 4, name: "شاخص قيمت (هم وزن)", time: "18:48", count: 9, change: "(10)",percent: "(0.62)", min: "2156489494", max: "5822" },
            { id: 5, name: "شاخص آزاد شناور", time: "18:48", count: 99, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
            { id: 6, name: "شاخص بازار اول", time: "18:48", count: 86, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
            { id: 7, name: "شاخص بازار دوم", time: "18:48", count: 12, change: "(10)",percent: "(0.62)", min: "2156489494", max: "1234898494" },
          ]}
        />
      </section>
    </div>
  );
}

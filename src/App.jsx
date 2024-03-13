// components
import { useEffect, useState } from "react";
import ExchangeInfo from "./components/infoBox/ExchangeInfo";
import ImpactIndexTable from "./components/table/ImpactIndexTable";
import SelectedIndicatorTable from "./components/table/SelectedIndicatorTable";
import TransactionSymbolTable from "./components/table/TransactionSymbolTable";
import { HttpService } from "./services/apiService";

const urls = ["/selectedIndicator", "/transactionSymbol", "/impactIndexTable"];

export default function App() {
  const [selectedIndicators, setSelectedIndicators] = useState([]);
  const [transactionSymbol, setTransactionSymbol] = useState([]);
  const [impactIndex, setImpactIndex] = useState([]);

  useEffect(() => {
    Promise.all(urls.map((url) => HttpService.get(url)))
      .then((results) => {
        setSelectedIndicators(results[0].data);
        setTransactionSymbol(results[1].data);
        setImpactIndex(results[2].data);
      })
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className="app-container">
      <section className="exchange-section">
        <ExchangeInfo />
        <SelectedIndicatorTable items={selectedIndicators} />
        <TransactionSymbolTable items={transactionSymbol} />
        <ImpactIndexTable items={impactIndex} />
      </section>
    </div>
  );
}

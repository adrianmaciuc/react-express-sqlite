import "./App.css";
import HeroSection from "./components/HeroSection";
import CardsList from "./components/CardsList";
import { useEffect, useState } from "react";
import AddEntryForm from "./components/Form";
import { fetchDataFromAPI } from "./api/apidata";
import { CardInterface } from "./components/types";

function App() {
  const [data, setData] = useState<CardInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddEntry = (newEntry: CardInterface) => {
    setData([...data, newEntry]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const apiData = await fetchDataFromAPI();
      setData(apiData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <section id="card-section">
        <div className="cs-container">
          <HeroSection />
          <section id="contact-984">
            <AddEntryForm onAddEntry={handleAddEntry} />
          </section>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ul className="cs-card-group list-group">
              <CardsList cards={data} />
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

export default App;

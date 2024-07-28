import "./App.css";
import HeroSection from "./components/HeroSection";
// import Card from "./components/Card";
import CardsList from "./components/CardsList";

function App() {
  function getCards() {
    return [
      {
        id: 2,
        developer: "Zack Galaga",
        QA: "Adi Meronunia Lacruz",
        manager: "Murino Outer",
        task: "11",
        teamName: "Mambo",
      },
      {
        id: 3,
        developer: "Zack Galaga",
        QA: "Adi Meronunia Lacruz",
        manager: "Murino Outer",
        task: "11",
        teamName: "Mambo",
      },
      {
        id: 10,
        developer: "Zack Galaga",
        QA: "Adi Meronunia Lacruz",
        manager: "Murino Outer",
        task: "11",
        teamName: "Mambo",
      },
      {
        id: 22,
        developer: "Zack Galaga",
        QA: "Adi Meronunia Lacruz",
        manager: "Murino Outer",
        task: "11",
        teamName: "Mambo",
      },
    ];
  }

  return (
    <>
      <section id="card-section">
        <div className="cs-container">
          <HeroSection />
          <ul className="cs-card-group list-group">
            <CardsList cards={getCards()} />
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;

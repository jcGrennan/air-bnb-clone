// importing all the components and also the data file for the card info.
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {

  // using the map method to map the data of the individual experiences into card components held within a variable 'cards'
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
          />
      )
  })        

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;

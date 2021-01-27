import { Header, Footer } from './components/common';
import Hero from './components/Hero';
import Card from './components/homeMenu/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card image="http://img3.wikia.nocookie.net/__cb20131012080921/starwars/images/8/80/X-wing_Fathead.png" alt="an xwing" text="this is test" type="SQUADRONS" />
      <Footer />
    </div>
  );
}

export default App;

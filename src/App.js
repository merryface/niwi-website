import { Header, Footer } from './components/common';
import Hero from './components/Hero';
import HomeMenu from './components/homeMenu/HomeMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HomeMenu />
      <Footer />
    </div>
  );
}

export default App;

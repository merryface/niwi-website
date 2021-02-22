import { Header, Footer } from './components/common';
import Categories from './components/videoPage/Categories';
import VideoPlayer from './components/videoPage/VideoPlayer';
import Videos from './components/pages/Videos';



function App() {
  return (
    <div className="App">

      <Header />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;

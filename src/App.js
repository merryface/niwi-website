import { Header, Footer } from './components/common';
import Categories from './components/videoPage/Categories';
import VideoPlayer from './components/videoPage/VideoPlayer';



function App() {
  return (
    <div className="App">

      <Header />
      <Categories />
      <VideoPlayer />
      <Footer />
    </div>
  );
}

export default App;

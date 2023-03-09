import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Caraousal from './components/caraousal/Caraousal';
import BlueBg from './components/blueBg/BlueBg';
import Strategy from './components/strategicEngineering/Strategy';
import Darkbg from './components/darkBgPost/Darkbg';
import Solution from './components/solution/Solution';
import Newsblogs from './components/blogs/Newsblogs';

function App() {
  return (
    <div>
    <Header />
      <main>
        <Caraousal />
        <BlueBg/>
        <Strategy/>
        <Darkbg/>
        <Solution/>
        <Newsblogs/>
      </main>
     <Footer />
    </div>
  );
}

export default App;

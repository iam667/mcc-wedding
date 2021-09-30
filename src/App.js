import logo from './logo.svg';
import Nav from './components/Nav';
import DetailsBox from './components/DetailsBox';
import Intro from './components/Intro';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Nav />
        <DetailsBox />
      </header>
      <Intro />
    </div>
  );
}

export default App;


import './App.css';

import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import SearchBar from './components/SearchBar';
import PopularCat from './components/PopularCat';
import SearchAddedTree from './components/subcomponents/SearchAddedTree';
function App() {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <SearchAddedTree />
        <PopularCat />
      </Container>
    </>
  );
}

export default App;

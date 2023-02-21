
import './App.css';

import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import SearchBar from './components/SearchBar';
import SkillsList from './components/SkillsList';
import PopularCat from './components/PopularCat';

function App() {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <SkillsList />
        <PopularCat />
      </Container>
    </>
  );
}

export default App;


import './App.css';

import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import SearchBar from './components/SearchBar';
import SkillsList from './components/SkillsList';
import PopularCat from './components/PopularCat';
import AddedSkillArea from './components/AddedSkillArea';

function App() {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <AddedSkillArea/>
        <SkillsList />
        <PopularCat />
      </Container>
    </>
  );
}

export default App;

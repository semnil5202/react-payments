import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import AddCard from './pages/AddCard';
import { CardType } from './types/Card';
import { getLoacalStorage, setLocalStorage } from './utils/setLocalStorge';

const initCards = () => {
  const localStorageCards = getLoacalStorage('cards');
  if (localStorageCards) return localStorageCards;
  return [];
};

function App() {
  const [cards, setCards] = useState<CardType[] | []>(initCards());

  useEffect(() => {
    setLocalStorage('cards', cards);
  }, [cards]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home cards={cards} />}></Route>
        <Route
          path="/add-card"
          element={<AddCard cards={cards} setCards={setCards} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

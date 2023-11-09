import { Route, Routes } from 'react-router';
import { Catalog } from '../pages/Catalog/Catalog';
import { Favorites } from '../pages/Favorites/Favorites';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

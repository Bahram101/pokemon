import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Favorite } from './pages/Favorite';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/favorite' element={<Favorite />} /> 
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewSubject from './pages/NewSubject';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='create' element={<NewSubject />} />
      </Route>
    </Routes>
  );
}

export default App;

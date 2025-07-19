import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import ListEmployee from './components/Pages/ListEmployees/ListEmployee';
import Edit from './components/Pages/Action/Edit';
import Add from './components/Add employee/Add';
import Header from './components/Header';
import Notfound from './components/Pages/NotFound'
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_employee" element={<Add />}/>
        <Route path="/employee" element={<ListEmployee />} />
        <Route path="/edit_employee/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

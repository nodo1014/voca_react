import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import Header from './component/Header';
// import Hello from './component/Hello';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}/>
          <Route path="/day/:day" element={<Day/>}/>
          <Route path="/create_word" element={<CreateWord/>}/>
          <Route path="/create_day" element={<CreateDay/>}/>
          <Route path="*"  element={<EmptyPage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
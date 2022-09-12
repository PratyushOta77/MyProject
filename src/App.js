import './App.css';
import { Routes, Route } from 'react-router-dom'
import Topbar from '../src/NavBars/TopBar'
import Sidebar from '../src/NavBars/Sidebar';
import Place from './Pages/Place/Place'
import Form from './Pages/Form/Form';
import Weather from './Pages/Weather/Weather';
// import Configuration from './Component/Pages/Configuration/Configuration';

function App() {
  return (
    <div>
      <Routes>

        <Route exact path='/' element={
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Place></Place>
            </div>
          </>} />

        <Route exact path='/place' element={
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Place></Place>
            </div>
          </>} />

          <Route exact path='/form' element={
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Form></Form>
            </div>
          </>} />

          <Route exact path='/weather' element={
          <>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Weather></Weather>
            </div>
          </>} />

      </Routes>
    </div>
  );
}

export default App;

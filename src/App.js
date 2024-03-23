
import './App.css';
import Header from './components/Header';

import Store from './components/store/Store';
import { Provider } from 'react-redux'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <Provider store={Store}>

      <div className="App">
        <Header />
        <Outlet />

      </div>
    </Provider>
  );
}

export default App;

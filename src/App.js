import React  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <div>
          <Navbar/>
          <Search/>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;

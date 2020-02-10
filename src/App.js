import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import News from './components/Profile/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>

          <Route exact path="/profile" render={() => <Profile/> } />

          <Route exact path="/news" render={() => <News />} />
        </div>
      </div>
  );
}

export default App;

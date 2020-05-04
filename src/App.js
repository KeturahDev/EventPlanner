import React from 'react';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = props => {
  return(
    <React.Fragment>
      <Header />
      <MainPage />
      <Footer />
    </React.Fragment>
  )
}

export default App;
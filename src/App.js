import React, { useState } from 'react';
import MainPage from './Components/MainPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import EventDetails from './Components/EventDetails';
import NewEventForm from './Components/NewEventForm';

function App(props) {

  const [currentPage, setPage] = useState('MainPage');
  
  function setVisibility() {
    if(currentPage === 'MainPage') {
      return {component: <MainPage handleChangeViewClick={setPage}/>}
    } else if (currentPage === 'NewEventForm'){
      return {component: <NewEventForm handleBackToMainPage={setPage} />}
    } else if (currentPage === "EventDetails") {
      return {component: <EventDetails handleBackToMainPage={setPage}/>}
    }
  }

  const currentlyVisible = setVisibility();
  return (
    <React.Fragment>
    <Header />
    {currentlyVisible.component}
    <Footer />
    </React.Fragment>
  )
}



export default App;
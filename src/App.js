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
      return {component: <MainPage handleAddEventClick={setPage}/>}
    } else if (currentPage === 'NewEventForm'){
      return {component: <NewEventForm />}
    } else if (currentPage === "EventDetails") {
      return {component: <EventDetails />}
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
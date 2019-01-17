import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar/calendar.jsx'
import Mainbox from './components/mainbox/mainbox.jsx'
import Legend from './components/calendar/legend.jsx'
import Logo from "./components/logo.jsx";
import Date from "./components/date.jsx";
import CalendarHeader from "./components/calendar/calendarheader.jsx";
import Footer from "./components/footer.jsx";

class App extends React.Component {
    render() {
        return <div className='main-div'>
            <div className='header-items'>
                <Logo/>
                <Date/>git
            </div>

            <Mainbox/>
            <br/>
            <CalendarHeader/>
            <Calendar/>
            <br/>
            <Legend/>
            <Footer/>
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
    console.log("Cześć! Mam na imię Karolina, a to jest mój profil na LinkedIn: https://www.linkedin.com/in/karolina-adamiuk/")
});
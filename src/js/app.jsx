import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar/calendar.jsx'
import Mainbox from './components/mainbox/mainbox.jsx'
import Legend from './components/calendar/legend.jsx'
import Logo from "./components/logo.jsx";
import Date from "./components/date.jsx";
import CalendarHeader from "./components/calendar/calendarheader.jsx";
class App extends React.Component {
    render() {
        return <div>
            <div className='header-items'>
                <Logo/>
                <Date/>
            </div>

            <Mainbox/>
            <br/>
            <CalendarHeader/>
            <Calendar/>
            <br/>
            <Legend/>

        </div>
    }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
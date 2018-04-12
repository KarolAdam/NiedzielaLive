import React from "react";
import moment from "moment/moment";
import MonthlyCalendar from './monthlycalendar.jsx'

export default class Calendar extends React.Component {
    render() {
        return <div className='calendar'>
            <MonthlyCalendar date={moment()}/>
            <MonthlyCalendar date={moment().add(1,'month')}/>
            <MonthlyCalendar date={moment().add(2,'month')}/>
            <MonthlyCalendar date={moment().add(3,'month')}/>
            <MonthlyCalendar date={moment().add(4,'month')}/>
            <MonthlyCalendar date={moment().add(5,'month')}/>

        </div>
    }
}
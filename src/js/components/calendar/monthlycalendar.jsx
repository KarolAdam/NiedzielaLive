import React from 'react';
import DayNames from './daynames.jsx';
import Week from './week.jsx';
import 'moment/locale/pl'

export default class MonthlyCalendar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            month: this.props.date.clone()
        };
    }
    render() {
        return <div className='month'>
            <div className="header">
                {this.renderMonthLabel()}
            </div>
            <DayNames />
            {this.renderWeeks()}
        </div>;
    }

    renderWeeks() {
        let weeks = [],
            done = false,
            date = this.state.month.clone().startOf("month").add("w" -1).weekday(0),
            monthIndex = date.month(),
            count = 0;
        while (!done) {
            weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month}/>);
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    }
    renderMonthLabel() {
        return <span>{this.state.month.format("MMMM, YYYY")}</span>;

    }
};

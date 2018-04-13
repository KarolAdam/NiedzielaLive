import React from "react";
import moment from "moment/moment";

export default class NextSundayQuestion extends React.Component {
    render() {

        let thisSunday = moment().isoWeekday(7).format('YYYY-MM-DD');
        let currentDate = moment().format('YYYY-MM-DD');
        let closestSaturday = moment().isoWeekday(6).format('YYYY-MM-DD')
        if (currentDate===thisSunday) {
            return <h1 className='next-sunday-question'>A za tydzień?</h1>
        }
        else if (closestSaturday===currentDate){
            return <h1 className='next-sunday-question'>A w następną niedzielę?</h1>
        }
        else {
            return <h1 className='next-sunday-question'>A w następną?</h1>
        }
    }
}
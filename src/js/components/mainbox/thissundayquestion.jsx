import React from "react";
import moment from 'moment';


export default class ThisSundayQuestion extends React.Component {
    render() {
        let thisSunday = moment().isoWeekday(7).format('YYYY-MM-DD');
        let currentDate = moment().format('YYYY-MM-DD');
        let closestSaturday = moment().isoWeekday(6).format('YYYY-MM-DD')
        if (currentDate===thisSunday) {
            return <h1 className='this-sunday-question'>Czy dziś zrobię zakupy?</h1>
        }
        else if (closestSaturday===currentDate){
            return <h1 className='this-sunday-question'>Czy jutro zrobię zakupy?</h1>
        }
        else {
            return <h1 className='this-sunday-question'>Czy w najbliższą niedzielę zrobię zakupy?</h1>
        }
    }
}
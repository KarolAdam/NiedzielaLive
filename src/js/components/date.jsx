import React from "react";
import moment from 'moment';
import 'moment/locale/pl'


export default class Date extends React.Component {
    render() {
        return <div className='date'>{moment().format('LLLL')}</div>
    }
}
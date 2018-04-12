import React from "react";
import NextSundayQuestion from './nextsundayq.jsx'
import NextSundayAnswer from './nextsundayanswer.jsx'

export default class NextSunday extends React.Component {
    render() {
        return <div className='next-sunday'>
            <NextSundayQuestion/>
            <NextSundayAnswer/>
        </div>
    }
}
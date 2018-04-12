import React from "react";
import ThisSundayQuestion from './thissundayquestion.jsx'
import ThisSundayAnswer from './thissundayanswer.jsx'

export default class ThisSunday extends React.Component {
    render() {
        return <div className='this-sunday'>
                <ThisSundayQuestion/>
                <ThisSundayAnswer/>
        </div>
    }
}
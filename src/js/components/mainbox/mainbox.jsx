import React from "react";
import ThisSunday from './thissunday.jsx'
import NextSunday from './nextsunday.jsx'


export default class Mainbox extends React.Component {
    render() {
        return <div className='mainbox'>
                <ThisSunday/>
                <NextSunday/>
            </div>
    }
}
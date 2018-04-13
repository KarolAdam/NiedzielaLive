import React from "react";
import moment from 'moment';
import 'moment/locale/pl'


export default class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: moment().format('ss'),
        }
    }
    componentDidMount() {
        this.intevalId = setInterval(e => this.setState ({time:moment().format('ss')}),1000);

    }
    componentWillUnmount() {
        clearInterval(this.intevalId)
    }
    render() {
        return <div className='date'>{moment().format('LLLL')}:{this.state.time}</div>
    }
}
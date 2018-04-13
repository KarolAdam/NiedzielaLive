import React from "react";
import moment from 'moment';
import 'moment/locale/pl'


export default class Date extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: moment().format('LTS'),
        }
    }
    componentDidMount() {
        this.intevalId = setInterval(e => this.setState ({time:moment().format('LTS')}),1000);

    }
    componentWillUnmount() {
        clearInterval(this.intevalId)
    }
    render() {
        return <div className='date'>{moment().format('dddd')}, {moment().format("MMM Do YYYY")}, {this.state.time}</div>
    }
}
import React from 'react';
import moment from 'moment';
import 'moment/locale/pl'
import holidays from '../../data/holidays.json';

export default class NextSundayAnswer extends React.Component {
    render() {
        let nextSundayAns = 'NIE';
        let nextAnswerStyle = 'answer-closed'
        const nextSunday = moment().add(1, 'weeks').isoWeekday(7).format('YYYY-MM-DD');
        holidays.forEach(function (el) {
            if (el.DATE==nextSunday&&el.SHOPS_OPEN) {
                nextSundayAns = 'TAK';
                nextAnswerStyle = 'answer-open'
            }
        })
        return <div className={'next-sunday-answer ' + nextAnswerStyle}> <span>{nextSundayAns}</span> </div>
    }
}
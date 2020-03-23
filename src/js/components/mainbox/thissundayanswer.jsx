import React from "react";
import moment from "moment";
import "moment/locale/pl";
import holidays from "../../data/holidays.json";

export default class ThisSundayAnswer extends React.Component {
  render() {
    let thisSundayAns = "NIE, i dobrze! #zostańwdomu";
    let thisAnswerStyle = "answer-closed";
    const closestSunday = moment()
      .isoWeekday(7)
      .format("YYYY-MM-DD");
    holidays.forEach(function(el) {
      if (el.DATE == closestSunday && el.SHOPS_OPEN) {
        thisSundayAns = "TAK, ale lepiej #zostańwdomu";
        thisAnswerStyle = "answer-open";
      }
    });

    return (
      <div className={"this-sunday-answer " + thisAnswerStyle}>
        {" "}
        {thisSundayAns}{" "}
      </div>
    );
  }
}

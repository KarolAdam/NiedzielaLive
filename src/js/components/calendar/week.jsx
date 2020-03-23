import React from "react";
import moment from "moment";
import holidays from "../../data/holidays.json";

export default class Week extends React.Component {
  render() {
    let days = [],
      date = this.props.date,
      month = this.props.month;
    let example = {
      DATE: "2018-04-01",
      SHOPS_OPEN: false,
      DAY: "SUNDAY_NOSHOPS",
      WEEKDAY: 7
    };
    for (let i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };
      const id = moment(date).format("YYYY-MM-DD");
      let style = "";
      holidays.forEach(function(el) {
        if (el.DATE === id && !el.SHOPS_OPEN) {
          style = " closed";
        }
      });

      days.push(
        <span
          key={day.date.toString()}
          className={
            "day" +
            (day.isToday ? " today" : "") +
            (day.isCurrentMonth ? "" : " different-month") +
            style
          }
        >
          {day.number}
        </span>
      );

      date = date.clone();
      date.add(1, "d");
    }

    return (
      <div className="week" key={days[0].toString()}>
        {days}
      </div>
    );
  }
}

// if jesli shopsopen false else

import React from "react";

class Day extends React.Component {
  render() {
    const { date, min, max, code, isToday, formatDay, getWeatherIcon } =
      this.props;

    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday | formatDay(date)}</p>
        <p>
          {Math.floor(min)} &deg; &mdash;{" "}
          <strong>{Math.ceil(max)} &deg;</strong>
        </p>
      </li>
    );
  }
}

export default Day;

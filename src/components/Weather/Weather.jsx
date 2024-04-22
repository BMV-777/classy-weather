import React from "react";

import { CircleFlag } from "react-circle-flags";

import Day from "./Day/Day";

class Weather extends React.Component {
  render() {
    console.log(this.props);
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    // return <div>Weather {this.props.location}</div>;
    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              min={min.at(i)}
              max={max.at(i)}
              code={codes.at(i)}
              key={date}
              isToday={i === 0}
              getWeatherIcon={this.props.getWeatherIcon}
              formatDay={this.props.formatDay}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
{
  /* <CircleFlag countryCode="es" height="35" />; */
}

// class Day extends React.Component {
//   render() {
//     const { date, min, max, code, formatDay, getWeatherIcon } = this.props;

//     return (
//       <li className="day">
//         <span>{getWeatherIcon(code)}</span>
//         <p>{formatDay(date)}</p>
//         <p>
//           {Math.floor(min)} &deg; &mdash; {Math.ceil(max)}
//         </p>
//       </li>
//     );
//   }
// }

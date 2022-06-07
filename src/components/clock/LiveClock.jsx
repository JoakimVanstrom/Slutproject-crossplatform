import React, { Component } from "react";
import AnalogClock from "ras-react-component";

const style = {
  numerals: "western_arabic",
  showMinuteScale: true,
  showHourScale: true,
  showNumbers: true,
  radialDirectionOfNumbers: false,
  colorOfScalesAndNumbers: `black`,
  hourHandColor: `#151515`,
  minuteHandColor: `black`,
  secondHandColor: `red`,
  firstCircleColor: `white`,
  secondCircleColor: `white`,
  thirdCircleColor: `white`,
  fourthCircleColor: `black`,
  centerDotColor: `black`,
  width: 300,
  numberSize: 150,
  iana: `Europe/Dublin`,
};

const LiveClock = () => {
  return (
    <div>
      <AnalogClock characteristics={style} />
    </div>
  );
};

export default LiveClock;

import AnalogClock from "ras-react-component";

const LiveClock = () => {
  const style = {
    numerals: "western_arabic",
    showMinuteScale: true,
    showHourScale: true,
    showNumbers: true,
    radialDirectionOfNumbers: false,
    colorOfScalesAndNumbers: `black`,
    hourHandColor: `#151515`,
    minuteHandColor: `black`,
    secondHandColor: `#6c3454`,
    firstCircleColor: `white`,
    secondCircleColor: `white`,
    thirdCircleColor: `white`,
    fourthCircleColor: `black`,
    centerDotColor: `black`,
    width: 300,
    numberSize: 80,
    iana: `Europe/Stockholm`,
  };

  return (
    <>
      <AnalogClock characteristics={style} />
    </>
  );
};

export default LiveClock;

import { useSelector } from "react-redux";
import { getGameClock } from "../redux/game";
import { getUsers } from "../redux/users";

// https://codepen.io/FlorinPop17/pen/YbpwyG
const convertToSeconds = (milliseconds) => milliseconds / 1000;

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#333"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

const GameClock = () => {
  const time = useSelector(getGameClock);

  const secondsRadius = mapNumber(convertToSeconds(time), 90, 0, 0, 360);

  return <div className="gameClock">{convertToSeconds(time)} seconds</div>;
  // return (
  //   <div className="countdown-wrapper">
  //     <div className="countdown-item">
  //       <SVGCircle radius={secondsRadius} />
  //       {convertToSeconds(time)}
  //       <span>seconds</span>
  //     </div>
  //   </div>
  // );
};

export default GameClock;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { newMessage } from "../redux/actions";
import Canvas from "./Canvas";
import CanvasInputs from "./CanvasInputs";
import Chat from "./Chat";
import { INITIAL_STROKE } from "../redux/stateConstants";
import PlayerList from "./PlayerList";

const GameView = () => {
  const [message, setMessage] = useState("");
  // Point state. Point represents an x and y coordinate
  const [point, setPoint] = useState({
    x: 0,
    y: 0,
  });

  // Stroke state. Stroke represents lineWidth and color
  const [stroke, setStroke] = useState(INITIAL_STROKE);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(newMessage(message));
    setMessage("");
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="card">
      <div className="card-header text-center">
        TODO: Header Component Goes Here
      </div>
      <div className="card-body p-0">
        <div className="row">
          <div className="col-sm col-md-2 text-center p-0">
            <PlayerList />
          </div>
          <div className="col-sm col-md-8 text-center p-0">
            <CanvasInputs
              stroke={stroke}
              setStroke={setStroke}
              point={point}
              setPoint={setPoint}
            />
            <Canvas
              stroke={stroke}
              setStroke={setStroke}
              point={point}
              setPoint={setPoint}
            />
          </div>
          <div className="col-sm col-md-2 p-0">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameView;

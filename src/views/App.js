import { useSelector } from "react-redux";
import JoinChat from "../components/JoinChat";
import { getPlayer } from "../redux/player";
import GameView from "../components/GameView";
import Loading from "../components/Loading";
import { getGameState } from "../redux/game";
import { GAME_STATE } from "../redux/stateConstants";

const App = () => {
  const player = useSelector(getPlayer);
  const gameState = useSelector(getGameState);

  if (player.hasOwnProperty("username")) {
    if (gameState === GAME_STATE.GAME_WAITING) {
      return <Loading msg={"Waiting for another player to Join..."} />;
    } else {
      return <GameView />;
    }
  }
  return <JoinChat />;
};

export default App;

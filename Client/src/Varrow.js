import "./styles/varrow.css";
import { useHistory } from "react-router-dom";

const Varrow = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `newPath`;
    history.push(path);
  };

  return (
    <div className="arrowDiv" onClick={routeChange}>
      <div className="arrow">╲╱</div>
    </div>
  );
};

export default Varrow;

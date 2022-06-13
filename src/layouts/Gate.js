import { useNavigate } from "react-router-dom";
import App from "./App";

const Gate = () => {
  const navigate = useNavigate();

  return <div onClick={() => navigate("/main")}>썸네일</div>;
};

export default Gate;

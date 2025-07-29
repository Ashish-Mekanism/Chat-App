import Rightside from "../RightSide/Rightside";
import Sidebar from "../Sidebar/Sidebar";
import { MainContainer } from "./ChatStyle";

const Chat = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Rightside />
    </MainContainer>
  );
};

export default Chat;

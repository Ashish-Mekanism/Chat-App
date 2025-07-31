import MessageArea from "../MessageArea/MessageArea";
import Sidebar from "../Sidebar/Sidebar";
import { MainContainer } from "./ChatStyle";

const Chat = () => {
  return (
    <MainContainer>
      <Sidebar />
      <MessageArea />
    </MainContainer>
  );
};

export default Chat;

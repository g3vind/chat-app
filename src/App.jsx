import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./index.css";

function App() {
  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="c81fa954-f6ca-42fc-ad53-86a2ec73b8a3"
        userName="abhi"
        userSecret="123456"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  );
}

export default App;

import Messages from "./Messages";
import MessageForm from "./MessageForm";

const Chat = () => {
  return (
    <div className="card" id="chatCard">
      <div className="card-header text-center">Chat</div>
      <div className="card-body p-0">
        <Messages />
      </div>
      <div className="card-footer">
        <MessageForm />
      </div>
    </div>
  );
};

export default Chat;

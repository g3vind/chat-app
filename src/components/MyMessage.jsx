import React from "react";

function MyMessage({ message }) {
  // if the msg is an image this will return true
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "black",
        border: "2px solid black",
        backgroundColor: "#0073cf",
      }}
    >
      {message.text}
    </div>
  );
}

export default MyMessage;

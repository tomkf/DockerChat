import React, { Component } from "react";
import Message from "./Comment";

class MessageList extends React.Component {
  render() {
    const displaymessages = this.props.messages.map(message => (
      <Message name={message.name} content={message.content} date={date} />
    ));
    return <main className="messages">{displaymessages}</main>;
  }
}

export default MessageList;

import React, { Component } from "react";

class ChatBar extends Component {
  handleOnKeyDown = event => {
    if (event.key === "Enter" || event.key === "Tab") {
      if (event.target.value === "") {
        this.props.currentUser;
      } else {
        this.props.sendUpdateUsername(event.target.value);
      }
    }
  };
  onKeyDown = event => {
    if (event.key === "Enter") {
      const newMessage = event.target.value;
      this.props.addNewMessage(newMessage);

      event.target.value = "";
    }
  };

  render() {
    return (
      <div className="chatbar">
        <h1>Leave a Comment</h1>
        <form>
          <div>
            <h1>Your name</h1>
            <input className="chatbar-username" />
          </div>
          <div>
            <h1>Your email</h1>
            <input className="chatbar-email" />
          </div>
          <div>
            <h1>Your message</h1>
            <textarea className="chatbar-text" />
          </div>
          <br />
          <button className="chatbar-button">Submit comment</button>
        </form>
      </div>
    );
  }
}

export default ChatBar;

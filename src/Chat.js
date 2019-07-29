import React from "react";

const convertDate = dateTarget => {
  const months = [
    "January",
    "Feubuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let formatted_date =
    dateTarget.getDate() +
    " " +
    months[dateTarget.getMonth()] +
    " " +
    dateTarget.getFullYear();
  return formatted_date;
};

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      content: "",
      date: convertDate(new Date()),
      messages: []
    };
  }

  render() {
    return (

        <div className="messages">
    {this.state.messages.map(message => {
        return (
            <div> {message.date} By {message.name} {message.content}</div>
        )
    })}
</div>


      <div className="chatbar">
        <h1>Leave a Comment</h1>
        <form>
          <div>
            <h1>Your name</h1>
            <input
              className="form-control"
              value={this.state.name}
              onChange={ev => this.setState({ name: ev.target.value })}
            />
          </div>
          <div>
            <h1>Your email</h1>
            <input
              className="form-control"
              value={this.state.email}
              onChange={ev => this.setState({ email: ev.target.value })}
            />
          </div>
          <div>
            <h1>Your message</h1>
            <textarea
              className="form-control"
              value={this.state.conent}
              onChange={ev => this.setState({ content: ev.target.value })}
            />
          </div>
          <br />
          <button className="form-control">Submit comment</button>
        </form>
      </div>
    );
  }
}

export default Chat;

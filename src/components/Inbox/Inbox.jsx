import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Inbox = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <Message user="admin" />
        <Message user="me" />
        <Message user="me" />
        <Message user="admin" />
        <Message user="admin" />
      </div>
      <div className="mt-10 border-t py-5">
        <h4 className="mb-5">Write Your Message</h4>
        <SendMessage />
      </div>
    </div>
  );
};

export default Inbox;

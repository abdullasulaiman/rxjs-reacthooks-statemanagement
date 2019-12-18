import React, { useState, useLayoutEffect } from "react";
import chatStore from '../store/chat';

const FirstPerson = () => {

  useLayoutEffect(() => {
      chatStore.subscribe(setChatState);
      chatStore.init();
  }, [])

  const onFormSubmit = e => {
    e.preventDefault();
    const messageObject = {
      person: 'first-person',
      text: e.target.elements.messageInput.value.trim(),
    };
    chatStore.sendMessage(messageObject);
    document.getElementById('messageForm').reset();
  };

  const [chatState, setChatState] = useState(chatStore.initialState);
  return (
    <div className="container">
      <h2>Person 1</h2>
      <div className="chat-box">
        {chatState.data.map((message, index) => (
          <div key={index}>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  );
};

export default FirstPerson;

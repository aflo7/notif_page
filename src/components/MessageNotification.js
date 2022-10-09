import React from "react"
import "../Notification.css"

// props: message, author, time, read = false
function MessageNotification({ element }) {
  return (
    <div
      className="individual-notification"
      style={{ backgroundColor: element.read ? "white" : "lightgray" }}
    >
      <div className="pfp-wrapper">
        <img src={require(`../assets/images/${element.imgSrc}`)} alt="none" />
      </div>
      <div>
        <div>
          <strong>{element.author}</strong> sent you a private message
        </div>
        <div style={{ color: "gray" }}>{element.time}</div>
        <div className="msg-inner-wrapper">{element.message}</div>
      </div>
    </div>
  )
}

export default MessageNotification

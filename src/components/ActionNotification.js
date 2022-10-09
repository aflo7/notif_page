import React from "react"
import "../Notification.css"

// props: action, time, read = false
function ActionNotification({ element }) {
  return (
    <div
      className="individual-notification"
      style={{ backgroundColor: element.read ? "white" : "lightgray" }}
    >
      <div  className="pfp-wrapper">
        <img src={require(`../assets/images/${element.imgSrc}`)} alt="none" />
      </div>
      <div>
        <div>{element.action}</div>
        <div style={{ color: "gray" }}>{element.time}</div>
      </div>
    </div>
  )
}

export default ActionNotification

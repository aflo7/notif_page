// import logo from './logo.svg';
import "./App.css"
import { useState, useEffect } from "react"
import ActionNotification from "./components/ActionNotification"
import MessageNotification from "./components/MessageNotification"
class Message {
  constructor(imgSrc, message, author, time, read = false) {
    this.imgSrc = imgSrc
    this.message = message
    this.author = author
    this.time = time
    this.read = read
  }
  markAsRead() {
    this.read = true
  }
}

class Action {
  constructor(imgSrc, action, time, read = false) {
    this.imgSrc = imgSrc
    this.action = action
    this.time = time
    this.read = read
  }
  markAsRead() {
    this.read = true
  }
}

function App() {
  const [notif, setNotif] = useState([])
  const [unread, setUnread] = useState(0)
  useEffect(() => {
    let a1 = new Action(
      "avatar-mark-webber.jpg",
      "Mark Webber reacted to your recent post My first tournament today!",
      "1m ago",
      false
    )
    let a2 = new Action("avatar-angela-gray.jpg", "Angela Gray followed you", "5m ago", false)
    let a3 = new Action(
      "avatar-jacob-thompson.jpg",
      "Jacob Thompson has joined your group Chess Club",
      "1 day ago",
      false
    )

    let m1 = new Message(
      "avatar-rizky-hasanuddin.jpg",
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      "Rizky Hasanuddin",
      "5 days ago",
      false
    )

    let a4 = new Action(
      "avatar-kimberly-smith.jpg",
      "Kimberly Smith commented on your picture",
      "1 week ago",
      false
    )
    let a5 = new Action(
      "avatar-nathan-peterson.jpg",
      "Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate",
      "2 weeks ago",
      false
    )
    let a6 = new Action(
      "avatar-anna-kim.jpg",
      "Anna Kim left the group Chess Club",
      "2 weeks ago",
      false
    )

    setNotif([a1, a2, a3, m1, a4, a5, a6])
  }, [])

  useEffect(() => {
    let unreadCount = 0
    for (let i = 0; i < notif.length; i++) {
      if (!notif[i].read) {
        unreadCount += 1
      }
    }
    setUnread(unreadCount)
  }, [notif])

  function markAllAsRead() {
    setNotif(
      notif.map((item) => {
        item.markAsRead()
        return item
      })
    )
  }

  return (
    <div className="App">
      <div className="header">
        <div className="notif-header">
          <div><strong>Notifications</strong> &nbsp;</div>
          <div className="unread-box">{unread}</div>
        </div>
        <div className="mark-all" onClick={markAllAsRead}>
          Mark all as read
        </div>
      </div>
      <div className="notif-wrapper">
        {notif.map((element, i) => {
          if (element.constructor.name === "Action") {
            return <ActionNotification element={element} key={i} />
          } else if (element.constructor.name === "Message") {
            return <MessageNotification element={element} key={i} />
          }
          return null
        })}
      </div>
    </div>
  )
}

export default App

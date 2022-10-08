// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

class Message {
  constructor(message, author, time, read=false) {
    this.message = message;
    this.author = author;
    this.time = time
    this.read = read
  }
  changeState() {
    this.read = !this.read
  }

}

class Action {
  constructor(action, time, read=false) {

    this.action = action
    this.time = time
    this.read = read
  }

}

function App() {
  const [notif, setNotif] = useState([])
  useEffect(() => {
  let a1 = new Action('Mark Webber reacted to your recent post My first tournament today!', '1m ago')
  let a2 = new Action('Angela Gray followed you', '5m ago')
  let a3 = new Action('Jacob Thompson has joined your group Chess Club', '1 day ago')

  let m1 = new Message("Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.", 'Rizky Hasanuddin', '5 days ago')

  let a4 = new Action("Kimberly Smith commented on your picture", "1 week ago")
  let a5 = new Action("Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate", "2 weeks ago")
  let a6 = new Action('Anna Kim left the group Chess Club', '2 weeks ago')

  setNotif([a1, a2, a3, m1, a4, a5, a6])
  }, [])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;

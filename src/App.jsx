import './App.css'
import Kanban from './components/Kanban'
import Todo from './components/Todo'
import Popup from './components/Popup';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }


  return (
    <>
      <Counter />
      <Kanban />
      <div className='add-task'>
        <input type="text" placeholder="Neuer Task..." onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowPopup(true)}>Add Task</button>
      </div>
      <Todo togglePopup={togglePopup} task="Müll rausbringen" />
      <Todo togglePopup={togglePopup} task="Mit Hund rausgehen" />
      <Todo togglePopup={togglePopup} task="Einkaufen" />
      <Todo togglePopup={togglePopup} task="Rechnung bezahlen" />
      {showPopup && <Popup closePopup={closePopup} question="Möchten Sie diesen Task löschen?" />}
    </>
  );
}

export default App
import './App.css'
import Kanban from './components/Kanban'
import Todo from './components/Todo'
import Popup from './components/Popup';


function App() {
  return (
    <>
      <Kanban />
      <div className='add-task'>
        <input type="text" placeholder="Neuer Task..." onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add Task</button>
      </div>
      <Todo task="Müll rausbringen" />
      <Todo task="Mit Hund rausgehen" />
      <Todo task="Einkaufen" />
      <Todo task="Rechnung bezahlen" />
      <Popup question="Möchten Sie diesen Task löschen?" />
    </>
  );
}

export default App
import React, { useState, useEffect } from 'react'
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');

  //when the app loads, we need to listen the db and fetch new todos as tehy get added/removed

  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])



  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({     //adds to the db, don't need to use setTodo here anymore
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <form>
        <FormControl>
          <InputLabel>Write Todo</InputLabel>
          <Input type='text'  value={input} onChange={(e)=>setInput(e.target.value)}/>

        </FormControl>
        <Button variant="contained" color="primary"disabled={!input} type='submit' onClick={addTodo}>Add todo</Button>

        
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import { List, ListItem, ListItemText, Button, Modal} from '@material-ui/core'
import './Todo.css'
import db from './firebase';
import {makeStyles} from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            background: 'lightgrey',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2,4,3),
        },
    }))

function Todo(props) {

    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('')

    const handleOpen = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        //update input with new input
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false)
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
            >    
            <div className={classes.paper}>
                <h1>modal</h1>
                <input placeholde={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className='todo__list'>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary='Dummy deadline' />
            </ListItem>
            <EditIcon onClick={e=> setOpen(true)} />
            <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo

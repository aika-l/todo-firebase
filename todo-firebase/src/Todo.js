import React from 'react'
import { List, ListItem, ListItemText} from '@material-ui/core'
import './Todo.css'

function Todo(props) {
    console.log(props)
    return (
        <List className='todo__list'>
            
            <ListItem>
                <ListItemText primary={props.text} secondary='Dummy deadline' />
            </ListItem>
        </List>
    )
}

export default Todo

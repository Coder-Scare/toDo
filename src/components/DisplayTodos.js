import React, { useState } from 'react'
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { addTodos, completeTodos, editTodos, removeTodos } from '../store/todoReducer';
import { AnimatePresence, motion } from 'framer-motion';


const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo:(obj) => dispatch(editTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
}

function DisplayTodos(props) {
    const [sort, setSort] = useState("active")
  return (
    <div className="displaytodos">
        <div className="buttons">
            <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={() =>setSort("active")}>Active
            </motion.button>
            <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={() =>setSort("completed")}>Completed</motion.button>
            <motion.button 
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             onClick={() =>setSort("all")}>All
            </motion.button>
        </div>
        <ul> 
           <AnimatePresence>
              {/* For active items */}
            {
                props.todo.manipulateTodo.length > 0 && sort === "active" ? 
                props.todo.manipulateTodo.map(item => {
                    return (
                        item.completed === false && (
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        /> 
                     )
                    );
                }) : null}   
                {/* For Completed Items */}
                {
                props.todo.manipulateTodo.length > 0 && sort === "completed" ? 
                props.todo.manipulateTodo.map(item => {
                    return (
                        item.completed === true && ( //change completed items boolean to true
                        <TodoItem 
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                     )
                    )
                }) : null}
                {/* For all items */}
                {
                props.todo.manipulateTodo.length > 0 && sort === "all" ? 
                props.todo.manipulateTodo.map(item => {
                    return (
                        <TodoItem // get rid of expression
                            key={item.id}
                            item={item}
                            removeTodo={props.removeTodo}
                            updateTodo={props.updateTodo}
                            completeTodo={props.completeTodo}
                        />
                    )
                }) : null}
           </AnimatePresence>
        </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
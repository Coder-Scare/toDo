import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addTodos } from '../store/todoReducer';
import { GoPlus } from "react-icons/go";
import { motion } from 'framer-motion';

let count = 0;

const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        // removeTodo: (id) => dispatch(removeTodos(id)),
        // updateTodo:(obj) => dispatch(editTodos(obj)),
        // completeTodo: (id) => dispatch(completeTodos(id)),
    };
}

// import { useSelector, useDispatch} from 'react-redux';

function Todo(props) {

    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
       setTodo(e.target.value);
    };

    const add = () => {
      if (todo === "") {
        alert("Input is Empty");
      }  else {
        props.addTodo({
            //here we will write object
            id: count++,
            content: todo,
            completed: false
        })
        setTodo("");
      }
    };

//  console.log("props from store", props);

  return (
    <div className='addTodos'>
        <input 
        type="text"
        onChange={(e) => handleChange(e)} 
        className="todo-input"
        value={ todo }
         />

        <motion.button 
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className="add-btn" onClick={() => add()}
         >
        <GoPlus/>
        </motion.button>
    <br />

      
    </div>
  );
}
// use connect method to connect Todo component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

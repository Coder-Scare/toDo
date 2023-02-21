import React, { useRef } from 'react'
import {FiEdit3} from "react-icons/fi" // installed and used react-icons
import {AiFillCheckSquare} from "react-icons/ai"
import {AiFillCloseSquare} from "react-icons/ai"
import { motion } from 'framer-motion'

function TodoItem(props) {
    const {item, updateTodo, removeTodo, completeTodo} = props;

    const inputRef = useRef(true);

    const changeFocus = () => {
        inputRef.current.disabled = false; // disabled makes this particular inputRef unusable until other conditions are met
        inputRef.current.focus(); // When initiated the item comes into focus
    };

    const updateEdit = (id, value, e) => {
        if(e.which === 13) {
            // 13 is the key code for the enter key on the keyboard
            updateTodo({id, item: value });
            inputRef.current.disabled = true;
        }
    }
  return (
    <motion.li 
        
        initial={{x:"150vw",
        transition: { type: "spring", duration: 2},
        }}

        animate={{x:0,
        transition: { type: "spring", duration: 2},
        }}

        whileHover={{
            scale: 0.9,
            transition: { type: "spring", duration: 0.15 }
        }}

        exit={{
            x: "-60vw",
            scale: [1, 0],
            transition: { duration: 0.15 },
            backgroundColor: "rgba(255,0,0,1)",
        }}
        
        key={item.id} className="card">
        <textarea
        ref={inputRef} 
        disabled={inputRef} 
        defaultValue={item.content} //??
        onKeyDown={(e) => updateEdit(item.id, inputRef.current.value, e)}
        />
    <div className="btns">
        <motion.button 
        whileHover={{scale:1.4}}
        whileTap={{scale: 0.9}} onClick={() => changeFocus()}
        >    
            <FiEdit3/>
        </motion.button> 
        {item.completed === false && (
        <motion.button 
            whileHover={{scale:1.4}}
            whileTap={{scale: 0.9}}
            style={{color:"green"}}
            onClick={() => completeTodo(item.id)}>
                <AiFillCheckSquare/>
        </motion.button> 
            )
        }
        <motion.button 
            whileHover={{scale:1.4}}
            whileTap={{scale: 0.9}}
            style={{color:"red"}}
            onClick={() => removeTodo(item.id)}
        >
            <AiFillCloseSquare/>
        </motion.button>{" "}
    </div>
    {item.completed && <span className='completed'>Completed</span>}
    </motion.li> // The list item has id and item content and the associated delete, edit and completed buttons
  )
}

export default TodoItem

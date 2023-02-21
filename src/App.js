import './css/main.css';
import DisplayTodos from './components/DisplayTodos';
import Todo from './components/Todo';
import { motion } from "framer-motion" //I used framer motion for animations as I was interested to what it was and how it worked

function App() {
  return (
    <div className='App'>
      {/* When editing press enter key to confirm your new entry */}
         <motion.h1 
         initial={{ y: -200 }}
         animate={{ y: 0 }}
         transition={{ type:"spring", duration: 0.5 }}
         whileHover={{scale: 1.1}}>Todo App</motion.h1>
         <span className='info'>(Press Enter when confirming your edits for new entries)</span>
         <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1}}
         >
          <Todo />
          <DisplayTodos />
         </motion.div>
      
    </div>
    
    
  );
}

export default App;

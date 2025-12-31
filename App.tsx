import React from 'react';
//import Counter from './components/Counter';
//import Modal from './components/Modal';
//import JobApplicationForm from './components/JobApplicationForm';
//import SingupWizard from './components/SingupWizard';
//import TodoApp from './components/TodoApp';
//import DataFetcher from './components/DataFetcher';
//import ShoppingCart from './components/ShoppingCart';
//import FormComponents from './components/FormComponents';
//imprt Student from './components/Student';
import { ThemeContext } from 'styled-components';

const App:React.FC = () => {
  const { theme, toggleTheme} = useTheme();

  return(
   
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff"}} >
    <h1>Current Theme: {theme}</h1>    
    <button onClick={toggleTheme}>Toggle Theme</button>
     {/* <Student /> */}
    
      {/*<FormComponents/>*/}
     {/* <ShoppingCart/>*/}
     {/* <DataFetcher/>*/}
      {/*<TodoApp/>*/}
     {/*<SingupWizard/> */}
      {/*<JobApplicationForm/>*/}
     {/* <Modal/>*/}
        {/* <Counter/> */}
    </div>
  )
}

export default App;
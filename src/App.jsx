import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import style from  './App.module.css'
import { useState } from 'react'
function App() {
  let [inputValue,setInputValue] = useState('');
  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  const buttonFunctionality = (e) => {
      let texty = e.target.innerText;
   
      if(texty === 'C'){
        texty = '';
        setInputValue(texty);
        
      }
      else if(texty === "=") {
          const result = eval(inputValue);
          setInputValue(result);
      }
    
      else{
      let ops = inputValue;
        ops+= texty;
        setInputValue(ops);
      }
   }
  return (
  <div  className = {style.calculator}>
      <Display handleInputValue = {inputValue} />
      <ButtonsContainer    buttonFunctionality = {(e) => buttonFunctionality(e)} buttonNames={buttonNames}/>
  </div>
  )
}

export default App

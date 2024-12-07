import style from './ButtonsContainer.module.css'

const ButtonsContainer = ({buttonFunctionality, buttonNames}) =>{

     
      return (
        <div className = {style.buttonsContainer}>
          {buttonNames.map(btn => (<button className= {style.button} onClick={buttonFunctionality}>{btn}</button>))}
      </div>
      )
}
export default ButtonsContainer;
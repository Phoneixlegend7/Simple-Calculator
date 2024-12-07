import style from './Display.module.css'

const Display = ({handleInputValue}) => {
  return  <input type="text" className={style.display} value={handleInputValue} readOnly/>
}

export default Display;
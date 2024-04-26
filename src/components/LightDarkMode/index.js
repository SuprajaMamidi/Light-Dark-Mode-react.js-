// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: false}
  onClickButton = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }
  render() {
    const {isLight} = this.state
    const buttonText = isLight ? 'Light Mode' : 'Dark Mode'
    const buttonClassName = isLight ? 'dark-mode' : 'light-mode'
    return (
      <div className="bg-container">
        <div className={`container ${buttonClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

import React from 'react'
import '../index.css';

export default class Buttons extends React.Component {

  state = {
    equation: '0'
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (event) => {
      {/*Digits*/}
      if(event.keyCode === 49){this.handleDigit('1')}
      if(event.keyCode === 50){this.handleDigit('2')}
      if(event.keyCode === 51){this.handleDigit('3')}
      if(event.keyCode === 52){this.handleDigit('4')}
      if(event.keyCode === 53 & event.shiftKey === false){this.handleDigit('5')}
      if(event.keyCode === 54){this.handleDigit('6')}
      if(event.keyCode === 55){this.handleDigit('7')}
      if(event.keyCode === 56 & event.shiftKey === false){this.handleDigit('8')}
      if(event.keyCode === 57){this.handleDigit('9')}
      if(event.keyCode === 48){this.handleDigit('0')}
      {/*Operators*/}
      if(event.keyCode === 8){this.handleClear()}
      if(event.keyCode === 73){this.handleInverse()}
      if(event.keyCode === 53 & event.shiftKey === true){this.handlePercent()}
      if(event.keyCode === 187){this.handleEquals()}
      if(event.keyCode === 190){this.handleDecimal()}
      if(event.keyCode === 187 & event.shiftKey === true){this.handleOperator('+')}
      if(event.keyCode === 189){this.handleOperator('-')}
      if(event.keyCode === 56 & event.shiftKey === true){this.handleOperator('*')}

  }

  handleDigit = (num) => (
    (this.state.equation === '0')
    ? this.setState({
        equation: num
      })
    : this.setState({
      equation: this.state.equation.concat(num)
    })
  )

  handleDecimal = () => (
    (this.state.equation.includes('.'))
    ? null
    : this.setState({
      equation: this.state.equation.concat('.')
    })
  )

  handleOperator = (op) => (
    (this.state.equation === '0' | this.state.equation[this.state.equation.length-1] === op)
    ? null
    : this.setState({
      equation: this.state.equation.concat(op)
    })
  )

  handleEquals = () => (
    this.setState({
      equation: (eval(this.state.equation)).toString()
    })
  )

  handleClear = () => (
    this.setState({
      equation: '0'
    })
  )

  handleInverse = () => {
    this.setState({
      equation: (this.state.equation *-1).toString()
    })
  }

  handlePercent = () => {
    this.setState({
      equation: (this.state.equation/100).toString()
    })
  }

  render () {
    return (
      <div className="wrapper">
        {/*Digits*/}
        <button className="one" onClick={() => this.handleDigit('1')} onKeyDown={() => this.handleDigit('1')}>1</button>
        <button className="two" onClick={() => this.handleDigit('2')}>2</button>
        <button className="three" onClick={() => this.handleDigit('3')}>3</button>
        <button className="four" onClick={() => this.handleDigit('4')}>4</button>
        <button className="five" onClick={() => this.handleDigit('5')}>5</button>
        <button className="six" onClick={() => this.handleDigit('6')}>6</button>
        <button className="seven" onClick={() => this.handleDigit('7')}>7</button>
        <button className="eight" onClick={() => this.handleDigit('8')}>8</button>
        <button className="nine" onClick={() => this.handleDigit('9')}>9</button>
        <button className="zero wide-btn" onClick={() => this.handleDigit('0')}>0</button>
        {/*Operators*/}
        <button className="decimal" onClick={() => this.handleDecimal('.')}>.</button>
        <button className="equals" onClick={this.handleEquals}>=</button>
        <button className="plus" onClick={() => this.handleOperator('+')}>+</button>
        <button className="minus" onClick={() => this.handleOperator('-')}>-</button>
        <button className="multiply" onClick={() => this.handleOperator('*')}>x</button>
        <button className="divide" onClick={() => this.handleOperator('/')}>/</button>
        <button className="percent" onClick={this.handlePercent}>%</button>
        <button className="inverse" onClick={this.handleInverse}>+/-</button>
        <button className="clear" onClick={this.handleClear}>AC</button>
        <div className="display">
          <p className="display-text">{this.state.equation}</p>
        </div>
      </div>
    )
  }
}
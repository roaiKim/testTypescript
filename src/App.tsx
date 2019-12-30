import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from "./react-typescrpt"

interface State {
  inputNumberValue: number;
}

class App extends React.PureComponent<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputNumberValue: 0
    }
  }

  onInputNumberChange = (inputNumberValue: number) => {
    this.setState({ inputNumberValue })
  }

  render() {
    const { inputNumberValue } = this.state;
    return <div className="App">
      <InputNumber value={inputNumberValue} onChange={this.onInputNumberChange} />
    </div>
  }
}

export default App;

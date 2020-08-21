import React, {Component} from 'react';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'localhost:8000';

class App extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    try {
      let res = await fetch(`${API_URL}/api/`);
      let todos = await res.json();
      this.setState({
        todos,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
        <div>
          {
            this.state.todos.map(i => (
                <div key={i.id}>
                  <h1>{i.title}</h1>
                  <h5>{i.description}</h5>
                </div>
            ))
          }
        </div>
    );
  }

}

export default App;

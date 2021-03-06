import React, { Component } from 'react';
import UserList from './UserList';
import { Map, List, Record } from 'immutable';

// user를 위한 Record 생성
const User = Record({
  id: null,
  username: null
});

// Data를 위한 Record
const Data = Record({
  input: '',
  users: List()
});

// use Record
class App extends Component {
  id = 3;

  state = {
    data: Data({
      users: List([
        User({
          id: 1,
          username: 'tae'
        }),
        User({
          id: 2,
          username: 'san'
        })
      ])
    })
  }

  onChange = (e) => {
    const { value } = e.target;
    const { data } = this.state;

    this.setState({
      data: data.set('input', value)
    });
  }

  onButtonClick = (e) => {

    const { data } = this.state;

    this.setState({
      data: data.set('input', '')
      .update(
        'users', users => users.push(Map({
          id: this.id++,
          // username: data.get('input')
          username: data.input
        })))
    })
  }

  render() {
    const { onChange, onButtonClick } = this;
    const { data: { input, users }} = this.state;

    // const { data } = this.state;
    // const input = data.get('input');
    // const users = data.get('users');
    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
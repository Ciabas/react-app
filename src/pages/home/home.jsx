import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        Hello word!
        <button>
          <Link to='/lorem'>
            To lorem ipsum
          </Link>
        </button>
      </div>
    );
  }
}

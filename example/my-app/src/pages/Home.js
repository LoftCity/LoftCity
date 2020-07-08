import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h2>Ссылка на все квартиры</h2>
      {/* Link to List.js */}
      <Link to={'./vse_kv'}>
        <button>
            Квартиры
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
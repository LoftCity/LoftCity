import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Kv extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      onekv: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getOne();
  }

  // Retrieves the list of items from the Express app
  getOne= () => {
    fetch('/api/getOne')
    .then(res => res.json())
    .then(onekv => this.setState({ onekv }))
  }

  render() {
    const { onekv } = this.state;

    return (
      <div className="App">
        <h1>Квартира</h1>
        {/* Check to see if any items are found*/}
        {onekv.length ? (
          <div>
            {/* Render the list of items */}
            {onekv.map((item) => {
              return(
                <div class="OneKv">
                  <span>
                  <img src={item.city} />
                  </span>
                  <span class="Address"><p>Описание:</p> {item.text}</span>
                  <span class="Address"><p>Адрес:</p>{item.address}</span>
                  <span class="Address"><p>E-mail:</p>{item.email}</span>
                  <span class="Address"><p>Номер телефона:</p>{item.number}</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      <span class="btn">
      <Link to="/vse_kv">
      <button>Назад</button>
      </Link>
      </span>
      </div>
    );
  }
}

export default Kv;
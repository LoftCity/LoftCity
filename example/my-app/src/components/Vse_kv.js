import React, { Component } from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';


class Vse_kv extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      kv: [],
      redirect: false,
      redirectTo: null,
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getKV();
  }

  // Retrieves the list of items from the Express app
  getKV = () => {
    fetch('/api/getKV')
    .then(res => res.json())
    .then(kv => this.setState({ kv }))
  }

  goToKV() {
    this.setState({ 
      redirect: true,
      redirectTo: `./kv` })
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/kv' />
    }
  }

  refresh = () =>{
    window.location.reload(true)
  }








  render() {

  
    const { kv } = this.state;

    return (
      <div className="App">
        <h1>Все записи</h1>
        {/* Check to see if any items are found*/}
        {kv.length ? (
          <div>
            {/* Render the list of items */}
            {kv.map((item) => {
              return(
                <div class = 'record' onClick={() =>  this.goToKV()}>
                  
                  <span>
                  <img src={item.city} /></span>
                  
                  <span>{item.text}</span>


                  <span>{item.address}
                  {item.email} </span>

                  <div>
                  {this.renderRedirect()}
                </div>
                  
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
      <hr />
      <div class="pages">
  <ul class="pagination" onClick={() =>  this.refresh()}>
    <li ><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a class="active" href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li><a href="#">7</a></li>
    <li><a href="#">»</a></li>
  </ul>
</div>
      </div>
    );
  }
}

export default Vse_kv;
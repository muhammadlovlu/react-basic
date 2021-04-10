import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Api randomusers api start




  // users Component start 
  // function Users(){
  //   const [users, setUsers] = useState([]);
  //   useEffect(()=>{
  //    fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data=> setUsers(data))
  //   }, [])
  //   return (
  //     <div>
  //       <h3>Dynamic User :{users.length}</h3>
  //       <ul>
  //         {
  //           users.map(user => <h5>{user.name}</h5>)
  //         }
  // {
  //   users.map(user=> <h3>Street : {user.address.street}</h3>)
  // }
  //         {
  //           console.log(users)
  //         }
  //       </ul>
  //     </div>
  //   )
  // }

  // users Component end 
  // USers Component end

  // Api randomusers api end
  const products = [
    {
      name: 'Mac Air',
      price: '$1499',
      color: 'Silver'
    },
    {
      name: 'JBL',
      price: '$475',
      color: 'Silver'
    },
    {
      name: 'ASUS Zenbook',
      price: '$3480',
      color: 'Black'
    },
    {
      name: 'MacBook Pro',
      price: '$1950',
      color: 'Grey'
    },
    {
      name: 'Fujitsu Lifebook',
      price: '$3450',
      color: 'red'
    },
    {
      name: 'Xiaomi Mi 9SE',
      price: '$400',
      color: 'Piano Black'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {
            products.map(product => <Product product={product}></Product>)
          }
        </div>
        <div>
          <Movies></Movies>
        </div>
        <Users></Users>
      </header>
    </div>
  );
}




// Api Random Users api start
function Users() {

  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=102')
      .then(res => res.json())
      .then(data => setUser(data.results))
  }, [])


  return (

    <div>
      {
        users.map(user => <SingleUser user={user} key={users.uuid}>h</SingleUser>)
      }
    </div>

  )
}


function SingleUser(props) {
  const userStyle = {
    margin: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    backgroundColor: 'tomato',
    width: '270px',
    height: '450px',
    color: 'white',
    float: 'left'
  }
  const otherStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign:'center',
    letterSpacing:'0.8px'
  }
  const imgStyle={
    margin:'20px',
    borderRadius:'5px',
    boxShadow:'20px 10px 30px  black'

  }
  return (
    <div style={userStyle}>
     
      <img style={imgStyle} width="180px" src={props.user.picture.large} alt="" />
      <h1 style={{ fontSize: '18px' }}>Name : <span>{props.user.name.first}</span> <span>{props.user.name.last}</span></h1>
      <h3 style={{ fontSize: '14px' }}>Email : {props.user.email}</h3>
      <p style={otherStyle}>City : {props.user.location.city}</p>
      <p style={otherStyle}></p>
      <p style={otherStyle}>Country: {props.user.location.country}</p>
      <p style={otherStyle}>Age : {props.user.registered.age}</p>
      <p style={otherStyle}>Contact : {props.user.phone}</p>
      <p style={otherStyle}></p>
    

      <p>{console.log(props)}</p>
    </div>
  )
}

// Product component start
function Product(props) {
  const productStyle = {
    margin: '10px',
    backgroundColor: 'tomato',
    border: '2px solid black',
    borderRadius: '5px',
    width: '250px',
    height: '300px',
    float: 'left'
  }
  const productBtnStyle = {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'arial',
    fontSize: '18px',
    borderRadius: '5px'

  }
  const { name, price, color } = props.product;
  return (
    <div style={productStyle}>
      <h3 style={{ fontSize: '22px' }}>NAME : {name}</h3>
      <h4>PRICE : {price}</h4>
      <h5>COLOR : {color}</h5>
      <button style={productBtnStyle}>Buy Now</button>
    </div>
  )
}
// Product component end
// Movies component start
function Movies() {
  const [count, setCount] = useState(0);
  const increaseHandle = () => setCount(count + 1);
  const decreaseHandle = () => setCount(count - 1);
  return (
    <div>
      <h1>Add item : {count}</h1>
      <button onClick={increaseHandle}>Add</button>
      <button onClick={decreaseHandle}>Remove</button>
    </div>
  )
}

// Movies component end

export default App;





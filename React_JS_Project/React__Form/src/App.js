import './App.css';
import { useState } from 'react';

const App = () => {

  const [fullName, setFullName] = useState({
    fName: '',
    passWord: '',
    email: '',
    phone: '',

  });


  const OnChanges = (e) => {

    console.log(e.target.value);
    console.log(e.target.name);


    const { name, value } = e.target;
    console.log(name);
    setFullName((preValue) => {

      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  const newOnChanges = (e) => {
    e.preventDefault();
    alert("Form Has Been Submitted 👍");
  }



  return (
    <form onSubmit={newOnChanges}>
      <div>
        <div className='sec__div'>
          <h1>Name :<div className='after__submit'>{fullName.fName}</div>
            <br />password: <div className='after__submit'>{fullName.passWord}</div>
            <br />Email: <div className='after__submit'>{fullName.email}</div>
            <br />PhoneNo: <div className='after__submit'>{fullName.phone}</div>
          </h1>
          <input type='text' placeholder='Enter your name' onChange={OnChanges} name='fName' value={fullName.fName}></input>
          <input type='password' placeholder='Enter your password' onChange={OnChanges} name='passWord' value={fullName.passWord}></input>
          <input type='text' placeholder='Enter your email' onChange={OnChanges} name='email' value={fullName.email}></input>
          <input type='number' style={{ inputSecurity: "auto" }} placeholder='Enter your phone Number' onChange={OnChanges} name='phone' value={fullName.phone}></input>
          <button type='submit'>click me 🌝</button>
        </div>
      </div>
    </form>
  );
}

export default App;

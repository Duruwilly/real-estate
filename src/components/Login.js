import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { omit } from 'lodash';
import { BiArrowBack } from 'react-icons/bi'

const Login = () => {
    const [values, setValues] = useState({});

 const [errors, setErrors] = useState({});

 /* const handleChange = e => {
  e.preventDefault();

  let name = e.target.name;
  let val = e.target.value;

  validate(e, name, val);

  setValues({
   ...values, [name]: val,
  })
 } */

 const loginChange = e => {
  e.preventDefault();

  let name = e.target.name;
  let val = e.target.value;

  login(e, name, val);

  setValues({
   ...values, [name]: val,
  })
 }

 
 const login = (e, name, value) => {
   switch(name) {
     case 'email':
       if( !new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/).test(value)) {
     setErrors({
      ...errors,
      email: 'Enter a valid email address'
     })
    } else {
     let newObj = omit(errors, 'email');
     setErrors(newObj);
    }
    break;

    case 'password':
     if( !new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).test(value)) {
     setErrors({
      ...errors,
      password: 'password must contain UPPERCASE and lower case letters with at least a digit and must be 8 character or more'
     })
    } else {
     let newObj = omit(errors, 'password');
     setErrors(newObj);
    }
    break;

    default:
    break;
   }
 }

 /* const validate = (e, name, value) => {
  switch(name) {
   case 'username':
    if(value.length === "" || !new RegExp(/^[A-Za-z\s]{2,}$/).test(value)) {
     setErrors({
      ...errors,
      username: 'name can\'t be empty and/or at least 2 letters'
     })
    } else {
     let newObj = omit(errors, 'username');
     setErrors(newObj);
    }
    break;

    case 'email':
    if( !new RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/).test(value)) {
     setErrors({
      ...errors,
      email: 'Enter a valid email address'
     })
    } else {
     let newObj = omit(errors, 'email');
     setErrors(newObj);
    }
    break;

    case 'tel':
     if( !new RegExp(/^\d{9,}$/).test(value)) {
     setErrors({
      ...errors,
      tel: 'Enter a valid phone number'
     })
    } else {
     let newObj = omit(errors, 'tel');
     setErrors(newObj);
    }
    break;

    case 'password':
     if( !new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/).test(value)) {
     setErrors({
      ...errors,
      password: 'password must contain UPPERCASE and lower case letters with at least a digit and must be 8 character or more'
     })
    } else {
     let newObj = omit(errors, 'password');
     setErrors(newObj);
    }
    break;

    default:
    break;
  }
 } */

 const handleSubmit = (e) => {
  e.preventDefault();

  if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0){
   alert("Successful! welcome");
  } else {
   alert("There is an error");
  }
 }
 
  return (
     <section className='form_section'>
        <div className='container'>
          <div className="form-wrapper">
            <div className='content'>
              <button className='buton'>
                <Link to='/'><BiArrowBack className='arrow-back'/>return back to home</Link>
              </button>
              <h1>sign in</h1>
         
            <form className='form' onSubmit={handleSubmit}>
              <span>Email</span>
              <input type="text" name='email' placeholder='Email' onChange={loginChange} />
              {
              errors.email && <h3 style={{color: '#c62828'}}>{errors.email}</h3>
              }
              <span>Password</span>
              <input type="text" name='password' placeholder='password' onChange={loginChange} />
              {
              errors.password && <h3 style={{color: '#c62828'}}>{errors.password}</h3>
              }
              <button type='submit' className='loginbtn'>Login</button>
            </form>
          </div>

          <div className='content'>
            <h2>Or register</h2>

            <form action="" onSubmit={handleSubmit} className='form'>
            
              <span>Name</span>
              <input type="text" className='form-input' name='username' placeholder='name' onChange={handleChange} />
              {
              errors.username && <h3 style={{color: '#c62828'}}>{errors.username}</h3>
              }
              <span>Phone No</span>
              <input type='text' className='form-input' name='tel' placeholder='phone number' onChange={handleChange} />
              {
              errors.tel && <h3 style={{color: '#c62828'}}>{errors.tel}</h3>
              }
              <span>Email</span>
              <input type="text" className='form-input' name='email' placeholder='Email' onChange={handleChange} />
              {
              errors.email && <h3 style={{color: '#c62828'}}>{errors.email}</h3>
              }
              <span>Password</span>
              <input type="text" className='form-input' name='password' placeholder='password' onChange={handleChange} />
              {
              errors.password && <h3 style={{color: '#c62828'}}>{errors.password}</h3>
              }
              <button type='submit' id='sign-up' className='signinbtn'>Sign Up</button>
             </form>
            </div>
            
          </div> 
        </div>
  </section>
  )
}

export default Login
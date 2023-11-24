import { Link } from 'react-router-dom';
import style from './Auth.module.css';
import { useState } from 'react';
import { isValidUsername, isValidEmail, isValidPhone, isValidPassword } from '../lib/isValid';

export function Register() {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [pass, setPass] = useState('');
      const [rePass, setRepass] = useState('');
      const [tos, setTos] = useState(false);

      function handleChangeUsername(event) {
        setUsername(event.target.value);
      }

      function handleChangeEmail(event) {
        setEmail(event.target.value);
      }

      function handleChangePhone(event) {
        setPhone(event.target.value);
      }

      function handleChangePass(event) {
        setPass(event.target.value);
    }
      function handleChangeRepass(event) {
        setRepass(event.target.value);
    }

      function handleChangeTos(event) {
        setTos(!tos);
      }
      
      function handleSubmit(event) {
        event.preventDefault();
        console.log('Form submited....:)');
        console.log({
          username,
          email,
          phone,
          pass,
          rePass,
          tos,
        });


        let isAllInfoOK = true;
        if (!isValidUsername(username)) {
          isAllInfoOK = false;
        }
        if (!isValidEmail(email)) {
          isAllInfoOK = false;
        }
        if (!isValidPhone(phone)) {
          isAllInfoOK = false;
        }
        if (!isValidPassword(pass)) {
          isAllInfoOK = false;
        }
        if (!isValidPassword(rePass)) {
          isAllInfoOK = false;
        }
        if (tos!== true) {
          isAllInfoOK = false;
        }
        console.log('Ar viskas Ok:', isAllInfoOK);
      }



      return (
      <section className="container">
        <div className='row'>
        <form onSubmit={handleSubmit} className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 offset-xl-4 col-lg-4 offset-xl-4 mt-5 mb-5">
          <h1 className={style.mainTitle + ' h3 mb-3 fw-normal'}>Please sign in</h1>

          <div className="form-floating">
            <input onChange={handleChangeUsername} value={username} type="text" className="form-control" id="username" placeholder="Username" />
            <label htmlFor="floatingInput">Please sign in</label>
          </div>
          <div className="form-floating">
            <input onChange={handleChangeEmail} value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={handleChangePhone} value={phone} type="tel" className="form-control" id="floatingInputPhone" placeholder="+3700000000" />
            <label htmlFor="floatingInputPhone">Phone number</label>
          </div>
          <div className="form-floating">
            <input onChange={handleChangePass} value={pass} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input onChange={handleChangeRepass} value={rePass} type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Password" />
            <label htmlFor="floatingPasswordRepeat">Password repeat</label>
          </div>
          <div className="form-check text-start my-3">
            <input onChange={handleChangeTos} value={tos} className="form-check-input" type="checkbox" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <Link to="/tos"> Agree to terms of Service </Link>
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
        </div>
      </section>
    )
  }
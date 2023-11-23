import { Link } from 'react-router-dom';
import style from './Auth.module.css';
import { useState } from 'react';

export function Register () {
    

      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [pass, setPass] = useState('');
      const [rePass, setRepass] = useState('');
      const [tos, setTos] = useState('false');

      function handleSubmit(event) {
        event.preventDefault()
        console.log('For submit....:)');
      }

      return (
      <section className="container">
        <div className='row'>
        <form onSubmit={hanleSubmit} className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 offset-xl-4 col-lg-4 offset-xl-4 mt-5 mb-5">
          <h1 className={style.mainTitle + ' h3 mb-3 fw-normal'}>Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="tel" className="form-control" id="floatingInputPhone" placeholder="+3700000000" />
            <label htmlFor="floatingInputPhone">Phone number</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Password" />
            <label htmlFor="floatingPasswordRepeat">Password repeat</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="tos" id="flexCheckDefault" />
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
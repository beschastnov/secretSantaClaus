import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { regUser } from '../../redux/actions/userAction';

export default function Registration() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ name: '', login: '', pass: '' });
  const inputHendler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHendler = (e) => dispatch(regUser(e, inputs, setInputs));
  return (
    <div>
      <div>
        Registration
      </div>
      <form onSubmit={submitHendler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            login
            <input onChange={inputHendler} value={inputs.login} type="text" name="login" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input onChange={inputHendler} value={inputs.pass} type="password" name="pass" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
            <input onChange={inputHendler} value={inputs.name} type="text" name="name" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

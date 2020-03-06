import React, { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import utils from './utils';

const Contact = () => {

  const customerId = uuid();

  const formEl = useRef(null);
  const submitForm = (e) => {
    const form = formEl.current;
    console.log(form.checkValidity(), form.elements[0].validity);
    //e.preventDefault();
  };

  const routeTitle = useRef(null);
  useEffect(() => {
    utils.setDocTitle('React App Contact');
    routeTitle.current.focus();
  });

  return (<>
    <div>
      <h2 ref={routeTitle} tabIndex="-1">Contact Us!</h2>
    </div>
    <div className="contact-form-wrapper">
      <h2>Fill out this form to contact us.</h2>
      <p>Required fields are marked with *</p>
    </div>
    <form id="contact-form" ref={formEl}>
      <fieldset>
        <legend>Your personal information</legend>
        <div>
          <label htmlFor="firstName">First Name *</label>
          <input type="text" name="firstName" id="firstName" placeholder="eg John" required/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            name="flastName"
            id="lastName"
            placeholder="eg Smith"
            required
            aria-describedby="lastNameHint"
          />
          <span id="lastNameHint">Your last name is the same as your surname.</span>
        </div>
        <div>
          <span id="colorLabel">Favorite Color</span>
          <input type="text" name="color" id="color" placeholder="eg red" aria-labelledby="colorLabel"/>
        </div>
        <div>
          <label>
            <span>Email address *</span>
            <input type="email" required name="email" id={`${customerId}-email`}/>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>What is question about?</legend>
        <div>
          <input type="radio" name="questionTopic" id="technical" value="txt" checked required/>
            <label htmlFor="txt">Technical issue</label>
        </div>
        <div>
          <input type="radio" name="questionTopic" id="billing" value="csv" required/>
            <label htmlFor="csv">Billing</label>
        </div>
      </fieldset>
      <div>
        <button onClick={submitForm}>Submit</button>
      </div>
    </form>
  </>
);
};

export default Contact;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import utils from './utils';

const Contact = () => {
  const routeTitle = useRef(null);
  useEffect(() => {
    utils.setDocTitle('React App Contact');
    routeTitle.current.focus();
  }, []);

  const [fields, setFields] = useState({
    firstName: {
      type: 'text',
      required: true,
      value: '',
      label: 'First Name',
      valid: false,
      dirty: false,
      placeholder: 'John'
    },
    lastName: {
      type: 'text',
      required: true,
      value: '',
      label: 'Last Name',
      valid: false,
      dirty: false,
      placeholder: 'Doe'
    },
    color: {
      type: 'text',
      value: '',
      label: 'Favorite Color',
      valid: false,
      dirty: false,
      placeholder: 'blue'
    },
    email: {
      type: 'email',
      required: true,
      value: '',
      label: 'Email Address',
      valid: false,
      dirty: false,
      placeholder: 'name@example.com'
    },
    topic: {
      type: 'radioGroup',
      value: 'technical',
      label: 'Question Topic',
      valid: false,
      dirty: false
    }
  });

  const [form, setForm] = useState({
    dirty: false,
    valid: false,
    success: false
  });

  const formEl = useRef(null);

  useEffect(() => {
    Object.keys(fields).forEach(name => {
      toggleError(formEl.current[name]);
    });
  }, [fields]);

  const formStatus = useRef(null);
  useEffect(() => {
    if (form.dirty || form.success) {
      formStatus.current.focus();
    }
  }, [form]);

  const getErrorMessage = el => {
    let message = `${fields[el.name].label} `;
    if (el.validity.valueMissing) {
      message += 'cannot be blank';
    } else if (el.validity.typeMismatch) {
      message += 'is not properly formatted';
    } else {
      message += 'has an error';
    }
    return message;
  };

  const toggleError = el => {
    if (el.willValidate && el.type !== 'submit') {
      let message = '';
      if (!el.checkValidity() && fields[el.name].dirty) {
        message = getErrorMessage(el);
      }
      document.getElementById(`${el.name}Error`).textContent = message;
    }
  };

  const onChange = e => {
    // e.preventDefault();
    const el = formEl.current[e.target.id];
    console.log(el.validity);
    setFields({
      ...fields,
      [el.name]: {
        ...fields[el.name],
        value: el.value
      }
    });
  };

  const onBlur = e => {
    const el = formEl.current[e.target.id];
    setFields({
      ...fields,
      [el.name]: {
        ...fields[el.name],
        dirty: true
      }
    });
  };

  const validateForm = e => {
    e.preventDefault();
    const valid = formEl.current.reportValidity();
    setForm({
      dirty: true,
      valid
    });
    if (valid) {
      submitForm();
    } else {
      toggleAllDirty(true);
    }
  };

  const toggleAllDirty = dirty => {
    const temp = { ...fields };
    Object.keys(temp).forEach(name => {
      temp[name].dirty = dirty
    });
    setFields(temp);
  };

  const submitForm = () => {
    // post form
    console.log(fields);
    setForm({
      ...form,
      valid: true,
      success: true
    })
  };

  return (
    <>
      <div>
        <h1 ref={routeTitle} tabIndex="-1">
          Contact Us!
        </h1>
      </div>
      <div className="contact-form-wrapper">
        {!form.success && (
          <>
            <h2>Fill out this form to contact us.</h2>
            <p>Required fields are marked with *</p>
          </>
        )}
        <p
          tabIndex="-1"
          ref={formStatus}
          id="formStatus"
          aria-live="assertive"
          className={form.valid ? 'success' : 'error'}
        >
          {!form.valid &&
            form.dirty &&
            'Some information is missing or improperly formatted.'}
          {form.success && 'Thank you! ' && (
            <Link to="/">Back to Homepage</Link>
          )}
        </p>
      </div>
      {!form.success && (
        <form id="contact-form" ref={formEl}>
          <fieldset>
            <legend>Your personal information</legend>
            <div className="form-row">
              <label htmlFor="firstName">{fields.firstName.label} *</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder={fields.firstName.placeholder}
                required={fields.firstName.required}
                value={fields.firstName.value || ''}
                onChange={onChange}
                onBlur={onBlur}
                className={fields.firstName.dirty ? 'dirty' : ''}
                aria-describedby="firstNameError"
              />
              <span className="error" id="firstNameError" aria-live="polite" />
              {/*
              // alternate syntax 1
                <span id="firstNameLabel">{fields.firstName.label} *</span>
                <input type="text" aria-labelledby="firstNameLabel" aria-describedby="firstNameError"/>
                <span className="error" id="firstNameError" aria-live="polite" />
              // alternate syntax 2
                <label>
                  <span>{fields.firstNameLabel}</span>
                  <input type="text" aria-describedby="firstNameError"/>
                  <span className="error" id="firstNameError" aria-live="polite" />
                </label>
              */}
            </div>
            <div className="form-row">
              <label htmlFor="lastName">{fields.lastName.label} *</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder={fields.lastName.placeholder}
                required={fields.lastName.required}
                value={fields.lastName.value || ''}
                onChange={onChange}
                onBlur={onBlur}
                className={fields.lastName.dirty ? 'dirty' : ''}
                aria-describedby="lastNameError"
              />
              <span className="error" id="lastNameError" aria-live="polite" />
            </div>
            <div className="form-row">
              <label htmlFor="color">{fields.color.label}</label>
              <input
                type="text"
                name="color"
                id="color"
                placeholder={fields.color.placeholder}
                required={fields.color.required}
                value={fields.color.value || ''}
                onChange={onChange}
                onBlur={onBlur}
                className={fields.color.dirty ? 'dirty' : ''}
                aria-describedby="colorError"
              />
              <span className="error" id="colorError" aria-live="polite" />
            </div>
            <div className="form-row">
              <label htmlFor="email">{fields.email.label}</label>
              <input
                type="email"
                required={fields.email.required}
                name="email"
                id="email"
                placeholder={fields.email.placeholder}
                value={fields.email.value || ''}
                onChange={onChange}
                onBlur={onBlur}
                className={fields.email.dirty ? 'dirty' : ''}
                aria-describedby="emailError"
              />
              <span className="error" id="emailError" aria-live="polite" />
            </div>
          </fieldset>
          <fieldset>
            <legend>What is your question about?</legend>
            <div className="form-row">
              <input
                type="checkbox"
                name="topic"
                id="technical"
                value="technical"
                checked={fields.topic.value === 'technical'}
                onChange={onChange}
                onBlur={onBlur}
              />
              <label htmlFor="technical">Technical</label>
            </div>
            <div className="form-row">
              <input
                type="checkbox"
                name="topic"
                id="billing"
                value="billing"
                checked={fields.topic.value === 'billing'}
                onChange={onChange}
                onBlur={onBlur}
              />
              <label htmlFor="billing">Billing</label>
            </div>
          </fieldset>
          <div>
            <button onClick={validateForm}>Submit</button>
          </div>
        </form>
      )}
    </>
  );
};

export default Contact;

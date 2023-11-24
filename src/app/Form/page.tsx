"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import './Form.css';

interface FormData {
  name: string;
  age: string;
  email: string;
  phone: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    email: '',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, fieldName: keyof FormData) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors: string[] = [];
    for (const key in formData) {
      if (!formData[key as keyof FormData]) {
        errors.push(`${key} is required`);
      }
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch('https://4c0f-103-207-1-157.ngrok-free.app/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data Successfully submitted');
        const responseData = await response.json();
        console.log(responseData.res);
        setFormData({
          name: '',
          age: '',
          email: '',
          phone: '',
        });
        setFormErrors([]);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error occurred while submitting the form:', error);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="text-3xl text-center font-semibold p-6">Form</h1>

        {formErrors.length > 0 && (
          <div className="error-messages">
            {formErrors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}

        <div className="form-sub">
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="input"
            value={formData.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </div>
        <div className="form-sub">
          <label className="label">Age</label>
          <input
            type="text"
            placeholder="Age"
            className="input"
            value={formData.age}
            onChange={(e) => handleInputChange(e, 'age')}
          />
        </div>
        <div className="form-sub">
          <label className="label">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="input"
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
        </div>
        <div className="form-sub">
          <label className="label">Phone No.</label>
          <input
            type="text"
            placeholder="Phone No."
            className="input"
            value={formData.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
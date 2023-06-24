import React, { useState } from 'react';
import './Form.scss';

function UserForm() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, lastname, age };
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
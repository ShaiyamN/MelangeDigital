import React, { useState } from 'react';
import axios from 'axios';

const CFormExtra = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null,
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file) {
      setStatus('Please upload a file.');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(formData.file);
    reader.onload = async () => {
      const base64File = reader.result.split(',')[1];

      const data = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        file: base64File,
        fileName: formData.file.name,
        fileType: formData.file.type,
      };

      try {
        const response = await axios.post('https://script.google.com/macros/s/AKfycbzigAq6n9hOCZc2DYWKJHEEzwlbaId_YEGHVWVs7VzJziFvd5_XUa2tXbHlcLxdFsMa/exec', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setStatus('Form submitted successfully!');
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        setStatus('Failed to submit form.');
        console.error('Failed to submit form:', error);
      }
    };

    reader.onerror = () => {
      setStatus('Failed to read file.');
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <input
        type="file"
        name="file"
        onChange={handleFileChange}
        required
      />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default CFormExtra;

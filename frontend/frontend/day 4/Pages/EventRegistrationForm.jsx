import React, { useState } from 'react';
import '../Css/EventRegistrationForm.css';
import Footer from './Footer';
import Navbar from './Navbar';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    eventname: '',
    name: '',
    address: '',
    homeaddress: '',
    mobile: '',
    email: '',
    eventAddress: '',
    eventDate: '',
    eventTime: '',
    numPeople: '',
    category: '',
    vegQuantity: '',
    nonVegQuantity: '',
    mehandi: false,
    djParty: false,
    magicShow: false,
    gameShow: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('eventFormData', JSON.stringify(formData));

    // Show submitted successfully popup
    alert('Form submitted successfully!');

    // Reset form data
    setFormData({
      eventname: '',
      name: '',
      address: '',
      homeaddress: '',
      mobile: '',
      email: '',
      eventAddress: '',
      eventDate: '',
      eventTime: '',
      numPeople: '',
      category: '',
      vegQuantity: '',
      nonVegQuantity: '',
      mehandi: false,
      djParty: false,
      magicShow: false,
      gameShow: false,
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        <br></br> <br></br> <br></br> <br></br>
        <form className="event-form-container" onSubmit={handleSubmit}>
          <label>
            Event Name:
            <input type="text" name="eventname" value={formData.eventname} onChange={handleChange} required />
          </label>
          <label>
            Applicant Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>
          <label>
            Applicant Address:
            <input type="text" name="homeaddress" value={formData.homeaddress} onChange={handleChange} required />
          </label>
          <label>
            Applicant Mobile No:
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </label>
          <label>
            Applicant Email ID:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Event Address:
            <input type="text" name="eventAddress" value={formData.eventAddress} onChange={handleChange} required />
          </label>
          <label>
            Date of the Event:
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
          </label>
          <label>
            Time of the Event:
            <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
          </label>
          <label>
            Number of People:
            <input type="number" name="numPeople" value={formData.numPeople} onChange={handleChange} required />
          </label>
          <label>
            Select the Category (Veg/Non-Veg):
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="veg">Veg</option>
              <option value="nonveg">Non-Veg</option>
            </select>
          </label>
          <label>
            Veg Quantity:
            <input type="number" name="vegQuantity" value={formData.vegQuantity} onChange={handleChange} required />
          </label>
          <label>
            Non Veg Quantity:
            <input type="number" name="nonVegQuantity" value={formData.nonVegQuantity} onChange={handleChange} required />
          </label>
          <label>
            Select Add-ons:
            <label>
              Mehandi
              <input type="checkbox" name="mehandi" checked={formData.mehandi} onChange={handleChange} />
            </label>
            <label>
              DJ Party
              <input type="checkbox" name="djParty" checked={formData.djParty} onChange={handleChange} />
            </label>
            <label>
              Magic Show
              <input type="checkbox" name="magicShow" checked={formData.magicShow} onChange={handleChange} />
            </label>
            <label>
              Game Show
              <input type="checkbox" name="gameShow" checked={formData.gameShow} onChange={handleChange} />
            </label>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br></br> <Footer /> </div>
  );
};

export default EventRegistrationForm;

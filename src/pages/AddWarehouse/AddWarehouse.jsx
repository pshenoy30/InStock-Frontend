// src/pages/AddWarehouse/AddWarehouse.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import FormField from '../../components/FormField/FormField';
import Buttons from '../../components/Buttons/Buttons';
import FormInputs from '../../components/FormInputs/FormInputs';
import './AddWarehouse.scss';

const AddWarehouse = () => {
  const [formData, setFormData] = useState({
    warehouseName: '',
    address: '',
    city: '',
    country: '',
    contactName: '',
    contactPosition: '',
    contactPhone: '',
    contactEmail: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.warehouseName) errors.warehouseName = 'Warehouse name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.country) errors.country = 'Country is required';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('/routes/warehouse', formData);
        console.log('Warehouse added successfully:', response.data);
        setFormData({
          warehouseName: '',
          address: '',
          city: '',
          country: '',
          contactName: '',
          contactPosition: '',
          contactPhone: '',
          contactEmail: ''
        });
      } catch (error) {
        console.error('Error adding warehouse:', error.response ? error.response.data : error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log('Cancel button clicked');
  };

  return (
    <>
      <Header />
      <main>
        <div className="add-warehouse__header">
          <h2>Add New Warehouse</h2>
        </div>
        <div className="add-warehouse__divider"></div>
        <form className="add-warehouse" onSubmit={handleSubmit}>
          <FormInputs formData={formData} errors={errors} onChange={handleChange} />
          <div className="add-warehouse__buttons-wrapper">
            <Buttons showPrimaryWarehouse={true} showSecondary={true} />
          </div>
        </form>
      </main>
    </>
  );
};

export default AddWarehouse;

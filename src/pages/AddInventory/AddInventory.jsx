// AddInventory.jsx
import React, { useState } from "react";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FormFooter from "../../components/FormFooter/FormFooter";
import { BASE_URL_API } from "../../utils/editwarehouseApi";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (phoneNumber) => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(String(phoneNumber));
};

const defaultFormData = {
  warehouseName: "",
  address: "",
  city: "",
  country: "",
  contactName: "",
  contactPosition: "",
  contactPhone: "",
  contactEmail: "",
};

const AddInventory = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);

    if (Object.keys(errors).length === 0) {
      try {
        const updatedFormData = {
          warehouse_name: formData.warehouseName,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          contact_name: formData.contactName,
          contact_position: formData.contactPosition,
          contact_phone: formData.contactPhone,
          contact_email: formData.contactEmail,
        };

        await axios.post(`${BASE_URL_API}/warehouse`, updatedFormData);

        handleReset();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleReset = () => {
    setFormData(defaultFormData);
    setFormErrors({});
  };

  const warehouseFields = [
    {
      name: "itemName",
      label: "Item Name",
      type: "text",
      placeholder: "Item Name",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
      placeholder: "Please enter a brief item description...",
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: [
        { value: "electronics", label: "Electronics" },
        { value: "clothing", label: "Clothing" },
        { value: "books", label: "Books" },
      ],
      placeholder: "Please select",
    },
    {
      name: "status",
      label: "Status",
      type: "radio",
      options: [
        { value: "inStock", label: "In stock" },
        { value: "outOfStock", label: "Out of stock" },
      ],
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      placeholder: "0",
    },
    {
      name: "warehouse",
      label: "Warehouse",
      type: "select",
      options: [
        { value: "warehouse1", label: "Warehouse 1" },
        { value: "warehouse2", label: "Warehouse 2" },
        { value: "warehouse3", label: "Warehouse 3" },
      ],
      placeholder: "Please select",
    },
  ];

  const validateFormData = (data) => {
    const errors = {};
    if (!data.warehouseName) errors.warehouseName = "Item Name is required";
    if (!data.address) errors.address = "Address is required";
    if (!data.city) errors.city = "City is required";
    if (!data.country) errors.country = "Country is required";
    if (!data.contactName) errors.contactName = "Contact Name is required";
    if (!data.contactPosition) errors.contactPosition = "Position is required";
    if (!data.contactPhone) {
      errors.contactPhone = "Phone Number is required";
    } else if (!validatePhoneNumber(data.contactPhone)) {
      errors.contactPhone = "Phone Number is invalid";
    }
    if (!data.contactEmail) {
      errors.contactEmail = "Email is required";
    } else if (!validateEmail(data.contactEmail)) {
      errors.contactEmail = "Email is invalid";
    }
    return errors;
  };

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="mainBox">
          <div className="form-container">
            <SectionHeader title="Add New Inventory Item" />
            <form className="form" onSubmit={handleSubmit}>
              <InventoryForm
                sectionTitle="Item Details"
                fields={warehouseFields.slice(0, 3)}
                formData={formData}
                formErrors={formErrors}
                handleChange={handleChange}
              />
              <InventoryForm
                sectionTitle="Item Availability"
                fields={warehouseFields.slice(3)}
                formData={formData}
                formErrors={formErrors}
                handleChange={handleChange}
              />
              <FormFooter
                onReset={handleReset}
                onSubmit={handleSubmit}
                isAddWarehouseMode={false}
              />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AddInventory;

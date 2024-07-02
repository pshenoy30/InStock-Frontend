// EditWarehouse.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import FormInputs from "../../components/FormInputs/FormInputs";
import { defaultFormData } from "../../utils/formUtils";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FormFooter from "../../components/FormFooter/FormFooter";
import { useParams } from "react-router-dom";
import getWarehouseById, { BASE_URL_API } from "../../utils/editwarehouseApi";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "../../components/FormInputs/FormInputs.scss";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberParsed = parsePhoneNumberFromString(phoneNumber, "US");
  return phoneNumberParsed ? phoneNumberParsed.isValid() : false;
};

const formatPhoneNumber = (phoneNumber) => {
  const phoneNumberParsed = parsePhoneNumberFromString(phoneNumber, "US");
  return phoneNumberParsed
    ? phoneNumberParsed.formatInternational()
    : phoneNumber;
};

const validateFormData = (data) => {
  const errors = {};
  if (!data.warehouseName) errors.warehouseName = "Warehouse Name is required";
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

const EditWarehouse = () => {
  const { warehouseId: id } = useParams();
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const warehouseData = await getWarehouseById(id);
          setFormData({
            warehouseName: warehouseData.warehouse_name,
            address: warehouseData.address,
            city: warehouseData.city,
            country: warehouseData.country,
            contactName: warehouseData.contact_name,
            contactPosition: warehouseData.contact_position,
            contactPhone: warehouseData.contact_phone,
            contactEmail: warehouseData.contact_email,
          });
        }
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWarehouseData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "contactPhone") {
      if (validatePhoneNumber(value)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          contactPhone: undefined,
        }));
      } else {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          contactPhone: "Phone Number is invalid",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      console.error("No warehouse ID provided for update");
      return false;
    }

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
          contact_phone: formatPhoneNumber(formData.contactPhone),
          contact_email: formData.contactEmail,
        };

        const updateUrl = `${BASE_URL_API}/warehouse/${id}`;
        await axios.put(updateUrl, updatedFormData);
        return true; 
      } catch (error) {
        console.error("Error updating warehouse:", error);
        return false; 
      }
    } else {
      setFormErrors(errors);
      return false; 
    }
  };

  const handleReset = () => {
    setFormData(defaultFormData);
    setFormErrors({});
  };

  const warehouseFields = [
    {
      name: "warehouseName",
      label: "Warehouse Name",
      type: "text",
      placeholder: "Warehouse Name",
    },
    {
      name: "address",
      label: "Street Address",
      type: "text",
      placeholder: "Street Address",
    },
    {
      name: "city",
      label: "City",
      type: "text",
      placeholder: "City",
    },
    {
      name: "country",
      label: "Country",
      type: "text",
      placeholder: "Country",
    },
  ];

  const contactFields = [
    {
      name: "contactName",
      label: "Contact Name",
      type: "text",
      placeholder: "Contact Name",
    },
    {
      name: "contactPosition",
      label: "Position",
      type: "text",
      placeholder: "Position",
    },
    {
      name: "contactPhone",
      label: "Phone Number",
      type: "text",
      placeholder: "Phone Number",
    },
    {
      name: "contactEmail",
      label: "Email",
      type: "email",
      placeholder: "Email",
    },
  ];

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="mainBox">
          <div className="form-container">
            <SectionHeader
              title="Edit Warehouse"
              backLink="/warehouse/:warehouseId"
            />
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__sections">
                <FormInputs
                  sectionTitle="Warehouse Details"
                  fields={warehouseFields}
                  formData={formData}
                  formErrors={formErrors}
                  handleChange={handleChange}
                />
                <div className="form__divider"></div>
                <FormInputs
                  sectionTitle="Contact Details"
                  fields={contactFields}
                  formData={formData}
                  formErrors={formErrors}
                  handleChange={handleChange}
                />
              </div>
              <FormFooter
                onReset={handleReset}
                onSubmit={handleSubmit}
                isEditMode={true}
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

export default EditWarehouse;

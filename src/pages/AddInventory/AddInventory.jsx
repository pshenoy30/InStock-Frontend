// AddInventory.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import InventoryForm from "../../components/InventoryForm/InventoryForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FormFooter from "../../components/FormFooter/FormFooter";
import { BASE_URL_API } from "../../utils/editwarehouseApi";

const defaultFormData = {
  item_name: "",
  description: "",
  category: "",
  status: "In stock",
  quantity: "",
  warehouse_id: "",
};

const AddInventory = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchCategoriesAndWarehouses = async () => {
      try {
        const [categoriesResponse, warehousesResponse] = await Promise.all([
          axios.get(`${BASE_URL_API}/inventory/categories`),
          axios.get(`${BASE_URL_API}/warehouse/names`),
        ]);

        setCategories(categoriesResponse.data);
        setWarehouses(warehousesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndWarehouses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkIfUpdating = async (data) => {
    try {
      const response = await axios.get(`${BASE_URL_API}/inventory`, {
        params: {
          item_name: data.item_name,
          category: data.category,
          warehouse_id: data.warehouse_id,
        },
      });

      if (response.data.length > 0) {
        setIsUpdating(true);
      } else {
        setIsUpdating(false);
      }
    } catch (error) {
      console.error("Error checking existing inventory:", error);
      setIsUpdating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await checkIfUpdating(formData);
    const errors = validateFormData(formData);

    if (Object.keys(errors).length === 0) {
      const submissionData = {
        ...formData,
        quantity: formData.status === "Out of stock" ? "0" : formData.quantity,
      };

      try {
        await axios.post(`${BASE_URL_API}/inventory`, submissionData);
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
    setIsUpdating(false);
  };

  const validateFormData = (data) => {
    const errors = {};
    if (!data.item_name) errors.item_name = "Item Name is required";
    if (data.status === "In stock" && !data.description)
      errors.description = "Description is required";
    if (!data.category) errors.category = "Category is required";
    if (data.status === "In stock" && (!data.quantity || data.quantity < 0))
      errors.quantity = "Quantity must be a positive number";
    if (!data.warehouse_id) errors.warehouse_id = "Warehouse is required";

    return errors;
  };

  const itemDetailsFields = [
    {
      name: "item_name",
      label: "Item Name",
      type: "text",
      placeholder: "Item Name",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      placeholder: "Please enter a brief item description...",
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: categories.map((category, index) => ({
        value: String(category.category),
        label: category.category,
        key: index,
      })),
      placeholder: "Please select",
    },
  ];

  const availabilityFields = [
    {
      name: "status",
      label: "Status",
      type: "radio",
      options: [
        { value: "In stock", label: "In stock", key: "in_stock" },
        { value: "Out of stock", label: "Out of stock", key: "out_of_stock" },
      ],
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      placeholder: "",
    },
    {
      name: "warehouse_id",
      label: "Warehouse",
      type: "select",
      options: warehouses.map((warehouse, index) => ({
        value: String(warehouse.warehouse_id),
        label: warehouse.warehouse_name,
        key: warehouse.warehouse_id,
      })),
      placeholder: "Please select",
    },
  ];

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="mainBox">
          <div className="form-container">
            <SectionHeader
              title="Add New Inventory Item"
              backLink="/inventories/:inventoryId"
            />
            <form className="form" onSubmit={handleSubmit}>
              <div className="form__sections">
                <InventoryForm
                  sectionTitle="Item Details"
                  fields={itemDetailsFields}
                  formData={formData}
                  formErrors={formErrors}
                  handleChange={handleChange}
                />
                <div className="form__divider"></div>
                <InventoryForm
                  sectionTitle="Item Availability"
                  fields={availabilityFields.filter(
                    (field) =>
                      !(
                        field.name === "quantity" &&
                        formData.status === "Out of stock"
                      )
                  )}
                  formData={formData}
                  formErrors={formErrors}
                  handleChange={handleChange}
                />
              </div>
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

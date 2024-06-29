import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../../components/EditForm/EditForm";
import Footer from "../../components/Footer/Footer";
import FormFooter from "../../components/FormFooter/FormFooter";
import Header from "../../components/Header/Header";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import getInventoryById from "../../utils/getInventoryById";
import "./EditInventory.scss";

function EditInventory() {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {inventoryId: id } = useParams();

  useEffect(() => {
    const fetchInventoryData = async () => {
        try {
            if (id) {
                const InventoryData = await getInventoryById(id);
                setIsLoading(false);
                setFormData({
                    itemName: InventoryData.item_name,
                    description: InventoryData.description,
                    category: InventoryData.category,
                    status: InventoryData.status,
                    warehouseName: InventoryData.warehouseName,
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchInventoryData();
}, [id]);

  //validate form data
  const validateFormData = (data) => {
    const errors = {};
    if (!data.itemName) errors.itemName = "Item Name is required";
    if (!data.description) errors.description = "Description is required";
    if (!data.category) errors.category = "Please select a category";
    if (data.status === "In Stock" && !data.quantity)
      errors.quantity = "Please select the availability.";
    if (!data.warehouse) errors.warehouse = "Please specify the warehouse";

    setFormErrors(errors);
    return errors;
  };

  const categoryOptions = [
    "Apparel",
    "Accessories",
    "Electronics",
    "Gear",
    "Health",
  ];

  const inventoryFields = [
    {
      name: "itemName",
      label: "Item Name",
      type: "text"
    },
    {
      name: "description",
      label: "Description",
      type: "textarea"
    },
    {
      name: "category",
      label: "Category",
      type: "drop-down",
      options: categoryOptions
    },
  ];

  const availabilityFields = [
    {
      name: "status",
      label: "Status",
      type: "radio",
      options: ["In Stock", "Out of Stock"]
    },
    {
      name: "warehouse",
      label: "Warehouse",
      type: "text",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "status" && value === "Out of Stock") {
        if (formData.hasOwnProperty("quantity")) {
            setFormData({ ...formData, [name]: value, quantity: 0 });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    } else {
        setFormData({ ...formData, [name]: value });
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
        console.error("No inventory ID provided for update");
        return;
    }

    const errorOutput = validateFormData(formData);
    if (Object.keys(errorOutput).length === 0) {
        try {
            const updatedFormData = {
                itemName: formData.itemName,
                description: formData.description,
                category: formData.category,
                status: formData.status,
                warehouseName: formData.warehouse,
            };

            const API_URL = import.meta.env.VITE_BACKEND_URL;
            const updateUrl = `${API_URL}/inventory/${id}`;
            await axios.put(updateUrl, updatedFormData);
            console.log("Inventory updated successfully");
        } catch (error) {
            console.error("Error updating inventory:", error);
        }
    } else {
        setFormErrors(error);
    }
  };

  const handleReset = () => {
    setFormData({
      itemName: "",
      description: "",
      category: "",
      status: "",
      warehouse: "",
    });
    setFormErrors({});
  };
  
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <SectionHeader title="Edit Inventory Item" />
          <form className="form" onSubmit={handleSubmit}>
            <EditForm
              sectionTitle="Item Details"
              fields={inventoryFields}
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
            />
            <EditForm
              sectionTitle="Item Availability"
              fields={availabilityFields}
              formData={formData}
              formErrors={formErrors}
              handleChange={handleChange}
            />
            <FormFooter onReset={handleReset} onSubmit={handleSubmit} isEditMode/>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EditInventory;

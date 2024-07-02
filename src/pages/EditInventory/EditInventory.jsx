import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditInventoryForm from "../../components/EditInventoryForm/EditInventoryForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EditNav from "../../components/EditNav/EditNav";
import EditInventoryFooter from "../../components/EditInventoryFooter/EditInventoryFooter";
import getInventoryById from "../../utils/getInventoryById";
import "./EditInventory.scss";

function EditInventory() {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const { inventoryId: id } = useParams();
  const navigate = useNavigate();

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
            quantity: InventoryData.quantity,
            warehouseName: InventoryData.warehouse_name,
            warehouseId: InventoryData.warehouse_id,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchInventoryData();
  }, [id]);

  const categoryOptions = [
    "Apparel",
    "Accessories",
    "Electronics",
    "Gear",
    "Health",
  ];

  const warehouseOptions = [
    {
      warehouseName: "Manhattan",
      warehouseId: "1",
    },
    {
      warehouseName: "Washington",
      warehouseId: "2",
    },
    {
      warehouseName: "Jersey",
      warehouseId: "3",
    },
    {
      warehouseName: "SF",
      warehouseId: "4",
    },
    {
      warehouseName: "Santa Monica",
      warehouseId: "5",
    },
    {
      warehouseName: "Seattle",
      warehouseId: "6",
    },
    {
      warehouseName: "Miami",
      warehouseId: "7",
    },
    {
      warehouseName: "Boston",
      warehouseId: "8",
    },
  ];

  const inventoryFields = [
    {
      name: "itemName",
      label: "Item Name",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "category",
      label: "Category",
      type: "drop-down",
      options: categoryOptions,
    },
  ];

  const availabilityFields = [
    {
      name: "status",
      label: "Status",
      type: "radio",
      options: ["In Stock", "Out of Stock"],
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "text",
    },
    {
      name: "warehouseName",
      label: "Warehouse",
      type: "drop-down",
      options: warehouseOptions.map((option) => option.warehouseName),
    },
  ];

  const validateFormData = (data) => {
    const errors = {};
    if (!data.itemName) errors.itemName = "Item Name is required";
    if (!data.description) errors.description = "Description is required";
    if (!data.category) errors.category = "Please select a category";
    if (data.status === "In Stock" && data.quantity === 0)
      errors.quantity = "Please select the availability.";
    if (!data.warehouseName)
      errors.warehouseName = "Please specify the warehouse";

    setFormErrors(errors);
    return errors;
  };

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
          warehouseName: formData.warehouseName,
          warehouseId: getWarehouseIdByName(
            formData.warehouseName,
            warehouseOptions
          ),
          quantity: formData.quantity,
        };
        const API_URL = import.meta.env.VITE_BACKEND_URL;
        const updateUrl = `${API_URL}/inventory/${id}`;
        await axios.put(updateUrl, updatedFormData);
        handleReset();
      } catch (error) {
        console.error("Error updating inventory:", error);
      }
    } else {
      setFormErrors(errorOutput);
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

    setRedirect(true);
  };

  if (isLoading) return <p>Loading...</p>;

  if (redirect) {
    navigate("/inventories");
  }
  return (
    <>
      <Header />
      <main className="wrapper">
        <section className="box">
          <form className="form" onSubmit={handleSubmit}>
            <EditNav id={id} title="Edit Inventory Item" showButton={false} />
            <div className="form__card">
              <EditInventoryForm
                className="form__subcard-left"
                sectionTitle="Item Details"
                fields={inventoryFields}
                formData={formData}
                formErrors={formErrors}
                handleChange={handleChange}
              />
              <EditInventoryForm
                className="form__subcard-right"
                sectionTitle="Item Availability"
                fields={availabilityFields}
                formData={formData}
                formErrors={formErrors}
                handleChange={handleChange}
              />
            </div>
            <EditInventoryFooter
              inventoryId={id}
              onReset={handleReset}
              onSubmit={() => {
                handleSubmit();
              }}
              isEditMode
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EditInventory;

function getWarehouseIdByName(inputName, warehouseOptions) {
  const warehouse = warehouseOptions.find(
    (option) => option.warehouseName === inputName
  );
  return warehouse.warehouseId;
}

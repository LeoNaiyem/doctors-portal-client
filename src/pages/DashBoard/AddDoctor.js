import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();
  const [servicesName, setServicesName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services/name")
      .then((res) => res.json())
      .then((data) => {
        setServicesName(data);
        setIsLoading(false);
      });
  }, []);

  const key = process.env.REACT_APP_IMAGE_STORAGE_API_KEY;
  console.log(error);
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          //send doctor's details to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                setIsLoading(false);
                toast.success("Successfully Added The Doctor");
                reset();
              } else {
                toast.error("Failed to Add The Doctor!");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <CircularProgress></CircularProgress>;
  }

  //auto complete field options
  const flatProps = {
    options: servicesName.map((option) => option.name),
  };

  return (
    <>
      <Typography
        sx={{ textAlign: "center", fontWeight: "500", marginTop: "-10px" }}
        variant="h4"
      >
        Add A Doctor
      </Typography>
      <Box sx={{ width: "50%", padding: "2rem" }}>
        <Typography
          sx={{
            color: "#14d1c8",
            textAlign: "center",
            width: "80%",
            fontWeight: "500",
          }}
          variant="h6"
        >
          Doctor's Information
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            sx={{ width: "80%", my: 1, backgroundColor: "white" }}
            type="text"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              maxLength: 20,
            })}
          />
          <TextField
            sx={{ width: "80%", my: 1, backgroundColor: "white" }}
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          <Autocomplete
            {...flatProps}
            sx={{ width: "80%", my: 1, backgroundColor: "white" }}
            id="combo-box-demo"
            renderInput={(params) => (
              <TextField
                {...params}
                {...register("specialty", {
                  required: { value: true, message: "Specialty is required" },
                  maxLength: 20,
                })}
                label="Specialty"
              />
            )}
          />
          <TextField
            sx={{ width: "80%", my: 1, backgroundColor: "white" }}
            type="file"
            id="outlined-basic"
            variant="outlined"
            {...register("image", {
              required: { value: true, message: "Email is required" },
            })}
          />
          <Button
            sx={{ width: "80%", backgroundColor: "#11d1c8", my: "15px" }}
            type="submit"
            variant="contained"
          >
            Add
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddDoctor;

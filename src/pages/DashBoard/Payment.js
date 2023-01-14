import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LU0MsDYhOb0jQR7qnAiJPYWAXrEkuGZ11rw17hcndkLJO25QbEM3ge1RY226Gq9nrw31WCbzLssb5Bvp2t1vzYc00KXIO2y5B"
);

const Payment = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://doctros-protal-server.onrender.com/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return <CircularProgress />;
  }
  const { patientName, serviceName, date, time, price } = appointment;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Paper
        sx={{
          textAlign: "left",
          padding: "1rem 2.5rem",
          width: "50%",
          marginBottom: "3rem",
        }}
        elevation={3}
      >
        <Typography sx={{ fontWeight: 700 }} variant="h5" color="success.main">
          Hello, {patientName}
        </Typography>
        <Typography
          sx={{ fontWeight: 700 }}
          variant="h5"
          color="secondary.main"
        >
          Please Pay For {serviceName}
        </Typography>
        <Typography variant="p">
          Your Appointment on{" "}
          <span style={{ fontWeight: 500, color: "darkblue" }}>{date}</span> at{" "}
          <span style={{ color: "darkblue", fontWeight: 500 }}>{time}</span>
        </Typography>
        <Typography display="block" variant="p">
          Please Pay{" "}
          <span style={{ color: "darkblue", fontWeight: 500 }}>${price}</span>
        </Typography>
      </Paper>
      <Paper
        sx={{ textAlign: "left", padding: "2rem 2.5rem", width: "50%" }}
        elevation={3}
      >
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      </Paper>
    </Box>
  );
};

export default Payment;

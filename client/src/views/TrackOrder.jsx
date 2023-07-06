import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TrackOrder = () => {
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    orderId: "",
  });

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/login/users", {
        email,
        orderId,
      })
      .then(res => history.push("/login"))
      .catch(err => console.error(err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgb(245, 245, 245)",
      }}
    >
      <div style={{ padding: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <img width="250px" src="" alt="Company Logo" />
        </div>
        <div
          style={{
            backgroundColor: "rgb(230, 230, 230)",
            border: "0.5px solid lightGrey",
            padding: "10px",
          }}
        >
          <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
            Track Order
          </h2>
          <p style={{ textAlign: "center", marginBottom: "20px" }}>
            Track your order now. No sign-in required
          </p>
          <form onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <label>Email</label> */}
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  required
                  style={{ padding: "10px" }}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* <label>Order Id</label> */}
                <input
                  type="text"
                  placeholder="Order Id"
                  value={orderId}
                  required
                  style={{ padding: "10px" }}
                  onChange={e => setOrderId(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                marginTop: "25px",
                marginBottom: "10px",
                backgroundColor: "blue",
                color: "white",
                padding: "10px",
                width: "100%",
              }}
            >
              Track Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;

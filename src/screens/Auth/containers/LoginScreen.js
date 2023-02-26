import React, { useContext } from "react";
import { ACCESS_TOKEN } from "../../../constants/preferenceKey";
import { LoginUser } from "../AuthRepository";
import { useNavigate } from "react-router-dom";
import { AuthContext, withAuthProvider } from "../AuthProvider";

function LoginScreen() {
  const { onLogin } = useContext(AuthContext);
  const [formData, setFormData] = React.useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin(formData);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(2, 0, 36)",
        background:
          "90deg, rgba(2,0,36,1) 0%, rgba(38,12,166,0.7419701156829919) 21%, rgba(0,212,255,1) 79%",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          boxShadow: "revert",
          borderRadius: "20px",
          paddingBottom: "5%",
          width: "300px",
          padding: "50px",
          paddingTop: "5%",
          background: "rgba( 255, 255, 255, 0.1 )",
          boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
          backdropFilter: "blur(  14px )",
          WebkitBackdropFilter: "blur( 10px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",

          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <label
          style={{
            textAlign: "center",
            paddingTop: "10%",
            paddingBottom: "5%",
          }}
        >
          Email
        </label>
        <input
          style={{
            borderRadius: "50px",
            boxShadow: "inset 6px 6px 6px #cbced1, inset -6px -6px 6px white",
            borderStyle: "none",
            border: "2px ",
            padding: "5% 7%",
          }}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          name="email"
          type="email"
          placeholder="Enter Your Mail Here..."
        />
        <label
          style={{
            textAlign: "center",
            paddingTop: "10%",
            paddingBottom: "5%",
          }}
        >
          Password
        </label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          style={{
            boxShadow: "inset 6px 6px 6px #cbced1, inset -6px -6px 6px white",
            borderStyle: "none",
            border: "2px",
            borderRadius: "50px",
            padding: "5% 7%",
          }}
          name="password"
          type={"password"}
          placeholder="Enter Your Password Here..."
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="submit"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              backgroundColor: "white",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              width: "50%",
              textAlign: "center",
              marginTop: "10%",
              paddingTop: "4%",
              paddingBottom: "4%",
            }}
          >
            Login
          </button>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <a
            onClick={() => navigate("/auth-signin")}
            style={{
              borderBottom: "1px solid black",
              cursor: "pointer",
            }}
          >
            sign up
          </a>
        </div>
      </form>
    </div>
  );
}

export default withAuthProvider(LoginScreen);

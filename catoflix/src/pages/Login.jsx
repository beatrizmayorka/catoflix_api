import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  
  return (
    <section className="loginContainer">
      <div className="login">
        <div className="facebookContainer">
          <LoginSocialFacebook
            appId="1315199625939638"
            onResolve={(response) => {
              setProfile(response.data);
              localStorage.setItem("profile", JSON.stringify(response.data));
              navigate("/");
            }}
            onReject={(error) => {
              console.log(error);
            }}
            autoLoad
            fields="name,email,picture"
          >
            <FacebookLoginButton
              activeStyle={{ background: "linear-gradient(to bottom right, red, black)" }}
              style={{ background: "linear-gradient(to bottom right, black, red)"}}
            />
          </LoginSocialFacebook>
        </div>
        </div>
    </section>
  )
}

export default Login
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/GoogleLogInSlice";
import { useEffect } from "react";
const GoogleLogIn = () => {
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    console.log ("login with google",userData);
    dispatch(
      logIn({
        name: userData.name,
        picture: userData.picture,
        given_name: userData.given_name,
        email: userData.email,
        email_verified: userData.email_verified,
      })
    );
  };
  const loginDetails = useSelector((state) => state.login);
  useEffect(() => {
    console.log( "login user details",loginDetails);
  }, [loginDetails]);

  return (
    <GoogleLogin
      onSuccess={
        (credentialResponse) => {
          var credentialResponseDecoder = jwtDecode(
            credentialResponse.credential
          );

          console.log(credentialResponseDecoder);
          handleLogin(credentialResponseDecoder);
        }
        //   onClick={()=>handleLogin(credentialResponseDecoder)}
      }
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLogIn;

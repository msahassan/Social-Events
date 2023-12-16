import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import background from '../../assets/Image/background.png'





const Login = () => {
  const { googleLogin, loginUser,forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [loginsuccess, setLoginSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError("");
    setLoginSuccess("");
    // LoginUser
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setLoginSuccess("Successfully Login");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error);
      });
     
  };

  const handleSocialLogin = (media) => {
    media();

    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if(!email){
      console.log("Please provide an email",emailRef.current.value);
      return;
    }
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
      console.log('please write a valid email')
      return;
    }
   //Forget Password
   forgetPassword(email)
   .then(result=>{
    console.log(result.user)
   })
   .then(error =>{
    console.log(error)
   })
  };





  return (
    <div>
      <div className="hero min-h-screen -z-50"  style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
      >
       
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <div className="relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                    required
                  />
                  <span
                    className="absolute bottom-4 right-4"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <label className="label">
                  <a
                    onClick={handleForgetPassword}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              {loginError && <p>{loginError}</p>}
              {loginsuccess && <p>{loginsuccess}</p>}
            </form>
            <div className="flex gap-5 mt-3 justify-center">
              <h1>Do not have an account ? </h1>
              <Link to={"/register"} className="text-orange-600">
                {" "}
                Register
              </Link>
            </div>
            <div className="space-x-4 text-center my-4">
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="btn"
              >
                <FaGoogle />
              </button>
              <button className="btn">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

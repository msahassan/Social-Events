import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaTwitter } from "react-icons/fa"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';
import background from '../../assets/Image/background.png'




const Register = () => {
  const navigate = useNavigate()
const [registerError,setRegisterError] =useState('')
const [success,setSuccess] = useState('')
const [showPassword,setShowPassword] =useState(false)

const { googleLogin , createUser,profile } = useContext(AuthContext);

const handleRegister = e=>{
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const accept = e.target.terms.checked;
  console.log(email,password,name,accept)


  // Error Clear
  setRegisterError('')
  setSuccess('')

  if (password.length < 6) {
    setRegisterError('Password should be at least 6 character')
    return;
  }
  else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)){
  setRegisterError('Password must have uppercase,special character,number')
    return;
  }
  else if (!accept){
    setRegisterError('Please accept our terms and condition')
    return
  }




  // CreateUser
  createUser(email,password)
  .then(result=>{
    console.log(result.user)
   navigate('/login');
   setSuccess(swal('User Created Successfully'))

   //update Profile
    profile(result.user,{
      displayName: name,
      photoURL:'https://example.com/jane-q-user/profile.jpg'
    })
    .then(()=>console.log('profile updated'))
    .catch((error)=>console.log(error))
  })
  .catch(error =>{
    console.error(error)
    setRegisterError(error)
  })
}

const handleSocialLogin = (media) =>{
  media()

  setRegisterError('')
  setSuccess('')
  // Google Login
googleLogin()
.then((result) => {
  console.log(result.user);
  setSuccess('Created Successfully')
})
.catch((error) => {
  console.error(error);
  setRegisterError(error.message)
});
}


      

  return (
    <div className="hero min-h-screen"  style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
      >
     
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="text-center lg:text-left">
    
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
           <div className="relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         
            <input type={showPassword ? "text" : "password" }
          name="password" placeholder="password" 
          className="input input-bordered w-full" 
          required />
          <span className="absolute bottom-4 right-4" onClick={()=>setShowPassword(!showPassword)}>
          {
            showPassword ? <FaEyeSlash/> : <FaEye />
          }
          </span>
          </div>
         
        </div>
       <div>
        
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms"> Accept our <a href="">Terms And Condition</a></label>
       </div>
        <div className="form-control mt-6">
        
         <button className="btn btn-primary">Login</button>
         </div>
         {
          registerError && <p>{registerError}</p>
         }
         {
          success && <p>{success}</p>
         }
       
        
      </form>
    
      <div className="flex gap-5 mt-3 justify-center">
        <h1>Already have an account ! </h1>
        <Link to={'/login'} className="text-orange-600"> Login</Link>
        </div>
        <div className="space-x-4 my-4 text-center">
          <button onClick={()=>handleSocialLogin(googleLogin)} className="btn"><FaGoogle /></button>
          <button className="btn"><FaTwitter /></button>
        </div>
    </div>
  </div>

</div>
    
  );
};

export default Register;

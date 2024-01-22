
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import Stats from './Stats';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      // Redirect to the server endpoint that initiates Google OAuth
      const response = await axios.get('http://localhost:8080/auth/google');
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating Google login:', error);
    }
  };

  return (
    
    <main className="w-full max-w-full p-64 h-screen  max-h-fit space-y-3  bg-[#9b9595]">
      <h1 className="text-2xl font-bold text-center text-[#181818]">Login</h1>
      <form className="space-y-6">
        {/* ... (username and password fields if needed) */}

        <br />
        {/* Google auth */}
        <a href="http://localhost:8080/auth/google">

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="block w-full p-3 text-center rounded-sm bg-[#554f4f] text-[#000000] glass"
          >
          <div className='flex items-center gap-3 justify-center'>
            <span><FaGoogle /></span>
            <p>Sign in with Google</p>
          </div>
        </button>
          </a>
      </form>
      {/* ... (social login buttons and other UI elements) */}
      
      <Stats/>
    </main>
  );
};

export default Login;

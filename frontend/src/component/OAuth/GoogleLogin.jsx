import React, { useEffect } from 'react'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from 'react-hot-toast';
import {useAuth} from '../../context/AuthContext'
import axios from 'axios'

const GoogleLogin = () => {
  const BASE_URL = "http://localhost:8000";
  const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const { user,updateUser} = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      const userCredential = await auth.currentUser;

      if (!userCredential) {
        throw new Error('User authentication failed');
      }
      const { uid, email, displayName,photoURL } = userCredential;

      axios.defaults.withCredentials = true;
      const response = await axios.post(`${BASE_URL}/api/googlelogin`, {
        uid,
        email,
        username:displayName,
        photoURL
    });
       updateUser(response.data.user); 
      toast.success("User login successfully!");
      navigate('/');
    } catch (error) {
      console.error('Google sign-in error:', error);
      toast.error('Failed to login with Google');
    }
  };

//   useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//   }, [user,navigate]);

  return (
    <>
      <p className="social-text loginp"> Sign in with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <div onClick={handleGoogleSignIn}>
            <FontAwesomeIcon icon={faGoogle} className="my-auto mx-auto" />
          </div>
        </a>
      </div>
    </>
  );
}

export default GoogleLogin;

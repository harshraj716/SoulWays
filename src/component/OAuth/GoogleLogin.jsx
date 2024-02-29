import React, { useEffect } from 'react'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import showToast from '../../Utils/toastUtils';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebaseConfig';

const GoogleLogin = () => {

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();

      } catch (error) {
        console.error('Google sign-in error:', error);
        showToast(toast, 'Login failed', error.message, 'error');
      }
    };
  
    useEffect(() => {
      if (user) {
        showToast(toast, 'User Login successfully', null, 'success');
        console.log(user);
        navigate('/home');
      }
    }, [user, navigate, toast]);
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

  )
}

export default GoogleLogin
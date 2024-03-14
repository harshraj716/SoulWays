import React, { useEffect } from 'react'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from 'react-hot-toast';

const GoogleLogin = () => {

    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
         toast.success('user login with Google successfully')
      } catch (error) {
        console.error('Google sign-in error:', error);
        toast.error('failed to login with Google');
    
      }
    };
  
    useEffect(() => {
      if (user) {
        console.log(user);
        navigate('/');
      }
    }, [user, navigate]);
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
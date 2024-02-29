import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (title, description, status) => {
  switch (status) {
    case 'success':
      toast.success(description, { autoClose: 3000 });
      break;
    case 'error':
      toast.error(description, { autoClose: 3000 });
      break;
    default:
      toast(description, { autoClose: 3000 });
  }
};

export default showToast;

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const successNotification = () => toast.success(`Nouvel employé enregistré.`, {
    position: "bottom-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
});

export const errorNotification = () => toast.error(`Veuillez renseigner tous les champs du formulaire.`, {
    position: "bottom-right",
    autoClose: 1700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
});
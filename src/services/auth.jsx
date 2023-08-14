import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

export function useSignUp() {
    const navigate = useNavigate();

    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/signup`, body)
            .then(res => navigate("/"))
            .catch(err => {
                const errorMessage = err.response.data.message || 'Erro desconhecido';
                alert(errorMessage);
            });
    }
}

export function useLogin() {
    const navigate = useNavigate()
    const { setToken, setUserName } = useContext(AuthContext)

    return (body) => {
        axios.post(`${import.meta.env.VITE_API_URL}/signin`, body)
            .then(res => {
                setToken(res.data.token)
                setUserName(res.data.userName)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userName", res.data.userName)
                navigate("/home")
            })
            .catch((err) => alert(err.response.data))
    }
}

export function useLogout() {
    const { setToken, setUserName } = useContext(AuthContext);
    const navigate = useNavigate();

    return () => {
        setToken(undefined);
        setUserName(undefined);
        localStorage.clear();
        navigate("/");
    };
}

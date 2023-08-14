import { Link } from "react-router-dom"
import MeLivreiLogo from "../../components/MeLivreiLogo/MeLivreiLogo"
import useQuickIn from "../../hooks/useQuickIn"
import useForm from "../../hooks/useForm"
import { useSignUp } from "../../services/auth"
import { SingUpContainer } from "./styled"
import { useState } from "react"

export default function SignUpPage() {
    const [error, setError] = useState(null);
    const { form, handleForm } = useForm({ name: "", cpf: "", phone: "", email: "", password: "", confirmPassword: "" })
    useQuickIn()
    const signUp = useSignUp()
    
    function submitForm(e) {
        e.preventDefault()
    
        if (form.cpf.length !== 11 || form.phone.length !== 11) {
            return alert("CPF e telefone devem ter exatamente 11 dígitos!")
        }
    
        if (form.password !== form.confirmPassword) {
            return alert("As senhas não coincidem!")
        }
    
        delete form.confirmPassword
        signUp(form)
        setError(null); 
        signUp(form, setError); 
    }
    

    return (
        <SingUpContainer>
            <form onSubmit={submitForm}>
                {error && <p>{error}</p>}
                <MeLivreiLogo />
                <input
                    required
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                />
                <input
                    required
                    type="number"
                    minLength={11}
                    maxLength={11}
                    placeholder="CPF (somente números)"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleForm}
                />
                <input
                    required
                    type="number"
                    minLength={11}
                    maxLength={11}
                    placeholder="Telefone (somente números)"
                    name="phone"
                    value={form.phone}
                    onChange={handleForm}
                />
                <input
                    required
                    type="email"
                    autoComplete="username"
                    placeholder="E-mail"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />
                <input
                    required
                    minLength={3}
                    type="password"
                    autoComplete="new-password"
                    placeholder="Confirme a senha"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleForm}
                />
                <button type="submit">Cadastrar</button>
            </form>

            <Link to="/">
                Já tem uma conta? Entre agora!
            </Link>
        </SingUpContainer>
    )
}
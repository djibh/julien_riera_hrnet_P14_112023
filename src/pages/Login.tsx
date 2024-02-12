import { FormEvent, useContext } from "react";
import styled from "styled-components";
import { logUserIn } from "../core/api/AuthService"
import AuthContext from "@/context/AuthContext"
import { AxiosResponse } from "axios";
import { User } from "@/types";
import theme from "@/design/theme";

export default function Login() {
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)


  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const user: User = { username: "user", password: "password"} 
    const response: AxiosResponse<User> = logUserIn(user)
    console.log(response.data);
    

    // useEffect(() => {
    //   setIsLoading(true)
    //   const fetchDepartments = async () => {
    //     setDepartments(response.data)
    //   }
    //   fetchDepartments()
    //   .catch(console.error)  
    //   setIsLoading(false)
    // }, [setDepartments])
  }

  return (
    <LoginStyled>
      <div className="login-form__container">
        <img src="/logo2.png" alt="Logo de la société Wealth Health" className="logo"/>
        <form action="submit" className="flex" onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button
            id="submit-btn"
            type="submit"
            aria-label="Send login credentials"
            className="submit-btn"
          >
            Connection
          </button>
        </form>
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  height: 100vh;
  display: grid;

  .login-form__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    background-color: #efefef;
    padding: 2em;
    border-radius: 5px;
    gap: 2em;
    box-shadow: 0px 1px 3px 1px ${theme.colors.cadetGray};
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .logo {
    padding-block: 2em;
    max-width: 130px;
  }

  .username, .password {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
  }

  .submit-btn {
    background-color: #6464f8;
    padding: 10px;
    border-radius: 5px;
    grid-area: 4;
    font-weight: bold;
  }

  input {
    max-width: 180px;
    padding: 7px 10px;
    border-radius: 5px;
    background-color: #dedede;
    border: 1px solid #ccc;
    color: #444;
    font-size: 1.2rem;

    &:focus {
      border: 1px solid ${theme.colors.glaucous};
      outline: transparent;
    }
  }

  button {
    text-align: center;
    font-size: 1.3rem;
  }

  label {
    font-size: 1.2rem;
    color: #444;
  }
`;

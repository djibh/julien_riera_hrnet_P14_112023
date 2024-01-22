import { FormEvent } from "react";
import styled from "styled-components";

export default function Login() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
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
    box-shadow: 0px 2px 3px 3px #252525;
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .logo {
    padding-block: 2em;
    max-width: 150px;
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
    padding: 7px 10px;
    border-radius: 5px;
    background-color: #dedede;
    border: 1px solid #ccc;
    color: #444;
  }

  label, button {
    font-size: 1.4rem;
  }

  input {
    font-size: 1.35rem;
  }

  button {
    text-align: center;
  }

  label {
    color: #444;
  }
`;

import { FormEvent } from "react";
import styled from "styled-components";

export default function Login() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <LoginStyled>
      <div>LOGO</div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button
          id="submit-btn"
          type="submit"
          aria-label="Send login credentials"
        >
          Connection
        </button>
      </form>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

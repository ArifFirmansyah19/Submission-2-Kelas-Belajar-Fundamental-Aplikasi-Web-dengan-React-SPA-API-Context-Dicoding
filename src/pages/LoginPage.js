import React from "react";
import PropTypes from "prop-types";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";

function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section>
            <LoginInput login={onLogin} />
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;

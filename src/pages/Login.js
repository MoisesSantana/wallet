import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Container, Form } from '../styles/LoginStyled';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.updateEmailValue = this.updateEmailValue.bind(this);
    this.updatePasswordValue = this.updatePasswordValue.bind(this);

    this.state = {
      email: '',
      password: '',
      emailVerified: false,
      passwordVerified: false,
    };
  }

  updateEmailValue({ target }) {
    const { value } = target;
    this.setState({ email: value });

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (value.match(emailRegex)) this.setState({ emailVerified: true });
    else this.setState({ emailVerified: false });
  }

  updatePasswordValue({ target }) {
    const { value } = target;
    this.setState({ password: value });

    const maxLength = 6;

    if (value.length >= maxLength) this.setState({ passwordVerified: true });
    else this.setState({ passwordVerified: false });
  }

  render() {
    const {
      email,
      password,
      passwordVerified,
      emailVerified,
    } = this.state;

    const { login: actionForUser } = this.props;

    const validatedInputs = passwordVerified && emailVerified;

    return (
      <Container>
        <Form>
          <legend>Login</legend>
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="exemplo@email.com"
            data-testid="email-input"
            value={ email }
            onChange={ this.updateEmailValue }
          />
          <label htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="minimo 6 dígitos"
            data-testid="password-input"
            value={ password }
            onChange={ this.updatePasswordValue }
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ !validatedInputs }
              onClick={ () => actionForUser(email) }
            >
              Entrar
            </button>
          </Link>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = { login: propTypes.func.isRequired };

const mapDispatchToProps = (dispatch) => ({
  login: (emailValue) => dispatch(login(emailValue)),
});

export default connect(null, mapDispatchToProps)(Login);

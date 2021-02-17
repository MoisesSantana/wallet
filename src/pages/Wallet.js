import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  apiAction,
  updateExpenses,
  deleteExpense,
  updateExpenseData
} from '../actions';
import {
  Container,
  UserInfo,
  Form,
  Table,
  Col,
  ScrollContainer,
} from '../styles/WalletStyled';


class Wallet extends React.Component {
  constructor() {
    super();

    this.updateStateInputs = this.updateStateInputs.bind(this);
    this.getCurrencyList = this.getCurrencyList.bind(this);
    this.newExpensive = this.newExpensive.bind(this);
    this.deleteThisLine = this.deleteThisLine.bind(this);
    this.editExpense = this.editExpense.bind(this);

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { callApi } = this.props;
    callApi();
  }

  getCurrencyList() {
    const { currencies } = this.props;
    const currencyList = Object.keys(currencies);
    return currencyList.filter((currency) => currency !== 'USDT');
  }

  newExpensive() {
    const { saveNewExpensive } = this.props;
    saveNewExpensive(this.state);
  }

  updateStateInputs({ target }) {
    this.setState({ [target.name]: target.value });
  }

  deleteThisLine(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  editExpense(expense) {
    const { updateExpenseData } = this.props;
    updateExpenseData(expense);
  }

  render() {
    const { expenses, email, totalExpense = 0 } = this.props;

    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const currencyList = this.getCurrencyList();

    console.log(expenses);


    return (
      <Container>
        <UserInfo>
          <p>
            Email:
            <span data-testid="email-field">
              { email }
            </span>
          </p>
          <p>
            Despesa Total:
            <span data-testid="total-field">
              { totalExpense }
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </UserInfo>

        <Form>
          <Col>
            <label htmlFor="value">
              Valor
            </label>
            <input
              data-testid="value-input"
              name="value"
              id="value"
              type="number"
              placeholder="ex: 00.00"
              value={ value }
              onChange={ this.updateStateInputs }
            />
          </Col>
          <Col>
            <label htmlFor="description">
              Descrição
            </label>
            <input
              data-testid="description-input"
              name="description"
              id="description"
              type="text"
              placeholder="ex: Compra de mês"
              value={ description }
              onChange={ this.updateStateInputs }
            />
          </Col>
          <Col>
            <label htmlFor="currency">
              Câmbio
            </label>
            <select
              data-testid="currency-input"
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.updateStateInputs }
            >
              {currencyList.map((currentCurrency) => (
                <option key={ currentCurrency } data-testid={ currentCurrency }>
                  { currentCurrency }
                </option>))}
            </select>
          </Col>
          <Col>
            <label htmlFor="method">
              Método
            </label>
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ this.updateStateInputs }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </Col>
          <Col>
            <label htmlFor="tag">
              Chave
            </label>
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.updateStateInputs }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </Col>
          <button
            type="submit"
            onClick={ this.newExpensive }
          >
            Adicionar despesa
          </button>
        </Form>
        <ScrollContainer>
          <Table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Tag</th>
                <th>Método</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Câmbio</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>
                    {expense.description}
                  </td>
                  <td>
                    {expense.tag}
                  </td>
                  <td>
                    {expense.method}
                  </td>
                  <td>
                    {expense.value}
                  </td>
                  <td>
                    {expense.exchangeRates[expense.currency].name}
                  </td>
                  <td>
                    {(expense.exchangeRates[expense.currency].ask
                    * expense.value).toFixed(2)}
                  </td>
                  <td>
                    {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
                  </td>
                  <td>
                    Real
                  </td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={() => this.deleteThisLine(expense.id)}
                  >
                    Apagar
                  </button>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  email: state.user.email,
  totalExpense: state.wallet.totalExpense,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  callApi: () => dispatch(apiAction()),
  saveNewExpensive: (localState) => dispatch(updateExpenses(localState)),
  deleteExpense: (id) => dispatch(deleteExpense(id)),
});

Wallet.propTypes = {
  callApi: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveNewExpensive: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

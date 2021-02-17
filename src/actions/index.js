import api from '../service/api';

export const login = (email) => ({ type: 'LOGIN', value: email });

export const apiAction = () => async (dispatch) => {
  const apiResult = await api();
  return dispatch({ type: 'GET_API', value: apiResult });
};

export const updateExpenses = (newExpense) => async (dispatch) => {
  const apiResult = await api();

  // https://github.com/tryber/sd-07-project-trybewallet/pull/3/files - Rodrigo (Linha: 28 - 31);

  const objectSupport = {};
  objectSupport.exchangeRates = apiResult;
  Object.assign(newExpense, objectSupport);
  return dispatch({ type: 'NEW_EXPENSE', value: newExpense });
};

export const deleteExpense = (id) => ({ type: 'DELETE', value: id });

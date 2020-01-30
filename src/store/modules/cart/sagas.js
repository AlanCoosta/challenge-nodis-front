import { toast } from 'react-toastify';

import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import {
  addToCartSuccess,
  updateAmountSuccess,
  finishCartSuccess,
} from './actions';

export function* addToCart({ payload }) {
  const { id } = payload;

  // Verifica se no state ja existe um produto com o id igual
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  // Verificar se tem em estoque
  const stock = yield call(api.get, `skus/${id}`);

  // Quantidade que tem em estoque
  const stockAmount = stock.data.stock;

  // A quantidade do produto no carrinho
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  // Se a nova quantidade que vai adicionar ao carrinho, for maior que a quantidade em estoque, dar erro
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  // Se existir um produto com o id, pega a posicao dele no array e soma o amout mais 1.
  // Se nao encontrar um id igual, criar um novo, no state e o amount igual a 1.
  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `skus/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

export function* updateAmount({ payload }) {
  const { id, amount } = payload;

  // Se o usuario esta tentando colocar a quantidade no carrinho abaixo de zero, nao permita
  if (amount <= 0) return;

  // Verificar o produto no estoque
  const stock = yield call(api.get, `skus/${id}`);

  // Quantidade do produto disponivel no estoque
  const stockAmount = stock.data.stock;

  // Se a quantidade que o usuario esta solicitando, for maior que a disponivel em estoque, dar erro.
  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export function* finishCart() {
  try {
    yield put(finishCartSuccess());

    toast.success('Parabens pela sua compra, volte sempre!');

    history.push('/success');
  } catch (error) {
    toast.error('Erro, tente mais tarde');
  }
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/FINISH_CART_REQUEST', finishCart),
]);

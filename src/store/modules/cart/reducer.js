import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, draft => {
        const { product } = action.payload;

        draft.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        // Verifica se no state ja existe um produto com o id igual
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        // Se existir, remova
        if (productIndex >= 0) {
          draft.splice(productIndex, 1); // splice para REMOVER
        }
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        // Verifica se no state ja existe um produto com o id igual
        const productIndex = draft.findIndex(
          product => product.id === action.payload.id
        );

        // productIndex, vira o index do produto, ai por isso passar a ser draft[productIndex]
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
      });
    }

    case '@cart/FINISH_CART_SUCCESS': {
      return [];
    }
    default:
      return state;
  }
}

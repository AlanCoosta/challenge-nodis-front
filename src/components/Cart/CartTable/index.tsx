import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdDoNotDisturb,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeFromCart,
  updateAmountRequest,
  finishCartRequest,
} from '../../../store/modules/cart/actions';
import { formatPrice } from '../../../util/format';
import Button from '../../Button';
import { ProductTable, Total } from './styles';

const CartTable: React.FC = () => {
  const dispatch = useDispatch();

  const total = useSelector((state: any) =>
    formatPrice(
      state.cart.reduce(
        (totalSum: any, product: any) =>
          totalSum + product.salePrice * product.amount,
        0
      )
    )
  );

  const cart = useSelector((state: any) =>
    state.cart.map((product: any) => ({
      ...product,
      subtotal: formatPrice(product.salePrice * product.amount),
    }))
  );

  function handleDelete(id: any) {
    dispatch(removeFromCart(id));
  }

  function decrementProduct(product: any) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  function incrementProduct(product: any) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function finishCart() {
    dispatch(finishCartRequest());
  }

  return (
    <>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map((product: any) => (
            <tr key={product.id}>
              <td>
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.title} />
                ) : (
                  <MdDoNotDisturb size={100} color="#eee" />
                )}
              </td>

              <td>
                <strong>{product.title}</strong>

                <span>
                  De:
                  {formatPrice(product.promotionalPrice)}
                </span>
                <span>
                  Por:
                  {formatPrice(product.salePrice)}
                </span>
              </td>

              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrementProduct(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#0db14f" />
                  </button>

                  <input type="number" readOnly value={product.amount} />

                  <button
                    type="button"
                    onClick={() => incrementProduct(product)}
                  >
                    <MdAddCircleOutline size={20} color="#0db14f" />
                  </button>
                </div>
              </td>

              <td>
                <strong>{product.subtotal}</strong>
              </td>

              <td>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(product.id);
                  }}
                >
                  <MdDelete size={20} color="#0db14f" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <Button type="button" onClick={() => finishCart()}>
          <div>Finalizar pedido</div>
        </Button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </>
  );
};

export default CartTable;

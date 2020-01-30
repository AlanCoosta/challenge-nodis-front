import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart, MdDoNotDisturb } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import Skeleton from '../../components/Skeleton/Skeleton-6-cards';
import api from '../../services/api';
import { addToCartRequest } from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import { Container, Box, ProductList, Product } from './styles';

interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  salePrice: number;
  promotionalPrice: number;
  stock: number;
}

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<[Product]>();

  // Buscar do redux a quantidade de items no button ADICIONAR AO CARRINHO, {amount[product.id] || 0} la no  productlist. Reduce faz juntar
  const amount = useSelector((state: any) =>
    state.cart.reduce((sumAmount: any, product: any) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('skus');

      const data = response.data.map((product: Product) => ({
        ...product,
        promotionalPrice: formatPrice(product.promotionalPrice),
        salePrice: formatPrice(product.salePrice),
      }));

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <Box>
        {loading ? (
          <Skeleton />
        ) : (
          <ProductList>
            {products?.map(product => (
              <li key={product.id}>
                <Product to={`product/${product.id}`}>
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} />
                  ) : (
                    <MdDoNotDisturb size={230} color="#eee" />
                  )}

                  <h3>{product.name}</h3>

                  <span>De: {product.promotionalPrice}</span>

                  <span>Por: {product.salePrice}</span>
                </Product>

                <Button
                  type="button"
                  onClick={() => {
                    handleAddProduct(product.id);
                  }}
                >
                  <div>
                    <MdAddShoppingCart size={16} color="#000" />
                    {amount[product.id] || 0}
                  </div>

                  <span>adicionar ao carrinho</span>
                </Button>
              </li>
            ))}
          </ProductList>
        )}
      </Box>
    </Container>
  );
};

export default Main;

import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { MdAddShoppingCart, MdDoNotDisturb } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';

import Button from '../../components/Button';
import ProductNotExist from '../../components/Product/ProductNotExist';
import Skeleton from '../../components/Skeleton/Skeleton-1-cards';
import api from '../../services/api';
import { addToCartRequest } from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import { Container, Box, ProductList, Back } from './styles';

interface Product {
  id: any;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  salePrice: number;
  promotionalPrice: number;
  stock: number;
}

type ProductDetailsParams = {
  id: string; // parameters will always be a strinsg (even if they are numerical)
};

type ProductDetailsProps = RouteComponentProps<ProductDetailsParams>;

const ProductDetails: React.FC<ProductDetailsProps> = ({ match }) => {
  const productId = match.params.id;

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product>();

  // Mostrar a quantidade de items no button ADICIONAR AO CARRINHO, {amount[product.id] || 0} la no  productlist. Reduce faz juntar
  const amount = useSelector((state: any) =>
    state.cart.reduce((sumAmount: any, product: any) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get(`skus/${productId}`);

        setProducts({
          ...response.data,
          promotionalPrice: formatPrice(response.data.promotionalPrice),
          salePrice: formatPrice(response.data.salePrice),
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    loadProducts();
  }, [productId]);

  function handleAddProduct(id: any) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <Box>
        <Back to="/">
          <IoMdArrowBack size={30} color="#0db14f" />
        </Back>

        {loading ? (
          <Skeleton />
        ) : !products ? (
          <ProductNotExist />
        ) : (
          <ProductList>
            <li key={products?.id}>
              <div className="details">
                {products?.imageUrl ? (
                  <img src={products?.imageUrl} alt={products?.name} />
                ) : (
                  <MdDoNotDisturb size={230} color="#eee" />
                )}

                <h3>{products?.name}</h3>

                <p>{products?.description}</p>

                <span>De: {products?.promotionalPrice}</span>
                <span>Por: {products?.salePrice}</span>
              </div>

              <Button
                type="button"
                onClick={() => {
                  handleAddProduct(products?.id);
                }}
              >
                <div>
                  <MdAddShoppingCart size={16} color="#000" />
                  {amount[products?.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </Button>
            </li>
          </ProductList>
        )}
      </Box>
    </Container>
  );
};

export default withRouter(ProductDetails);

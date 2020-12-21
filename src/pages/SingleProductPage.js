import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import { fetchSingleProduct } from '../redux/actions/productsAction';

import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';

const SingleProductPage = ({ Products, fetchSingleProduct }) => {
  const { id } = useParams();
  const history = useHistory();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = Products;

  useEffect(() => {
    if (error) {
      return setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    fetchSingleProduct(`${url}${id}`);
  }, [id, error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return <h1>somoye</h1>;
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

const mapStateToProps = ({ Products }) => ({ Products });

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (url) => dispatch(fetchSingleProduct(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);

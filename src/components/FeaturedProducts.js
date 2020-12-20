import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { connect } from 'react-redux'

const FeaturedProducts = ({ Products }) => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = Products

  if (loading) return <Loading />

  if (error) return <Error />
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
        <div className='section-center featured'>
          {featured.slice(0, 3).map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

const mapStateToProps = ({ Products }) => ({ Products })

export default connect(mapStateToProps)(FeaturedProducts)

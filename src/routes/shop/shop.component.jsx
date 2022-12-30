import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

import './shop.styles.scss';

import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {

  const {  } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      
    </div>
  )
}

export default Shop
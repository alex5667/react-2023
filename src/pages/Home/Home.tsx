import { ProductsList } from 'components/ProductsList';
import React, { Component } from 'react';
import './Home.scss';
import products from 'db/products';
import { Product } from 'db/products';
import SearchBar from 'components/SearchBar';

interface HomeState {
  products: Product[];
  searchedProducts: Product[];
}
interface HomeProps {
  products?: Product[];
}

export class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      products: products,
      searchedProducts: products,
    };
    this.setSearchedProducts = this.setSearchedProducts.bind(this);
  }

  setSearchedProducts(searchedProducts: Product[]) {
    this.setState((state) => {
      return { ...state, searchedProducts: searchedProducts };
    });
  }

  render() {
    return (
      <section className="main__section">
        <div className="main__container">
          <div className="main__content">
            <SearchBar
              products={this.state.products}
              setSearchedProducts={this.setSearchedProducts}
            />
            {this.state.searchedProducts.length ? (
              <ProductsList products={this.state.searchedProducts} />
            ) : (
              <h2> Товары не найдены</h2>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

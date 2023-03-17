import { ProductsList } from 'components/ProductsList/ProductsList';
import React, { Component } from 'react';
import './Home.scss';
import products from 'db/products';
import { Product } from 'db/products';

interface HomeState {
  products: Product[];
  searchQuery: string;
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
      searchQuery: '',
      searchedProducts: products,
    };
    this.setSearchQuery = this.setSearchQuery.bind(this);
    this.searchedProducts = this.searchedProducts.bind(this);
  }

  searchedProducts(searchValue: string): void {
    if (searchValue !== '') {
      const searchResult: Product[] = this.state.products.filter((product) => {
        const title: string = product.title.toLowerCase();
        const brand: string = product.brand.toLowerCase();
        const description: string = product.description.toLowerCase();
        const category: string = product.category.toLowerCase();
        const isExist = (prop: string): boolean => prop.indexOf(searchValue) > -1;
        return isExist(category) || isExist(brand) || isExist(description) || isExist(title);
      });

      this.setState((state) => {
        return { ...state, searchedProducts: searchResult };
      });
    }
  }

  setSearchQuery(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchQuery = e.target.value.toLowerCase();

    this.setState((state) => {
      return { ...state, searchQuery: searchQuery };
    });
    this.searchedProducts(searchQuery);
  }

  render() {
    return (
      <section className="main__section">
        <div className="main__container">
          <div className="main__content">
            <div className="content__search-filter">
              <input
                onClick={() =>
                  this.setState((state) => {
                    return { ...state, searchedProducts: this.state.products };
                  })
                }
                onChange={this.setSearchQuery}
                value={this.state.searchQuery}
                type="search"
                className="search-filter__input"
                placeholder="Search product"
              />
            </div>
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

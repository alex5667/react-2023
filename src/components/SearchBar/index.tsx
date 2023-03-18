import React, { Component } from 'react';
import SearchInput from 'components/UI/input/SearchInput';
import { Product } from 'db/products';

interface SearchBarState {
  searchQuery: string;
}
interface SearchBarProps {
  products: Product[];
  setSearchedProducts: (search: Product[]) => void;
}
export class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.setSearchQuery = this.setSearchQuery.bind(this);
  }

  updateSearchedProducts(searchResult: Product[]): void {
    this.props.setSearchedProducts(searchResult);
  }

  setSearchQuery(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchQuery = e.target.value.toLowerCase();
    this.setState({ searchQuery });

    if (searchQuery) {
      const searchResult: Product[] = this.props.products.filter((product) => {
        const title: string = product.title.toLowerCase();
        const brand: string = product.brand.toLowerCase();
        const description: string = product.description.toLowerCase();
        const category: string = product.category.toLowerCase();
        const isExist = (prop: string): boolean => prop.indexOf(searchQuery) > -1;
        return isExist(category) || isExist(brand) || isExist(description) || isExist(title);
      });
      if (searchResult.length) {
        this.updateSearchedProducts(searchResult);
      } else {
        this.updateSearchedProducts(this.props.products);
      }
    } else {
      this.updateSearchedProducts(this.props.products);
    }
  }

  render() {
    return (
      <div className="content__search-filter">
        <SearchInput
          onChange={this.setSearchQuery}
          value={this.state.searchQuery}
          placeholder="Search product"
        />
      </div>
    );
  }
}

export default SearchBar;

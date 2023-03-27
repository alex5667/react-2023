import React, { Component } from 'react';
import SearchInput from 'components/UI/input/SearchInput';
import { Product } from '../../models/product';

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
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(): void {
    const search = localStorage.getItem('search') ? localStorage.getItem('search') : '';
    this.handleSearch(search as string);
  }

  updateSearchedProducts(searchResult: Product[]): void {
    this.props.setSearchedProducts(searchResult);
  }

  handleSearch(e: React.ChangeEvent<HTMLInputElement> | string): void {
    const searchQuery = typeof e === 'string' ? e : e.target.value.toLowerCase();
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
      localStorage.setItem('search', searchQuery);
      this.updateSearchedProducts(searchResult);
    } else {
      this.updateSearchedProducts(this.props.products);
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('search', this.state.searchQuery);
  }

  render() {
    return (
      <div className="content__search-filter">
        <SearchInput
          onChange={this.handleSearch}
          value={this.state.searchQuery}
          placeholder="Search product"
        />
      </div>
    );
  }
}

export default SearchBar;


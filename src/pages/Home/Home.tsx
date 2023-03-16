import React, { Component } from 'react';
import './Home.scss';

export class Home extends Component {
  render() {
    return (
      <section className="main__section">
        <div className="main__container">
          <div className="main__content">
            <div className="content__search-filter">
              <input
                type="search"
                id="-filter"
                className="search-filter__input"
                placeholder="Search product"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

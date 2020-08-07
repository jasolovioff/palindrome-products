import React, {Component} from 'react';
import { connect } from 'react-redux';

import Product from "./Product";

class SearchResult extends Component {
    render() {
        let products = []
        if(typeof(this.props.searchResult.data) != 'undefined'){
            for(let i = 0; i < this.props.searchResult.data.products.length; i++){
                let product = this.props.searchResult.data.products[i]
                products.push(<Product key={product.id} brand={product.brand} description={product.description} image={product.image} price={product.price} discount={this.props.searchResult.data.discount}/>)
            }
        }
        return (
            <div className="app-container">
                <div className="content-wrapper">
                    <div className="shop-wrapper" style={{marginRight: "5px"}}>
                        <div className="d-flex" style={{marginTop: "-24px"}}>
                            <div className="col-lg-5 col-md-4 d-none d-md-block pt-5 col-padding-12">
                                <p className="mb-10 pt-20" style={{fontSize: "18px"}}>Resultados para <b className="text-capitalize">{this.props.searchResult.searchParam}</b>:</p>
                            </div>
                        </div>
                        <div className="d-flex mb-60">
                            <div className="col-lg-3 col-md-4 d-none d-md-block col-padding-12"></div>
                            <div className="col-lg-9 col-md-8 col-sm-12 col-padding-12">
                                <div className="shop-content">
                                    <div className="ais-Hits">
                                        <ul className="ais-Hits-list">
                                            {products}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ searchResult }) {
    return { searchResult };
}

export default connect(mapStateToProps)(SearchResult);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import lider_logo from '../static/images/lider-logo.svg';
import lider_cart from '../static/images/lider-cart.svg';
import empty_cart from '../static/images/empty-cart.svg';

class Header extends Component{
    state = {};

    constructor(props) {
        super(props);
        this.state = {
            searchParam : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchParamChange = this.handleSearchParamChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.searchProducts(this.state.searchParam);
    }

    handleSearchParamChange(e){
        this.setState({searchParam: e.target.value});
    }

    render() {
        return (
            <section>
                <div className="d-flex">
                    <div id="header" className="header-info"><span>Servicio al cliente de Lider.cl: WhatsApp <a
                        href="https://api.whatsapp.com/send?phone=56957211492&amp;text=Hola!%20Tengo%20una%20consulta">+56957211492</a> | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00</span>
                    </div>
                    <div className="site-header compact" style={{backgroundColor: "rgb(0, 113, 206)"}}>
                        <div className="logo">
                            <a href="https://www.lider.cl/">
                                <img alt="Lider Logo" src={lider_logo}/>
                            </a>
                        </div>
                        <div className="menu-icon-container">
                            <div><i className="zmdi zmdi-menu menu-icon"/>
                                <div className="show-category">Categorías</div>
                            </div>
                        </div>
                        <div style={{width: "100%", margin: "0px 4%"}}>
                            <div className="search-width">
                                <div className="search-box-container-header" style={{paddingTop: "10px"}}>
                                    <section>
                                        <div className="ais-SearchBox">
                                            <form className="ais-SearchBox-form" role="search" onSubmit={this.handleSubmit}>
                                                <input type="search" placeholder="¿Qué estás buscando?" maxLength="512" className="ais-SearchBox-input" onChange={this.handleSearchParamChange}/>
                                                <button type="submit" title="Submit your search query." className="ais-SearchBox-submit search-input-icons">
                                                    <svg className="ais-SearchBox-submitIcon"
                                                         xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                         viewBox="0 0 40 40">
                                                        <path
                                                            d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                                                    </svg>
                                                </button>
                                            </form>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="cart-supermarket-width">
                            <div className="cart-container" style={{backgroundColor: "rgb(6, 86, 143)"}}>
                                <li className="list-inline-item cart-dropdown dropdown nav-item">
                                    <a aria-haspopup="true" href="#" className="p-0 nav-link" aria-expanded="false">
                                        <div id="shoppingCart" className="d-flex justify-content-between shopping-cart-images">
                                            <img alt="cart" src={lider_cart} width="29" height="25"/>
                                            <div className="cart-quantity">
                                                <div id="quantityNumber" className="quantity-number">0</div>
                                            </div>
                                        </div>
                                    </a>
                                    <div tabIndex="-1" role="menu" aria-hidden="true" className="walmart-dropdown-cart dropdown-menu">
                                        <div className="dropdown-content">
                                            <div>
                                                <div className="d-flex pull-right p-2 mr-5">
                                                <span className="cp-no-select">
                                                    <i className="zmdi zmdi-close" style={{fontSize: "20px"}}></i>
                                                </span>
                                                </div>
                                                <div className="text-center p-4">
                                                    <div style={{paddingBottom: "15px"}}></div>
                                                    <img alt="empty-cart" src={empty_cart} />
                                                    <h3 style={{paddingTop: "9px"}}>Tu carro está vacío</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(null, actions)(Header);
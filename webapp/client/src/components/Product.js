import React, {Component} from "react";
import despacho_icon from '../static/images/despacho-icon.svg';
import delivery_icon from '../static/images/delivery-icon.svg';


class Product extends Component {

    priceTag(){
        let referencePrice = "";
        let discountTag = "";
        let finalPrice = this.props.price
        if(this.props.discount > 0){
            referencePrice = <div className="d-flex"><span className="walmart-reference-price">{(finalPrice).toLocaleString('es-CL', {style: 'currency', currency: 'CLP'})}</span></div>;
            discountTag = <div className="walmart-discount-percentage-card" style={{marginTop: "1px", marginLeft: "6px"}}>{this.props.discount*100 + "%"}</div>;
            finalPrice = (finalPrice*(1 - this.props.discount)).toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
        }
        return(
            <div className="mb-12">
                <div className="walmart-sales-price d-flex" style={{display: "flex", alignItems: "center"}}>{(finalPrice).toLocaleString('es-CL', {style: 'currency', currency: 'CLP'})}
                    {discountTag}
                </div>
                {referencePrice}
            </div>
        )
    }
    render() {
        return (
            <li className="ais-Hits-item">
                <div className="">
                    <div className="rct-block  product-block flex-column justify-content-between overflow-hidden bg-white">

                            <div id="1029335" className="overlay-wrap overflow-hidden bg-white"
                                 style={{display: "flex", alignItems: "center", justifyContent: "center", maxHeight: "240px", minHeight: "200px", width: "100%"}}>
                                <div className="text-center">
                                    <div className="product-image-shadow"></div>
                                    <div id="image" className="bg-white">
                                        <img id="lazy-img"
                                             className="img-hover-zoom img-fluid m-auto"
                                             alt={this.props.brand + "-" + this.props.description}
                                             src={"https://" + this.props.image}
                                             style={{filter: "unset", minWidth: "50px", maxHeight: "240px"}} />
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="d-flex text-left product-description mb-15">
                                    <div>
                                        <span className="" style={{fontWeight: "bold", color: "rgb(0, 0, 0)"}}>{this.props.brand}</span> <span>{this.props.description}</span>
                                    </div>
                                </div>
                                {this.priceTag()}
                                <div className="d-flex" style={{position: "absolute", bottom: "70px"}}>
                                    <div className="d-flex home-delivery-container">
                                        <span className="home-delivery-image">
                                            <img alt="homeDeliveryIcon" className="vertical-align" src={despacho_icon} width="17" height="20"/>
                                        </span>
                                        <span className="home-delivery-text">despacho</span>
                                    </div>
                                    <div className="d-flex site-to-store-container">
                                        <span className="site-to-store-image">
                                            <img alt="siteToStoreIcon" className="vertical-align" src={delivery_icon} width="17" height="14" />
                                        </span>
                                        <span className="site-to-store-text">retiro</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="walmart-add-cart-button-container" style={{justifyContent: "center", width: "95%"}}>
                                        <span id="addProductToCart" className="walmart-add-cart-button pt-5 text-center cp-no-select">Agregar</span>
                                    </div>
                                    <div className="walmart-add-cart-button-container-alert"></div>
                                </div>
                            </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default Product;
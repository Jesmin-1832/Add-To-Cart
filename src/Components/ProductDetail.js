
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { IoArrowBackCircle } from "react-icons/io5";
import { addtocart } from "../Redux/Actions/ProductAction";

function ProductDetail() {

    let [product, setProduct] = useState({});
    let ProductID = useParams()
    let [Quanti, SetQuanti] = useState(1);
    let [cart, SetCart] = useState([]);
    let dispatch = useDispatch();


    let submitCartData = (e) => {

        e.preventDefault();

        let DataObj = {
            id: ProductID.id,
            name: product.title,
            image: product.image,
            productQuantity: Quanti,
            price: Math.round(product.price * 83)
        }
        console.log(DataObj);
        console.log(DataObj.productQuantity);

        let pos = cart.findIndex((v, i) => v.id === ProductID.id);
        if (pos == -1) {
            let datacart = [...cart, DataObj];
            SetCart(datacart);
            localStorage.setItem('cart', JSON.stringify(datacart));
            dispatch(addtocart());
            alert("Product Added Successfully..!!")
        }
        else {
            alert("Product are already into cart..!!");
        }
    }

    let getValue = (e) => {
        let v = parseInt(e.target.value);
        console.log(v);
        SetQuanti(v);
    }

    useEffect(() => {
        let getProduct = () => {
            setTimeout(() => {
                fetch("https://fakestoreapi.com/products/" + ProductID.id)
                    .then(async (res) => {
                        let data = await res.json();
                        setProduct(data);
                        // console.log(data);
                    })
                    .catch((err) => {
                        console.log("data not found");
                    });
            }, 1000);
        };


        let getCartProduct = (() => {
            let cartitem = JSON.parse(localStorage.getItem('cart'));
            if (cartitem == null) {
                SetCart([]);
            }
            else {
                SetCart(cartitem);
            }
        })

        getCartProduct();
        getProduct();
    }, setProduct);

    // console.log(product);
    return (
        <div className="container">

            <Link to={"/"} ><Button variant='none' style={{ color: "#5F0F40" }} className="fs-1 position-fixed top-0 start-0  px-3 py-1 border-0"><IoArrowBackCircle /></Button></Link>
            <br />
            <h2>Product Details</h2><br />
            <div className="d-flex align-items-center py-5" style={{ backgroundColor: "white", borderRadius: "10px", width: "100%" }}>
                <div className="w-40" style={{ borderRight: "3px solid black" }}>
                    <img src={product.image} alt="" width={"100%"} height={"500px"} style={{ padding: "50px", borderRadius: "30px", objectFit: "contain" }} />
                </div>
                <div className="w-60 px-3">
                    <div>
                        <h4>{product.title}</h4><br />
                    </div>
                    <div className="d-flex justify-content-center">
                        {product.rating && (
                            <div>
                                <div className="d-flex justify-content-center">
                                    <h5 style={{ marginRight: "10px" }}>₹{Math.round(product.price * 85)}.00 /-</h5>
                                    <h5 style={{ marginLeft: "10px" }}><del>₹ {Math.round(product.price * 85 + 123)}</del></h5>
                                </div><br />
                                <div className="d-flex justify-content-evenly">
                                    <h5>{product.rating.rate} / 5  ⭐</h5>
                                    <h5>{Math.round(product.rating.rate * 537)} Reviews</h5>
                                    <h5>{product.rating.count > 100 ? <span style={{ color: "green" }}>Available Stock</span> : <span style={{ color: "red" }}>Law Stock</span>}</h5>
                                </div><br />
                                <p>{product.description}</p>
                                <form method="post" onSubmit={(e) => submitCartData(e)} className="d-flex w-50 mx-auto">
                                    <input type="hidden" name="productQuantity" value={Quanti} />
                                    <Form.Control type="number" name="productQuantity" min="1" max="10" value={Quanti} onChange={(e) => getValue(e)} aria-describedby="passwordHelpBlock" />
                                    <button className="btn button mx-3" style={{ fontSize: "17px", color: "white", textWrap: "nowrap" }} type="submit">Add To Cart</button>
                                </form>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductDetail;
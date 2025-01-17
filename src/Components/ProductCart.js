
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import {  deletecart } from "../Redux/Actions/ProductAction";
 
function ProductCart() {
    let [cart, setCart] = useState([]);
    let sum = 0;
    let dispatch = useDispatch();

    useEffect(() => {
        let dd = JSON.parse(localStorage.getItem('cart'))
        if (dd == null) {
            setCart([]);
        }
        else {
            setCart(dd);
        }
    }, setCart)


    let deleteData = (pos) => {
        let localdata = JSON.parse(localStorage.getItem('cart'));
        localdata.splice(pos, 1);
        localStorage.setItem('cart', JSON.stringify(localdata));
        setCart(localdata);
        dispatch(deletecart());
    }

    return (
        <>
            <Container><br/>
                <h1 className='mb-5'>Cart Details</h1> <Link to={"/"} ><Button variant='none' style={{ color: "#5F0F40" }} className="fs-1 position-fixed top-0 start-0  px-3 py-1 border-0"><IoArrowBackCircle /></Button></Link>
                <Table striped bordered hover style={{marginBottom:"300px"}} >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quntity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ verticalAlign: "middle" }}>
                        {cart.map((v, i) => {
                            return (
                                <tr>
                                    <td><p>{++i}.</p></td>
                                    <td><p><img src={v.image} width="100px" height="100px" style={{ objectFit: "contain" }} ></img></p></td>
                                    <td><p>{v.name}</p></td>
                                    <td><p>{v.productQuantity}</p></td>
                                    <td style={{ textWrap: "nowrap" }}><p>₹ {v.price} /-</p></td>
                                    <td style={{ textWrap: "nowrap" }}><p>₹ {v.price * v.productQuantity} /-</p></td>
                                    <td><Button className='btn button mb-3' onClick={() => deleteData(--i)}>Delete</Button></td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan={5}>Total Amount</td>
                            <td>
                                {cart.map((v, i) => {
                                    sum = sum + v.price * v.productQuantity;
                                })}
                                <span style={{ textWrap: "nowrap" }}>₹ {sum} /-</span>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ProductCart;

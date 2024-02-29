
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TiShoppingCart } from "react-icons/ti";
import { FaFilter } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
    let datacount = useSelector(state => state.count);
    return (
        <div><br />
            <Navbar expand="lg" className=" p-0 container rounded-3" style={{ background: "white", marginTop: "-50px", border: "1px  solid #5F0F40" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={require("../images/logo2.png")} width={150} height={110} alt='' />
                    </Navbar.Brand>
                    <Form inline>
                        {/* <Row>
                            <Col xs="auto">
                                <Form.Control type="text" placeholder="Search By Name.." className="rounded-1" />
                            </Col>
                            <Col xs="auto">
                                <Button className='button'>Search</Button>
                            </Col>
                            <Col xs="auto" >
                                <Button className='button'>Filter <FaFilter style={{fontSize:"14px"}}/> </Button>
                            </Col>
                        </Row> */}
                    </Form>
                    <div className='position-relative'>
                        <Link to={'/ProductCart'}><TiShoppingCart className='icon' /><span className='cart'>{datacount}</span></Link>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
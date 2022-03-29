import React, { Component } from 'react';

import EmployeeService from '../Service/EmployeeService';
import {Card, CardImg,CardBody, 
    CardTitle, CardSubtitle, CardGroup, CardText, Button,
            Nav, NavItem, NavLink,Col} 
from 'reactstrap'


class ListProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{ 
            this.setState({products: res.data}) 
        });
    }
    render() {
        return (
            <>
                <h2 className='text-center'> Home Page</h2>
                <div style ={{marginTop: "65px",
          marginLeft: "20px",
          width: "13%",
          float: "left"}}>              
                <hr />
                <p>Danh Mục Sản Phẩm</p>
                <Nav vertical>
                <NavItem>
                    <NavLink href="#">Cà Phê</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Trà Sữa</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Sữa Chua</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Nước Ép</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Trà</NavLink>
                </NavItem>
                </Nav>
                <hr />                   
                </div>  

                <div style={{marginTop: "80px",
          width: "80%",
          float: "left",
          marginLeft: "10px"
         }}>
               
               <Col sm="6" lg="6" xl="4" >
                <CardGroup style={{width:"1000px"}}>
                {              
                   this.state.products.map(
                    products => 
                    <Card key = {products.id} >   
                
                        
                        <CardImg
                        alt="Card image cap"
                        src=""
                        top
                        
                        />
                        <CardBody>
                        <CardTitle tag="h5" >
                            {products.firstName}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Type: {products.lastName}
                        </CardSubtitle>
                        <CardText>
                            Name of Product: {products.emailId}
                        </CardText>
                        <CardText>
                            Cost: {products.cost_product} VND
                        </CardText>
                        <Button style = {{backgroundColor: "blue"}} >
                            Buy
                        </Button>
                        <Button style = {{backgroundColor: "blue", marginLeft:"5px"}}>
                            Add To Card
                        </Button>
                        </CardBody>
                          
                    </Card> 
                     
                     ) 
                    }                      
            </CardGroup>   
            </Col>                
                </div>                
            </>
        );
    }
}

export default ListProduct;
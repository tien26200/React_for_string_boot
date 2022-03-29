import React, {Component} from "react";
import EmployeeService from '../Service/EmployeeService';

class CreateEmployeeComponent extends Component{


    constructor(props) {
        super(props)
        this.state = {
            firstName : '',
            lastName: '',
            emailId:''

        }
        this.changeBrandNameHandler = this.changeBrandNameHandler.bind(this)
        this.changeTypeNameHandler = this.changeTypeNameHandler.bind(this)
        this.changeNameProductHandler = this.changeNameProductHandler.bind(this)
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this)
    }
    componentDidMount(){
        EmployeeService.getProductsById(this.state.id).then((res) =>{
            let products = res.data;
            this.setState({
                firstName: products.firstName, 
                lastName: products.lastName,
                emailId: products.emailId

            });

        });

    }
    saveOrUpdateProduct = (e) =>{

        e.preventDefault();
        let products = {firstName: this.state.firstName, lastName: this.state.lastName, 
         emailId: this.state.emailId};
        console.log('products =>' + JSON.stringify(products));
 
        EmployeeService.createProducts(products).then(res =>{
         this.props.history.push('/products');
        });
     }
    //Phan xu ly them ten thuong hieu
    changeBrandNameHandler = (event) =>{

        this.setState({firstName: event.target.value}); // update state
    }
    //Phan xu lý them loai san pham
    changeTypeNameHandler = (event) =>{

        this.setState({lastName: event.target.value}); // update state
    }
    //Phan xu ly them ten san pham
    changeNameProductHandler = (event) => {

        this.setState({emailId: event.target.value}); // update state
    }
    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    //Nut Huy
    cancel(){
        this.props.history.push('/products');
    }
    render(){

        return (

            <div>              
                <div className="container" style = {{marginTop: "10%"}}>
                    <div className="row">
                        <div className ="card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                            <div className="card-body">
                                 <form >
                                     <div className="form-group">
                                        <label> Brand Name</label>
                                        <input placeholder="Brand Name" name=" " className="form-control
                                        " value={this.state.firstName} onChange={this.changeBrandNameHandler}></input> 
                                     </div>

                                     <div className="form-group">
                                        <label> Type Name</label>
                                        <input placeholder="Type Name" name="lastName" className="form-control
                                        " value={this.state.lastName} onChange={this.changeTypeNameHandler}></input> 
                                     </div>

                                        <label> Name Product</label>
                                     <div className="form-group">
                                        <input placeholder="Name Product" name="emailId" className="form-control
                                        " value={this.state.emailId} onChange={this.changeNameProductHandler}></input> 
                                     </div>
                                     <button className="btn- btn-success" onClick={this.saveOrUpdateProduct}> Save </button>
                                     <button className="btn- btn-danger" onClick ={this.cancel.bind(this)} style={{marginLeft: "2px"}}> Cancel</button>
                                 </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateEmployeeComponent

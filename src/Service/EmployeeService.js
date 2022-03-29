import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employees";
const PRODUCT_ADD = "/api/v1/employees"



class EmployeeService{
    

    getEmployees(){
        return axios.get (EMPLOYEE_API_BASE_URL);

    }
    createProducts(products)
    {
        return axios.post(PRODUCT_ADD, products);
    }
    getProductsById(productsId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + productsId);
    }
    updateProduct(products, productsId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + productsId, products)
    }
    deleteEmployee(productsId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + productsId);
    }
}
export default new EmployeeService()
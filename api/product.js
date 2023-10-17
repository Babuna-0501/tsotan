import axios from 'axios';

const url = "https://rest.tsotan.mn";
export default {


    async createProduct(data) {
        return axios.post(`${url}/product/create-with-img`, data);
        // return axios.post(`${url}/product/create-with-img`, data);
    },

    async updateProduct(id, data) {
        // return axios.post(`${url}/product/update/${id}`, data,  {headers: {'Content-Type': 'multipart/form-data'}});
        return axios.post(`${url}/product/update/${id}`, data);
    },

    async getProductList(id) {
        return axios.get(`${url}/product/list/${id}`);
    },

    async view(id) {
        return axios.get(`${url}/product/view/${id}`);
    },

    async detail(id) {
        return axios.get(`${url}/product/detail/${id}`);
    },

    async deleteProduct(id) {
        return axios.delete(`${url}/product/delete/${id}`);
    },

    async getCategories(){
        return axios.get(`${url}/category/list-names`);
    },

    async getCategoriesByParent(id){
        return axios.get(`${url}/category/list/${id}`);
    },

    async createOrder(data){
        return axios.post(`${url}/order/create`, data);
    },

    async createInvoice(id){
        return axios.post(`${url}/invoice/create/${id}`);
    }

};
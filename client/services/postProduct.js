import axios from 'axios';
export default function (file, obj) {
    const formData = new FormData();
    formData.append('productImage', file);
    formData.append('productName', obj.productName);
    formData.append('productDescription', obj.productDescription);
    formData.append('productCategory', obj.productCategory);
    formData.append('productPrice', obj.productPrice);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    return axios.post("http://localhost:5000/products", formData, config);
};
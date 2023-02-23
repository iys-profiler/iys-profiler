import ApiClient from "./ApiClient";

export function getPopularCategories(){
    return ApiClient.get('/ISOT/popular-categories/');
}

export function addProduct(data){
    return ApiClient.post('/product', JSON.stringify(data));
}
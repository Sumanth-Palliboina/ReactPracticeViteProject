import {apiClientInstance} from "./api"

export class ProductService {

    apiClient = apiClientInstance
    static instance = new ProductService()

    constructor(){
        
    }

    static getProducts(path) {
        return ProductService.instance.apiClient.get(path)
    }
}
import {apiInstance} from "./api"

export class ProductService {

    static getProducts(path) {
        return apiInstance().get(path)
    }
}
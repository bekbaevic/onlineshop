import axios from "axios"
import { errorProducts, fetchedProducts, fetchingProducts } from "../reducers/product.slice"
import { errorCategories, fetchedCategories, fetchingCategories } from "../reducers/category.slice"

export async function getProduct(url, dispatch) {
    dispatch(fetchingProducts())
    await axios.get(url)
        .then((res) => dispatch(fetchedProducts(res.data)))
        .catch((err) => dispatch(errorProducts()))
}

export async function getCategory(url, dispatch) {
    dispatch(fetchingCategories())
    await axios.get(url)
        .then((res) => dispatch(fetchedCategories(res.data)))
        .catch((err) => dispatch(errorCategories()))
}
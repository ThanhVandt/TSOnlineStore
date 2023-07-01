import { useEffect, useState } from "react"
import { getAll } from "../api/products"
import Product from "../components/product"
import { getAllCategories } from "../api/categories"
import Category from "../components/category"
import { IProduct } from "../models"

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            setProducts(data)
        } catch (err) {
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [])

    // const [categories, setCategories] = useState<IProduct[]>([])
    // const fetchCategory = async () => {
    //     try {
    //         const { data } = await getAllCategories()
    //         setCategories(data)
    //     } catch (err) {
    //     }
    // }
    // useEffect(() => {
    //     fetchCategory()
    // }, [])

    return <div className="container mx-auto">
        <div className="container">
            <br/>
            <img src="../../public/Rectangle.png" alt="" />
            <br/>
        </div>
        <h1 className="text-lg font-semibold text-slate-500">SẢN PHẨM NỔI BẬT NHẤT</h1><br/>
        <div className="grid grid-cols-7 gap-3">
            {products.map(product => <Product
                data={product}
                key={product._id} />)}
        </div>
        <h1 className="text-lg font-semibold text-slate-500">Category</h1><br/>
        <div className="grid grid-cols-7 gap-3">
            {products.map(category => <Category
                data={category}
                key={category._id} />)}
        </div>
    </div>
}

export default Home
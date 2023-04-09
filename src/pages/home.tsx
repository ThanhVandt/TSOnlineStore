import { useEffect, useState } from "react"
import { getAll } from "../api/products"
import Product from "../components/product"
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

    return <div className="container mx-auto">
        <div className="container">
            <br/>
            <img src="../../public/Rectangle.png" alt="" />
            <br/>
        </div>
        <h1 className="text-lg font-semibold text-slate-500">ĐIỆN THOẠI NỔI BẬT NHẤT</h1><br/>
        <div className="grid grid-cols-7 gap-3">
            {products.map(product => <Product
                data={product}
                key={product.id} />)}
        </div>
    </div>
}

export default Home
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { getAll } from "../../api/products"
import { IProduct } from "../../models"

const Dashboard = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return <>
        <h1 className='text-3xl font-medium text-indigo-700'>Category List</h1>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Name
                        </th>
                        <th
                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                        >
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {products.map(product => (
                        <tr>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                <Link to={`/admin/category/${product._id}`}>
                                    {product.name}
                                </Link>
                            </td>
                            <td className="text-center">
                                <button className="btn bg-red-600 text-white rounded-md p-2" >Xoá</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </>
}

export default Dashboard
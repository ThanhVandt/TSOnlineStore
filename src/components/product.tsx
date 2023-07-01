import {Link} from 'react-router-dom'
import { IProduct } from "../models"

type Props = {
  data: IProduct
}

const Product = ({data}: Props) => {
    return <Link to={`product/${data._id}`} className="block">
    <img
      alt="Art"
      src={data.img}
      className=""
    />
  
    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      {data.name}
    </h3>
  
    <p className="mt-2 max-w-sm font-bold text-red-500">
      Giá: {data.price} VND
    </p>
  </Link>
}

export default Product
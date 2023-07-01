import {Link} from 'react-router-dom'
import { IProduct } from "../models"

type Props = {
  data: IProduct
}

const Category = ({data}: Props) => {
    return <Link to={`category/${data._id}`} className="block">
    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      {data.name}
    </h3>
  
    <p className="mt-2 max-w-sm font-bold text-gray-600">
      {data.price}
    </p>
  </Link>
}

export default Category
import { Outlet, useParams } from 'react-router-dom'
import { getByIdUsers } from '../../api/users';
import { useEffect, useState } from 'react';
import { IProduct } from '../../models';
const AdminLayout = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const { idAdmin } = useParams();
    useEffect(() => {
        const getAdmin = async () => {
            const { data } = await getByIdUsers(String(idAdmin));
            setProduct(data);
        }
        getAdmin()
    }, [idAdmin])

    return <>
        <div className="container mx-auto">
            <h1>Dashboard</h1>
            <Outlet />
            <footer>
                Footer
            </footer>
        </div>
    </>
}

export default AdminLayout
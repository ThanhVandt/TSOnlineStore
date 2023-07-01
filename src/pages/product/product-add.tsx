import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import { add } from '../../api/products';
import { addForm, addSchema } from '../../models';

const ProductAdd = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addSchema),
    })
    const onSubmit = async (data: addForm) => {
        try {
            const response = await add(data)
            console.log(response);
            alert("Thêm thành công!")
            navigate('/admin')
        } catch (err) {
            console.log(err);
        }
    }
    return <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
        <h1 className='text-3xl font-medium text-indigo-700'>Add Product</h1>
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
                <div className="lg border:col-span-2 lg border:py-12">
                </div>
                <div className="rounded-lg border bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
                    <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Name</label>
                            <input
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm" type="text"  {...register("name")}
                            />
                            <p className='text-red-600 text-[10px]'>
                                {errors.name && errors.name.message}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label>Giá</label>
                                <input
                                    className="w-full rounded-lg border border-gray-200 p-3 text-sm" {...register("price")}
                                    type="number"
                                />
                                <p className='text-red-600 text-[10px]'>
                                    {errors.price && errors.price.message}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label>Mô tả</label>
                            <textarea
                                className="w-full rounded-lg border border-gray-200 p-3 text-sm" {...register("description")}
                            ></textarea>
                            <p className='text-red-600 text-[10px]'>
                                {errors.description && errors.description.message}
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Thêm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default ProductAdd
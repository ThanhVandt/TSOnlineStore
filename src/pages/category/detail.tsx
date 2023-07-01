const Detail = () => {
    return <>
    <div className="container mx-auto">
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div>
                <h1 className="text-2xl font-bold lg:text-3xl">Samsung Galaxy A73 (5G) 256GB</h1>
            </div>
            <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
                <div className="lg:col-span-3">
                    <div className="relative mt-4">
                        <img
                            src="../../public/Rectangle-11.jpg"
                            className="h-100 rounded-xl object-cover"
                        />
                    </div>
                    <ul className="mt-1 flex gap-1">
                        <li>
                            <img
                                alt="Tee"
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-16 w-16 rounded-md object-cover"
                            />
                        </li>

                        <li>
                            <img
                                alt="Tee"
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-16 w-16 rounded-md object-cover"
                            />
                        </li>

                        <li>
                            <img
                                alt="Tee"
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-16 w-16 rounded-md object-cover"
                            />
                        </li>

                        <li>
                            <img
                                alt="Tee"
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="h-16 w-16 rounded-md object-cover"
                            />
                        </li>
                    </ul>
                </div>

                <div className="lg:sticky lg:top-0">
                    <form className="space-y-4 lg:pt-8">
                        <fieldset>
                            <legend className="text-lg font-bold">Color</legend>

                            <div className="mt-2 flex flex-wrap gap-1">
                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="color_green"
                                        name="color"
                                        className="peer sr-only"
                                        checked
                                    />

                                    <span
                                        className="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                    ></span>
                                </label>

                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="color_blue"
                                        name="color"
                                        className="peer sr-only"
                                    />

                                    <span
                                        className="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                    ></span>
                                </label>

                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="color_pink"
                                        name="color"
                                        className="peer sr-only"
                                    />

                                    <span
                                        className="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                    ></span>
                                </label>

                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="color_red"
                                        name="color"
                                        className="peer sr-only"
                                    />

                                    <span
                                        className="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                    ></span>
                                </label>

                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="color_indigo"
                                        name="color"
                                        className="peer sr-only"
                                    />

                                    <span
                                        className="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"
                                    ></span>
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="text-lg font-bold">Material</legend>

                            <div className="mt-2 flex flex-wrap gap-1">
                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="material_cotton"
                                        name="material"
                                        className="peer sr-only"
                                        checked
                                    />

                                    <span
                                        className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                    >
                                        Cotton
                                    </span>
                                </label>

                                <label className="cursor-pointer">
                                    <input
                                        type="radio"
                                        id="material_wool"
                                        name="material"
                                        className="peer sr-only"
                                        checked
                                    />

                                    <span
                                        className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100"
                                    >
                                        Wool
                                    </span>
                                </label>
                            </div>
                        </fieldset>

                        <div className="rounded border bg-gray-100 p-4">
                            <p className="text-sm">
                                <span className="block"> Pay as low as $3/mo with 0% APR. </span>

                                <a href="" className="mt-1 inline-block underline"> Find out more </a>
                            </p>
                        </div>

                        <div>
                            <p className="text-xl font-bold">11.690.000 ₫</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
                        >
                            Add to cart
                        </button>

                        <button
                            type="button"
                            className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                        >
                            Notify when on sale
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-3">
                    <div className="prose max-w-none">
                        <p>
                            Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="bg-slate-200">
                <h2 className="text-red-700">ĐẶC ĐIỂM NỔI BẬT</h2>
                <p>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                <p>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
                <p>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
            </div>
            <div className="">
                <p>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
                <h2>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h2>
                <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
                <h3>Thiết kế sang trọng, màn hình Super AMOLED</h3>
                <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                <p>Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
                <p>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>

            </div>
        </div>
    </div>
    </>
}
export default Detail
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500">
            <div className="container mx-auto flex items-center gap-4">
                <img className="w-[50px]" src="/logo.png" alt="" />
                <input className="grow rounded" type="text" placeholder="search" />
            </div>
        </header>
        {/* Content */}
        <Outlet />
        {/* Footer */}
        <footer className="">
            <div className="bg-slate-200 text-xs pl-[100px] pt-[50px] pb-[50px]">
                <div className="bg-slate-200 columns-3">
                    <div className="col">
                        <p>Điện thoại iPhone 13 Điện thoại iPhone 12 Điện thoại iPhone 11</p>
                        <p>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</p>
                        <p>iPhone cũ giá rẻ- iPhone 13 cũ- iPhone 12 cũ- iPhone 11 cũ</p>
                    </div>
                    <div className="col">
                        <p>Điện thoại iPhone- Điện thoại Samsung- Điện thoại Samsung A</p>
                        <p>Điện thoại OPPO- Điện thoại Xiaomi- Điện thoại Vivo- Điện thoại Nokia</p>
                        <p>Samsung Fold 3 Samsung S22 Samsung A73 Samsung A53</p>
                    </div>
                    <div className="col">
                        <p>Laptop-Laptop HP-Laptop Dell-Laptop Acer</p>
                        <p>Microsoft Surface Laptop Lenovo Laptop Asus</p>
                        <p>Máy tính để bàn Màn hình máy tính Camera Camera hành trình</p>
                    </div>
                </div>
                <p className="text-center text-slate-500 mt-[30px]">Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
            </div>
        </footer>
    </>
}

export default UserLayout
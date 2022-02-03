import React from "react";
import {
    LogoIcon,
    DashboardIcon,
    OrdersIcon,
    ProductsIcon,
    MarketingIcon,
    RatesIcon,
    ReportsIcon,
} from "../../assets/svgs/SidebarIcons";

const Sidebar = () => {
    return (
        <div className=" bg-[#5840BB] h-screen  min-h-full w-80  rounded-tl-[20px]}">
            <div className="flex mb-20 ml-20 pt-9">
                {LogoIcon}
                <div className="ml-5 text-white font-bold">ForShop</div>
            </div>

            <div className="ml-20">
                <div className="flex mb-10">
                    {DashboardIcon}
                    <div>
                        <div className="bg-white ml-8 text-[#5840BB]">
                            Dashboard
                        </div>
                    </div>
                </div>

                <div className="flex mb-10">
                    {OrdersIcon}
                    <div>
                        <div className="text-white ml-8">Orders</div>
                    </div>
                </div>

                <div className="flex mb-10">
                    {ProductsIcon}
                    <div>
                        <div className="text-white  ml-8">Products</div>
                    </div>
                </div>

                <div className="flex mb-10">
                    {MarketingIcon}
                    <div>
                        <div className="text-white ml-8">Marketing</div>
                    </div>
                </div>

                <div className="flex mb-10">
                    {RatesIcon}
                    <div>
                        <div className="text-white ml-8">Rates</div>
                    </div>
                </div>

                <div className="flex mb-10">
                    {ReportsIcon}
                    <div>
                        <div className="text-white ml-8">Reports</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

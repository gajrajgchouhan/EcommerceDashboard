import React from "react";

const LogoIcon = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0ZM10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2ZM15 11C15 12.3261 14.4732 13.5979 13.5355 14.5355C12.5979 15.4732 11.3261 16 10 16C8.67392 16 7.40215 15.4732 6.46447 14.5355C5.52678 13.5979 5 12.3261 5 11H15Z"
            fill="white"
        />
    </svg>
);
const Sidebar = () => {
    return (
        <div class=" bg-[#5840BB] h-screen  min-h-full w-80  rounded-tl-[20px]}">
            <div class="flex mb-20 ml-20 pt-9">
                {LogoIcon}
                <div class="ml-5 text-white font-bold">ForShop</div>
            </div>

            <div class="ml-20  ">
                <div class="flex mb-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                    </svg>
                    <div class=" ">
                        <button class="text-black  hover:text-[#5840BB] bg-white ml-8">
                            Dashboard
                        </button>
                    </div>
                </div>
                <div class="flex mb-10">
                    <svg
                        width="27"
                        height="21"
                        viewBox="0 0 27 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.4939 0.443115V1.34371C11.4939 2.4499 12.3938 3.34986 13.5 3.34986C14.6062 3.34986 15.5061 2.4499 15.5061 1.34371V0.443115H19.5504L27 8.15645L22.0603 13.0962L20.0687 11.0125V20.5568H6.93128V11.0124L4.93971 13.0962L0 8.15639L7.44964 0.443115H11.4939ZM4.91059 10.5198L8.73248 6.52088V18.7555H18.2675V6.52088L22.0894 10.5198L24.4747 8.13447L18.7859 2.24431H17.1997C16.7941 3.91039 15.2892 5.15106 13.5 5.15106C11.7108 5.15106 10.2059 3.91042 9.80026 2.24431H8.21412L2.52531 8.13447L4.91059 10.5198Z"
                            fill="white"
                        />
                    </svg>

                    <div>
                        <button class="text-white  ml-8">Product</button>
                    </div>
                </div>

                <div class="flex mb-10">
                    <svg
                        width="22"
                        height="24"
                        viewBox="0 0 22 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21.3317 5.62161L15.7101 0H0.668945V24H21.3317V5.62161ZM16.2131 2.93176L18.4 5.1186H16.2131V2.93176ZM19.6143 22.2826H2.38633V1.71739H14.4958V6.83598H19.6143V22.2826Z"
                            fill="white"
                        />
                    </svg>
                    <svg
                        width="6"
                        height="5"
                        viewBox="0 0 6 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.35117 2.36942L1.67628 1.69451L0.461914 2.90888L2.35117 4.79815L5.47209 1.67726L4.25772 0.462891L2.35117 2.36942Z"
                            fill="white"
                        />
                    </svg>

                    <div class="ml-167">
                        <button class="text-white ml-8">Order</button>
                    </div>
                </div>

                <div class="flex mb-10">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.4556 16.8005L22.0586 19.6126V14.4389C22.3657 14.1832 22.6457 13.8729 22.8948 13.5116C23.6075 12.4775 24 11.1171 24 9.68114C24 8.24515 23.6075 6.88479 22.8948 5.8507C22.6457 5.48937 22.3657 5.17914 22.0586 4.92342V0.412354L5.58877 4.93195H0V14.911H4.91302C4.98807 16.4397 5.38832 20.5681 7.51757 22.905L8.13948 23.5876L11.0459 20.0664L10.8447 19.6135C10.8414 19.6059 10.6906 19.2601 10.5232 18.6353C10.6087 18.5953 10.6965 18.5509 10.7858 18.5014C11.3152 18.2083 11.982 17.6889 12.4556 16.8005ZM6.49759 6.34363L20.4567 2.51298V4.15408V5.80937V13.5528V15.2081V17.4744L8.4702 13.9644V15.0335C8.4702 17.3239 8.93361 19.0083 9.19972 19.7867L8.13562 21.0759C6.52351 18.5198 6.49767 14.3732 6.49762 14.3277V6.34363H6.49759ZM22.3982 9.68111C22.3982 10.3924 22.2737 11.0672 22.0586 11.6521V7.71011C22.2737 8.29502 22.3982 8.96981 22.3982 9.68111ZM1.60185 6.5338H4.89577V13.3092H1.60185V6.5338ZM10.1986 16.9847C10.1626 16.7125 10.1323 16.4218 10.1103 16.1138L10.8636 16.3343C10.6605 16.6211 10.4262 16.8313 10.1986 16.9847Z"
                            fill="white"
                        />
                    </svg>

                    <div class="ml-167">
                        <button class="text-white ml-8">Marketing</button>
                    </div>
                </div>

                <div class="flex mb-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                    </svg>
                    <div class="ml-167">
                        <button class="text-white ml-8">Rates</button>
                    </div>
                </div>

                <div class="flex mb-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <div>
                        <button class="text-white ml-8">Reports</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

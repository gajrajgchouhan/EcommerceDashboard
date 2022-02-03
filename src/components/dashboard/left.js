import {
    NoteBookIcon,
    PiggyBankIcon,
    ChevronDown,
} from "../../assets/svgs/index";
import Chart from "react-apexcharts";

const Left = () => {
    const optionsMixedChart = {
        chart: {
            toolbar: {
                show: false,
            },
            background: "white",
            curve: "smooth",
        },
        stroke: {
            width: 4,
            colors: "#FFE5EE",
            strokeColors: "#5840BB",
        },
        xaxis: {
            categories: ["", "Week 1", "Week 2", "Week 3", "Week 4"],
            labels: {
                style: {
                    fontSize: "14px",
                    fontWeight: "500",
                    colors: "#A0AAC8",
                },
            },
        },
        grid: {
            // row: { colors: "#F3F6FF" },
            // column: { colors: "#F3F6FF" },
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        markers: {
            size: 6,
            strokeWidth: 3,
            fillOpacity: 0,
            strokeOpacity: 0,
            hover: {
                size: 8,
            },
        },
        yaxis: {
            tickAmount: 6,
            min: 0,
            max: 100,
            labels: {
                style: {
                    fontSize: "14px",
                    fontWeight: "500",
                    colors: "#A0AAC8",
                },
            },
        },
    };
    const seriesMixedChart = [
        {
            name: "series-1",
            type: "line",
            data: [30, 40, 25, 50, 49],
        },
    ];

    return (
        <div className="flex flex-col w-[53rem] text-[#42427D]">
            <div className="text-5xl flex mb-12">
                <div className="mr-1">Welcome, </div>
                <div className="ml-1 font-bold">Damian</div>
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="my-6 mr-3">
                    <div className="flex bg-[#C7F2FF] w-[320px] h-[152px] pl-10 pr-9 py-12 rounded-[10px] rounded-tl-[50px] rounded-br-[50px]">
                        <div className="flex bg-white p-4 rounded-sm rounded-tl-2xl rounded-br-2xl fill-[#42427D] h-14 w-14">
                            <div className="m-auto">
                                <NoteBookIcon />
                            </div>
                        </div>
                        <div className="flex flex-col ml-8 mr-3">
                            <div className="text-3xl font-bold">23 789</div>
                            <span className="font-medium text-base">
                                Orders
                            </span>
                        </div>
                        <div className="font-bold text-white bg-[#42427D] p-1 rounded-sm rounded-tl-xl rounded-br-xl w-12 h-8 text-center text-base align-middle">
                            +20
                        </div>
                    </div>
                </div>
                <div className="my-6 ml-3">
                    <div className="flex bg-[#FFE5EE] w-[440px] h-[152px] pl-10 pr-9 py-12 rounded-[10px] rounded-tr-[50px] rounded-bl-[50px]">
                        <div className="flex bg-white p-4 rounded-sm rounded-tl-2xl rounded-br-2xl fill-[#42427D] h-14 w-14">
                            <div className="m-auto">
                                <PiggyBankIcon />
                            </div>
                        </div>
                        <div className="flex flex-col ml-8 mr-3">
                            <div className="text-3xl font-bold">
                                $ 12 890,89
                            </div>
                            <span className="font-medium text-base">
                                Profit
                            </span>
                        </div>
                        <div className="font-bold text-white bg-[#42427D] p-1 rounded-sm rounded-tl-xl rounded-br-xl w-24 h-8 text-center  text-base align-middle">
                            +$ 840,00
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <div className="text-[#42427D] font-bold text-2xl align-top">
                        Sales statistics
                    </div>
                    <div className="border-2 px-5 rounded-md py-4 rounded-tl-[20px] border-[#42427D] rounded-br-[20px] w-36 h-14 flex font-medium text-base justify-between">
                        <span>Monthly</span> <ChevronDown />
                    </div>
                </div>
                <div className="h-[29rem] w-100">
                    <Chart
                        options={optionsMixedChart}
                        series={seriesMixedChart}
                        type="line"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default Left;

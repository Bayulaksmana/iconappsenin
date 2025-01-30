"use client"
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    //pv: 2400,
    fill: "white",
  },
  {
    name: "Laki-Laki",
    count: 50,
    //pv: 2400,
    fill: "#FAE27C",
  },
  {
    name: "Perempuan",
    count: 50,
    //pv: 4567,
    fill: "#C3EBFA",
  }];
//  {
//     name: "30-34",
//     uv: 15.69,
//     pv: 1398,
//     fill: "#8dd1e1",
//   },
//   {
//     name: "35-39",
//     uv: 8.22,
//     pv: 9800,
//     fill: "#82ca9d",
//   },
//   {
//     name: "40-49",
//     uv: 8.63,
//     pv: 3908,
//     fill: "#a4de6c",
//   },
//   {
//     name: "50+",
//     uv: 2.63,
//     pv: 4800,
//     fill: "#d0ed57",
//   },
//   {
//     name: "unknow",
//     uv: 6.67,
//     pv: 4800,
//     fill: "#ffc658",
//   },
// ];

// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* {TITLE - Penamaan Setiap Section} */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Employed</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* {GRAFIK Modern} */}
      <div className="relative w-full h-[75%]">
         <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
            //   minAngle={15}
            //   label={{ position: "insideStart", fill: "#fff" }}
              background
            //   clockWise
              dataKey="count"
            />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
            //   wrapperStyle={style}
            /> */}
          </RadialBarChart>
        </ResponsiveContainer> 
        <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      {/* {grafik bagian bawah - Keterangan} */}
      <div className="flex justify-center gap-10 lg:flex-row">
        <div className="flex flex-col gap-1 items-center">
            <div className="w-5 h-5 bg-lamaSky rounded-full ml-3" />
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-xs text-gray-300">Laki-laki (55%)</h2>
        </div>
        <div className="flex flex-col gap-1 items-center">
            <div className="w-5 h-5 bg-LamaYellow rounded-full ml-3" />
            <h1 className="font-bold items-center">1,234</h1>
            <h2 className="text-xs text-gray-300">Perempuan (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;

import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import { date } from "zod";

const SinglePegawaiPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Bagian Kiri */}
      <div className="w-full xl:w-2/3">
        {/* Profil Bagian Atas */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Info Card */}
          <div className="bg-lamaSky py-6 px-2 rounded-md flex flex-1 gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={130}
                height={10}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">Roberto Agus</h1>
                <FormModal
                  table="pegawai"
                  type="update"
                  data={{
                    id: 1,
                    nip: "1234567890",
                    username: "John.Doe",
                    name: "John Doe",
                    email: "john@doe.com",
                    img: "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    phone: "1234567890",
                    date: "22-04-1993",
                    jabatan: ["Technical Support"],
                    aplikasi: ["SMAR", "FIX", "DIGIPROC"],
                    gender: "Female",
                  }}
                />
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Technical Support Grade II <br />
                Ops Daily Activity Monitoring System
              </p>
              <div className="flex items-center justify-between gap-1 flex-wrap text-xs font-medium">
                <div className="w-full md:w-2/3 lg:w-full 2xl:w-2/3 flex flex-nowrap items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>12 Januari 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>roberto.agus@iconpln.co.id</span>
                </div>
                <div className="w-full md:w-2/3 lg:w-full 2xl:w-2/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+62 852 9833</span>
                </div>
              </div>
            </div>
          </div>
          {/* User Info Small Card */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap font-semibold">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm to-gray-400">Kehadiran</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm to-gray-400">Cuti</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm to-gray-400">Lembur</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm to-gray-400">Izin - Sakit</span>
              </div>
            </div>
          </div>
        </div>
        {/* Profil Bagian Bawah */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="font-semibold">Rekapitulasi Kehadiran Pegawai</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Bagian Kanan */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="">
              Pengajuan Cuti
            </Link>
            <Link className="p-3 rounded-md bg-LamaPurpleLight" href="/forms/cuti">
              Pengajuan Lembur 
            </Link>
            <Link className="p-3 rounded-md bg-LamaYellowLight" href="/lembur">
              Pengajuan Lembur
            </Link>
            <Link className="p-3 rounded-md bg-lamaSky" href="/download">
              Download
            </Link>
          </div>
        </div>
        <Performance />
        <Announcement />
      </div>
    </div>
  );
};

export default SinglePegawaiPage;

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  cuti: z.enum(["tahunan", "khusus"], {
    message: "Leave must select in option*",
  }),
  name: z.string().min(2, { message: "Required is fullname!*" }),
  nip: z.string().min(2, { message: "Required a NIP" }),
  jabatan: z.string().min(2, { message: "Is qreuired position" }),
  kuota: z.string().min(2, { message: "Is qreuired position" }),
  startdate: z.date({ message: "Start leave is required" }),
  enddate: z.date({ message: "end leave is required" }),
  keterangan: z.string() .min(160, {message: "Reason for leeave must be entered"})
});

type Inputs = z.infer<typeof schema>;

const CutiForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Add for leave breaks</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-2 mt-[-20px]">
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Jenis Cuti</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("cuti")}
            defaultValue={data?.cuti}
            id=""
          >
            <option value="male">Cuti Tahunan</option>
            <option value="female">Cuti Khusus</option>
          </select>
          {errors.cuti?.message && (
            <p className="text-xs text-red-400">
              {errors.cuti.message.toString()}
            </p>
          )}
        </div>
      </div>
      <span className="text-xs text-gray-400 font-medium mt-[-13px]">
        Detail Members Info
      </span>
      <div className="flex justify-between flex-wrap gap-4 mt-[-20px]">
        <InputField
          label="Nama Lengkap"
          name="Nama Lengkap"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        <InputField
          label="NIP"
          name="NIP"
          defaultValue={data?.nip}
          register={register}
          error={errors?.nip}
        />
        <InputField
          label="Jabatan"
          name="Jabatan"
          defaultValue={data?.jabatan}
          register={register}
          error={errors?.jabatan}
        />
        <InputField
          label="Start Date"
          type="date"
          name="Start Date"
          defaultValue={data?.startdatedate}
          register={register}
          error={errors?.startdate}
        />
        <InputField
          label="End Date"
          type="date"
          name="End Date"
          defaultValue={data?.enddate}
          register={register}
          error={errors?.enddate}
        />
      </div>

      <button className="bg-lamaSky text-cyan-700 p-2 rounded-md self-center font-semibold">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default CutiForm;

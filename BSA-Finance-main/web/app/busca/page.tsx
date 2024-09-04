import { Info } from "../interface/info";
import { Caller } from "../utils/caller";
import { Data } from "../utils/data";
import { Validator } from "../utils/validator";
import ViewSwitcher from "./view-switcher";
import Image from "next/image";

export default async function Busca({ searchParams }:{ searchParams:any }) {
  let data: Info[] = [];
  const entity: string = searchParams.entity;
  const service: string = searchParams.service;

  if (Validator.validate(entity, service)) {
    data = await Caller.fetchData(entity, service);
  } else console.error("invalid search");

  return (
    <div className="grid justify-items-center p-4">
      <div className="w-full max-w-screen-md">
        <Image src={"/blue-logo.png"} width={100} height={100} alt={"logo"} />
        <ViewSwitcher data={data} />
      </div>
    </div>
  )
}

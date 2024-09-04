import { Caller } from "../utils/caller";
import { Validator } from "../utils/validator";

import CardList from "./card-list";

export default async function Result({ searchParams }:{ searchParams:any }) {
  let data: any[] = [];
  const entity: string = searchParams.entity;
  const service: string = searchParams.service;

  if (Validator.validate(entity, service)) 
    data = await Caller.fetchData(entity, service);
  else console.error("invalid search");

  return (
    <div>
      <CardList data={data} />
    </div>
  )
}

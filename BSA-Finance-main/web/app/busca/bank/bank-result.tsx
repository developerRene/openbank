import Image from "next/image";

export default function BankResult({ data }:{ data:any }) {
    return (
        <div>
            <div className="flex items-center justify-center gap-4 text-xl font-bold">
                <Image src={`/logos/${data[0].logo}.svg`} className="rounded" width={100} height={100} alt={"logo"} />
                <h1 className="text-center text-balance p-4">{data[0].companyName}</h1>
            </div>
            <table className="table-auto border-collapse w-full">
                <tbody>
                    {data.map((d:any, key:number) => {
                        return <tr className="odd:bg-gray-100" key={key}>
                            <td className="border px-4 py-2 text-xs md:text-base break-all">{d.type}</td>
                            <td className="border px-4 py-2 text-xs md:text-base">{(d.avg * 100).toFixed(2)}%</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <p>* Valores atualizados até xx/xx/xxxx</p>
        </div>
    )
}

import LOGO from '@/public/logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-blue-900 flex flex-col h-screen items-center justify-evenly'>
      <Image src={LOGO} width={250} height={250} alt={"logo"} />
      <form action="/busca" className='flex flex-col items-start gap-4'>
        <div>
          <label htmlFor="entity-select" className='text-emerald-300'>Tipo: </label>
          <select name="entity" id="entity-select">
            <option value="personal">Pessoa Física</option>
            <option value="business">Pessoa Jurídica</option>
          </select>
        </div>
        <div>
          <label htmlFor="service-select" className='text-emerald-300'>Serviço: </label>
          <select name="service" id="service-select">
            <option value="loans">Empréstimos</option>
            <option value="financings">Financiamento</option>
            <option value="credit-cards">Cartões de Crédito</option>
            <option value="invoice-financings">Desconto de títulos</option>
          </select>
        </div>
        <input className='self-center bg-emerald-300 text-blue-900 p-3 rounded' type="submit" value="Buscar" />
      </form>
    </div>
  )
}

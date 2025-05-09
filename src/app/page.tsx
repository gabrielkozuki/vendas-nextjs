import SellingList from "@/components/sellinglist";

export default function Page() {
  return (
    <div className="container mx-auto p-4 mt-6 max-w-4xl">
      <h1 className="text-3xl text-black-700 font-bold mb-2 ">Listagem de Vendas</h1>
      <p className="mb-4">Gerencie suas vendas com facilidade e praticidade</p>
      <SellingList />
    </div>
  )
}
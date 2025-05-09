"use client";

import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCaption } from "@/components/ui/table";

import { useSelling } from "@/context/sellingcontext";
import SellingRow from "@/components/sellingrow";
import { useNavigation } from "@/hooks/usenavigation";

export default function SellingList() {
  const { navigateTo } = useNavigation();
  const { sellings } = useSelling();

  return (
    <>
      <Button className="my-6" onClick={() => navigateTo("/create-selling")}>Novo</Button>
      {sellings.length === 0 ? (<p className="text-center text-gray-500">Nenhuma venda cadastrada.</p>)
        : (
          <Table className="w-full border border-gray-200 rounded-lg shadow-sm">
            <TableCaption>Lista de vendas cadastradas.</TableCaption>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead className="px-4 py-2 text-left text-black font-semibold">Nome</TableHead>
                <TableHead className="px-4 py-2 text-left text-black font-semibold">Valor</TableHead>
                <TableHead className="px-4 py-2 text-center text-black font-semibold">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sellings.map((selling) => (
                <SellingRow key={selling.id} selling={selling} />
              ))}
            </TableBody>
          </Table>
        )
      }
    </>
  )
}
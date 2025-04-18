import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

import type { Selling } from "@/lib/types";

type Props = {
  data?: Selling | undefined,
  buttonLabel: string,
  onSubmit: (name: string, price: string) => void,
}

export default function SellingForm({ data, buttonLabel, onSubmit }: Props) {
  const [name, setName] = useState(data ? data.name : "");
  const [price, setPrice] = useState(data ? data.price : "");

  const clearFields = () => {
    setName("");
    setPrice("");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input type="text" id="name" placeholder="..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="price">Preço</Label>
        <Input type="text" id="price" placeholder="R$ 0,00" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="flex flex-row mt-4 justify-end gap-4">
        <Button className="max-w-sm" onClick={clearFields} variant="secondary">Limpar</Button>
        <Button className="max-w-sm" onClick={() => onSubmit(name, price)}>{buttonLabel}</Button>
      </div>
    </div>
  )
}
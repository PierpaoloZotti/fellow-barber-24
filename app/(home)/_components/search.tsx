"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center">
      <Input
        placeholder="Pesquisar por uma barbearia ..."
        type="search"
        className="rounded-r-none"
      />
      <Button variant="default" size="icon" className="rounded-l-none">
        <SearchIcon className="h-4 w-4 " />
      </Button>
    </div>
  );
};

export default Search;

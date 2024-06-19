"use client";
import { categories } from "@/constants/Categories";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";

const CategorySelector = () => {
  const [selected, setSelected] = useState("all");

  return (
    <div className="flex p-5 bg-slate-100">
      {categories.map((category) => (
        <Button
          onClick={() => {
            setSelected(category.value);
          }}
          size="sm"
          className={cn(
            "rounded-none border border-black p-2 text-sm flex items-center justify-center gap-2 bg-white text-black hover:bg-black hover:text-white",
            category.value === selected && "bg-black text-white"
          )}
          key={category.value}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategorySelector;

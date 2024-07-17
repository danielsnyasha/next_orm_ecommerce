import ProductList from "@/components/shared/product/product-list";
import { Button } from "@/components/ui/button";
import sampleData from "@/lib/sample-data";
import Image from "next/image";

export default function Home() {
  return (
   <div className="space-y-8">
    <h2 className="h2-bold">Latest Products
      <ProductList data={sampleData.products} title={""}/>
    </h2>

   </div>
  );
}

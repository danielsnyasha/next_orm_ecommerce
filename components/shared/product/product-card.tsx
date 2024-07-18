import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            alt={product.name}
            className="aspect-square object-cover"
            height={300}
            src={product.images![0]}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-2">
        <div>
          <p className="text-xs text-gray-500">{product.brand}</p>
        </div>
        <div>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-sm font-medium text-gray-800 hover:text-gray-600">
              {product.name}
            </h3>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p className="text-sm text-yellow-500">{product.rating} stars</p>
          {product.stock > 0 ? (
            /* trunk-ignore(eslint/no-undef) */
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-sm text-red-500">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

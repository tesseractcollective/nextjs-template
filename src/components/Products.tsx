import React from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products?: ProductFieldsFragment[];
}

export default function Products({ type, products }: ProductsProps) {
  return <>{products && products.length && <h1>Products</h1>}</>;
}

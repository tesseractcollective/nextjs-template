import React from "react";
import type { ProductFieldsFragment } from "@/graphql/generated/graphql";
import ProductShelfSection from "@/components/ProductSections/ProductShelfSection";
import ProductFullScreenSection from "@/components/ProductSections/ProductFullScreenSection";
import ProductCardSection from "@/components/ProductSections/ProductCardSection";
import ProductSliderSection from "@/components/ProductSections/ProductSliderSection";
import ProductCompactSection from "@/components/ProductSections/ProductCompactSection";
import ProductDefaultSection from "@/components/ProductSections/ProductDefaultSection";
import ProductGridSection from "@/components/ProductSections/ProductGridSection";
import ProductRotateSection from "@/components/ProductSections/ProductRotateSection";
import ProductStackSection from "@/components/ProductSections/ProductsStackSection";
import ProductsLightboxSection from "@/components/ProductSections/ProductsLightboxSection";
import ProductMasonSection from "@/components/ProductSections/ProductMasonSection";

interface ProductsProps {
  profileSectionTitle?: string;
  type?: string;
  products: ProductFieldsFragment[];
  productLayoutStyle: string;
}

export default function Products({
  type,
  products,
  productLayoutStyle,
}: ProductsProps) {
  const filteredProducts = products.filter(
    (product) => product?.productType?.toLowerCase() === type?.toLowerCase()
  );

  // Product Layout Style
  // compact √
  // slider √
  // card √
  // chevron
  // grid
  // infinite
  // lightbox
  // mason
  // mix
  // polaroid
  // rotate
  // shelf
  // stack
  if (filteredProducts.length === 0) return <></>;
  if (productLayoutStyle === "compact")
    return <ProductCompactSection products={filteredProducts} />;
  if (productLayoutStyle === "rotate")
    return <ProductRotateSection products={filteredProducts} />;
  if (productLayoutStyle === "stack")
    return <ProductStackSection products={filteredProducts} />;
  if (productLayoutStyle === "lightbox")
    return <ProductsLightboxSection products={filteredProducts} />;
  if (productLayoutStyle === "grid")
    return <ProductGridSection products={filteredProducts} />;
  if (productLayoutStyle === "shelf")
    return <ProductShelfSection products={filteredProducts} />;
  if (productLayoutStyle === "fullScreen")
    return <ProductFullScreenSection products={filteredProducts} />;
  if (productLayoutStyle === "card")
    return <ProductCardSection products={filteredProducts} />;
  if (productLayoutStyle === "slider")
    return <ProductSliderSection products={filteredProducts} type={type} />;
  if (productLayoutStyle === "mason")
    return <ProductMasonSection products={filteredProducts} type={type} />;
  return <ProductDefaultSection products={filteredProducts} />;
}

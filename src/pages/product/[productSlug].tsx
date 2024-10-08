import { sdkClient } from "@/lib/graphql-client";
import Product from "@/components/Product";
import Footer from "@/components/navigation/Footer";
import Nav from "@/components/navigation/Nav";
import { ProductPageQuery } from "@/graphql/generated/graphql";
import { GetServerSideProps } from "next";
import "@/app/tailwind.css";
import "@/styles/global.scss";
import "@/styles/layoutBlocks.scss";
import ThemeColors from "@/styles/ThemeColors";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import React from "react";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const productPage: ProductPageQuery = await sdkClient.productPage({
    productSlug: params?.productSlug as string,
  });
  return {
    props: {
      productPage,
    },
  };
};

export default function ProductSlug({
  productPage,
}: {
  productPage: ProductPageQuery;
}) {
  if (!productPage.product || !productPage.siteLibrary) return <></>;
  const { siteLibrary, navigations, blogs, product, products } = productPage;
  return (
    <>
      <ThemeColors siteLibrary={siteLibrary} />
      {!!siteLibrary?.analyticsId && (
        <GoogleAnalytics analyticsId={siteLibrary.analyticsId} />
      )}
      <Nav
        siteLibrary={siteLibrary}
        navigations={navigations}
        hideNav={false}
      />
      <Product
        product={product}
        siteLibrary={siteLibrary}
        products={products}
      />
      <Footer
        siteLibrary={siteLibrary}
        navigations={navigations}
        hideFooter={false}
        blogs={blogs}
      />
    </>
  );
}

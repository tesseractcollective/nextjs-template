// Commented out for build error, keeping for reference.
// import {
//   GetStaticProps,
//   GetStaticPaths,
// } from "next";
// import { sdkClient } from "@/lib/graphql-client";
// import type { LayoutQuery } from "@/graphql/generated/graphql";

// export const getStaticPaths: GetStaticPaths = async () => {
//   const pagesSlugList = await sdkClient.pagesSlugList();
//   return {
//     paths: pagesSlugList.pages?.map(item => {
//       return {
//         params: {
//           pageSlug: item.pageSlug as string
//         }
//       }
//     }) ?? [],
//     fallback: true, // false or "blocking"
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const layout: LayoutQuery = await sdkClient.layout({
//     pageSlug: params?.pageSlug as string,
//   });
//   console.log("getStaticProps", layout.page?.pageSlug);
//   return {
//     props: {
//       layout,
//     },
//   };
// };

// export default function Page({ layout }: { layout: LayoutQuery }) {
export default function PageStatic() {
  return (
    <>
      {/* <h1>{layout.page?.id}</h1> */}
      {/* <Home layout={layout} />     */}
    </>
  );
}

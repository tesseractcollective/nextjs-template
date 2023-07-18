import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { sdkClient } from "@/lib/graphql-client";
import type { LayoutQuery } from "@/graphql/generated/graphql";
import Home from "@/components/page";
import { useRouter } from "next/router";

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: {
//           pageSlug: 'home',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

// export const getStaticProps: GetStaticProps<{
//   layouts: LayoutQuery;
// }> = async (context) => {
//   const { params } = context
  // const layout: LayoutQuery = await sdkClient.layout({
  //   pageSlug: params.pageSlug,
  // });
  // return { props: { layout } };
// };

// export async function getServerSideProps() {
//   const pageSlug = params.pageSlug
// }

// export async function getStaticProps({ params }) {
//   const layout: LayoutQuery = await sdkClient.layout({
//     pageSlug: params.pageSlug,
//   });

//   return {
//     props: {
//       layout,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const layout: LayoutQuery = await sdkClient.layout({
//     pageSlug: params.pageSlug,
//   });

//   return {
//     paths: products.map(({ slug }) => ({
//       params: { slug },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticPaths() {
//   const paths = await await sdkClient.pages({
//     paths
//      });
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  const paths = await sdkClient.pagesSlugList();
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }: any) {
  const layout: LayoutQuery = await sdkClient.layout({
    pageSlug: params.pageSlug,
  });
  return { props: { layout } };
      }
      
  export default function Page(layout: LayoutQuery) {
  const router = useRouter();
  console.log(router.query.slug);
  console.log(layout);
  // console.log(layout);
  // ?.page.filter((page) => layout.primaryItem !== true);
  // const layout = layouts.page?.pageSlug
  // const layout = layouts.pages.()
  return (
    <>
      <h1>{router.query.slug}</h1>
      {/* <Home layout={layout} />     */}
    </>
  );
}

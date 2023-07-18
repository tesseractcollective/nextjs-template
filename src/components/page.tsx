import type { LayoutQuery } from "@/graphql/generated/graphql";
import Image from 'next/image'
import '../app/globals.css'
import LayoutBlocks from "./layoutBlocks/LayoutBlocks";

interface HomeProps {
  layout: LayoutQuery;
}

export default function Home({ layout }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <LayoutBlocks 
      layout={layout}
     />
    </main>
  );
}

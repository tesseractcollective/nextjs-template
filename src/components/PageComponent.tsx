import type { LayoutQuery } from "@/graphql/generated/graphql";
import '@/app/globals.css'
import LayoutBlocks from "@/components/LayoutBlocks";

interface HomeProps {
  layout: LayoutQuery;
}

export default function PageComponent({ layout }: HomeProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <LayoutBlocks 
      layout={layout}
     />
    </main>
  );
}

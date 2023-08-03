import Script from "next/script";
import { FC } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const StripePricingTable:FC<{
    pricingTableId?: string;
    publishableKey?: string;
    clientReferenceId?: string;
}> = ({pricingTableId,publishableKey,clientReferenceId}) => {
    if (!pricingTableId || !publishableKey) return <></>;
    return (
        <>
            <Script
                async
                strategy='lazyOnload'
                src='https://js.stripe.com/v3/pricing-table.js'

            />
            <stripe-pricing-table
                pricing-table-id={pricingTableId}
                publishable-key={publishableKey}
                client-reference-id={clientReferenceId}
            />
        </>
    )
}
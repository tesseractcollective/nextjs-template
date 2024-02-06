import React, { useEffect } from "react";

export interface PageCssClassProps {
  pageClass: string;
}

export default function PageCssClass({ pageClass }: PageCssClassProps) {
  console.log(pageClass);
  useEffect(() => {
    if (pageClass) {
      const classes = pageClass.split(" ");
      document.body.classList.add(...classes);
    }
  }, [pageClass]);
  return <></>;
}

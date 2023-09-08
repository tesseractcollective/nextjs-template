import parse from "html-react-parser";

interface HTMLTextProps {
  htmlText?: string;
  htmlTextCssClass?: string;
}

export default function HTMLText({
  htmlText,
  htmlTextCssClass,
}: HTMLTextProps) {
  if (!htmlText) return null;
  return <div className={htmlTextCssClass}>{parse(htmlText)}</div>;
}

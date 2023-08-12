import parse from "html-react-parser";

interface iFrameBoxProps {
  title?: string;
  code?: string;
}

export default function IframeBox({ title, code }: iFrameBoxProps) {
  return (
    <div>
      <section className="container mx-auto my-8">
        <div className="w-10/12 mx-auto">
          {!!title && <h3 className="text-center font-400">{title}</h3>}
          {!!code && <div>{parse(code)}</div>}
        </div>
      </section>
    </div>
  );
}

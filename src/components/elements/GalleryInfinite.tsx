interface GalleryInfiniteProps {
  finalImages: string[];
}

export default function GalleryInfinite({ finalImages }: GalleryInfiniteProps) {
  return <div className="infinite-gallery overflow-hidden"></div>;
}

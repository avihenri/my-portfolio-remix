import { PhotoGalleryProps } from "~/utils/interface";
import { useRef, useState, useEffect } from "react";

export default function PhotoGallery(
  { photoGalleryData }: { photoGalleryData: PhotoGalleryProps }
) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const ref = galleryRef.current;
    if (ref) {
      ref.addEventListener("scroll", updateScrollButtons);
      return () => ref.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-[-0.5rem] top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full z-10"
        >
          &#8249;
        </button>
      )}
      <div
        ref={galleryRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        <div className="grid grid-flow-col auto-cols-[minmax(350px,_1fr)] gap-4 p-4">
          {photoGalleryData?.images.map((image, index) => (
            <div className="flex flex-col">
              <div
                className="relative w-full pb-[75%] overflow-hidden rounded-lg shadow-lg snap-center"
                key={index}
              >
                <img
                  src={image.image.url}
                  alt={image.altText}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center text-sm text-gray-900 dark:text-white font-mono mt-1">
                {image.title}
              </div>
              <div className="text-center text-xs text-slate-600 dark:text-slate-400 font-mono">
                {image.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-[-1rem] top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full z-10"
        >
          &#8250;
        </button>
      )}
    </div>
  );
}

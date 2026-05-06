import Image from "next/image";

import { Card } from "@/components/ui/card";
import { galleryImages, type GalleryImage } from "@/lib/gallery-images";
import { cn } from "@/lib/utils";

/** Display-only ratios — crops uniform photos differently so column heights stay uneven. */
const TILE_ASPECTS = [
  "aspect-[3/4]",
  "aspect-[5/7]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[3/5]",
  "aspect-[5/6]",
  "aspect-[4/3]",
  "aspect-[5/4]",
] as const;

const TILE_FOCUS = [
  "object-center",
  "object-[center_30%]",
  "object-[center_65%]",
  "object-[center_20%]",
  "object-[center_80%]",
  "object-left",
  "object-right",
  "object-top",
] as const;

const sizes =
  "(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) calc((100vw - 40px - 1rem) / 2), (max-width: 1280px) calc((100vw - 40px - 2rem) / 3), calc((100vw - 40px - 3rem) / 4)";

function GalleryItem({
  image,
  aspectClass,
  focusClass,
}: {
  image: GalleryImage;
  aspectClass: string;
  focusClass: string;
}) {
  return (
    <Card
      className={cn(
        "break-inside-avoid overflow-hidden p-0 shadow-sm ring-border/40",
        "transition-shadow duration-200 hover:shadow-md"
      )}
    >
      <div className={cn("relative w-full overflow-hidden", aspectClass)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className={cn("object-cover", focusClass)}
        />
      </div>
    </Card>
  );
}

export function MasonryGallery() {
  return (
    <div
      className={cn(
        "columns-1 gap-x-4 sm:columns-2 lg:columns-3 xl:columns-4",
        "*:mb-4"
      )}
    >
      {galleryImages.map((image, index) => (
        <GalleryItem
          key={image.src}
          image={image}
          aspectClass={TILE_ASPECTS[index % TILE_ASPECTS.length]!}
          focusClass={TILE_FOCUS[index % TILE_FOCUS.length]!}
        />
      ))}
    </div>
  );
}

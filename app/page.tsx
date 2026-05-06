import { MasonryGallery } from "@/components/masonry-gallery";

export default function Home() {
  return (
    <div className="min-h-full bg-muted/40">
      <main className="px-[20px] py-10">
        <MasonryGallery />
      </main>
    </div>
  );
}

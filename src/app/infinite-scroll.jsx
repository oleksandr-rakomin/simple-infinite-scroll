import Image from "next/image";

export function InfiniteScroll({ infiniteScrollItemsList = [] }) {
  return (
    <div className="main-container py-10 bg-emerald-300">
      <div className="flex overflow-hidden">
        <ul className="animate-infinite-scroll flex">
          {[...infiniteScrollItemsList, ...infiniteScrollItemsList].map(
            (item, idx) => {
              const isClone = idx >= infiniteScrollItemsList.length;

              return (
                <li
                  key={`${item.id}-${idx}`}
                  aria-hidden={isClone}
                  className="size-60 relative overflow-hidden bg-emerald-400 mr-5"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="240px"
                    draggable={false}
                    className="object-contain"
                  />
                </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}

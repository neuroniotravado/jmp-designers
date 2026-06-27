export default function ImageCard({ src, index, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-xl group"
    >
      <img
        src={src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
        {index}
      </div>
    </div>
  );
}


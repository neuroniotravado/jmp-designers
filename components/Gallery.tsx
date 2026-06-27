export default function Gallery({ images }: any) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img: string, i: number) => (
          <ImageCard
            key={i}
            src={img}
            index={i + 1}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      <Modal src={selected} onClose={() => setSelected(null)} />
    </>
  );
}

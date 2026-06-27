const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.06
            }}
          >
            <ImageCard
              src={img}
              index={i + 1}
              onClick={() => setSelected(img)}
            />
          </motion.div>
        ))}
      </div>

      <Modal src={selected} onClose={() => setSelected(null)} />
    </>
  );
}

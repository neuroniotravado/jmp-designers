"use client";

export default function Modal({ src, onClose }: any) {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
    >
      <img
        src={src}
        className="max-w-4xl max-h-[90vh] rounded-lg"
      />
    </div>
  );
}

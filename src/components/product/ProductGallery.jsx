const ProductGallery = ({ images, mainImage, setMainImage }) => {
  return (
    <div id="product-gallery" className="space-y-4 lg:basis-2/5 lg:max-w-[40%]">
      <div className="w-full h-72 sm:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg">
        <img id="main-image" className="w-full h-full object-cover" src={mainImage} alt="Product main" />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((src, idx) => {
          const active = src === mainImage;
          return (
            <button
              key={src}
              type="button"
              className={`h-16 sm:h-20 overflow-hidden rounded-lg cursor-pointer border-2 transition-colors ${
                active ? 'border-primary' : 'border-border hover:border-primary'
              }`}
              onClick={() => setMainImage(src)}
              aria-label={`Select image ${idx + 1}`}
            >
              <img className="w-full h-full object-cover" src={src} alt={`Product view ${idx + 1}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGallery;



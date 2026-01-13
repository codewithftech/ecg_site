import { useEffect } from 'react';
import CategoryFilterSidebar from './CategoryFilterSidebar';

const CategoryFiltersDrawer = ({
  open,
  onClose,
  subCategories,
  brands,
  powerRanges,
  selectedFilters,
  toggleFilter,
  priceRange,
  setPriceRange,
  pricePercent,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-[min(92vw,420px)] bg-background shadow-2xl overflow-y-auto">
        <div className="p-4 flex items-center justify-between border-b border-border bg-card sticky top-0 z-10">
          <div className="font-bold text-foreground">Filters</div>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Close filters"
            onClick={onClose}
          >
            <i className="fas fa-xmark" />
          </button>
        </div>

        <div className="p-4">
          <CategoryFilterSidebar
            embedded
            subCategories={subCategories}
            brands={brands}
            powerRanges={powerRanges}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            pricePercent={pricePercent}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFiltersDrawer;



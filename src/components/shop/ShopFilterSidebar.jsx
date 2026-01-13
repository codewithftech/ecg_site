const CheckboxRow = ({ label, checked, onChange }) => (
  <button type="button" onClick={() => onChange(!checked)} className="flex items-center gap-3 text-left w-full">
    <span
      className={`w-6 h-6 rounded-[6px] border-2 border-[#0EB7EE] flex items-center justify-center ${
        checked ? 'bg-[#0EB7EE]' : 'bg-transparent'
      }`}
    />
    <span className="text-[16px] leading-6 text-[#64748B]">{label}</span>
  </button>
);

const ShopFilterSidebar = ({ filters, setFilters, pricePercent, embedded = false }) => {
  const wrapClassName = embedded
    ? 'w-full bg-white rounded-[28px] px-6 sm:px-8 py-8'
    : 'hidden lg:block w-[320px] shrink-0 bg-white rounded-[28px] px-8 py-10';

  return (
    <aside id="filter-sidebar" className={wrapClassName}>
      <div className={embedded ? '' : 'sticky top-24'}>
        <h3 className="flex items-center justify-between text-[22px] font-bold leading-7 text-[#0F172A] mb-8">
          <span>Filters</span>
          <i className="fas fa-filter text-primary text-[18px]" aria-hidden="true"></i>
        </h3>

        <div className="space-y-8">
          <div>
            <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">Brands</h4>
            <div className="space-y-4">
              {Object.entries(filters.brands).map(([k, v]) => (
                <CheckboxRow
                  key={k}
                  label={k}
                  checked={v}
                  onChange={(next) => setFilters((s) => ({ ...s, brands: { ...s.brands, [k]: next } }))}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">Categories</h4>
            <div className="space-y-4">
              {Object.entries(filters.categories).map(([k, v]) => (
                <CheckboxRow
                  key={k}
                  label={k}
                  checked={v}
                  onChange={(next) =>
                    setFilters((s) => ({
                      ...s,
                      categories: { ...s.categories, [k]: next },
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">Nicotine Strength</h4>
            <div className="space-y-4">
              {Object.entries(filters.nicotine).map(([k, v]) => (
                <CheckboxRow
                  key={k}
                  label={k}
                  checked={v}
                  onChange={(next) =>
                    setFilters((s) => ({
                      ...s,
                      nicotine: { ...s.nicotine, [k]: next },
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">Device Type</h4>
            <div className="space-y-4">
              {Object.entries(filters.deviceType).map(([k, v]) => (
                <CheckboxRow
                  key={k}
                  label={k}
                  checked={v}
                  onChange={(next) =>
                    setFilters((s) => ({
                      ...s,
                      deviceType: { ...s.deviceType, [k]: next },
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">Stock Status</h4>
            <div className="space-y-4">
              {Object.entries(filters.stockStatus).map(([k, v]) => (
                <CheckboxRow
                  key={k}
                  label={k}
                  checked={v}
                  onChange={(next) =>
                    setFilters((s) => ({
                      ...s,
                      stockStatus: { ...s.stockStatus, [k]: next },
                    }))
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[18px] font-bold leading-6 text-[#0F172A] mb-4">Price Range</h4>

            <div className="relative">
              <div className="relative h-2 rounded-full bg-white border border-[#8ED7F3]">
                <div
                  className="absolute top-0 h-full rounded-full bg-[#8ED7F3]"
                  style={{
                    left: `${Math.min(pricePercent.left, pricePercent.right)}%`,
                    width: `${Math.abs(pricePercent.right - pricePercent.left)}%`,
                  }}
                />
                <div
                  className="absolute -top-[7px] w-5 h-5 rounded-full bg-[#0EB7EE]"
                  style={{ left: `calc(${pricePercent.left}% - 10px)` }}
                />
                <div
                  className="absolute -top-[7px] w-5 h-5 rounded-full bg-[#0EB7EE]"
                  style={{ left: `calc(${pricePercent.right}% - 10px)` }}
                />
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={filters.priceMin}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  setFilters((s) => ({ ...s, priceMin: Math.min(next, s.priceMax) }));
                }}
                className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                aria-label="Minimum price"
              />
              <input
                type="range"
                min={0}
                max={100}
                value={filters.priceMax}
                onChange={(e) => {
                  const next = Number(e.target.value);
                  setFilters((s) => ({ ...s, priceMax: Math.max(next, s.priceMin) }));
                }}
                className="absolute inset-0 w-full h-6 opacity-0 cursor-pointer"
                aria-label="Maximum price"
              />
            </div>

            <div className="flex items-center justify-between mt-3">
              <span className="text-[14px] font-medium text-[#0EB7EE]">${filters.priceMin}</span>
              <span className="text-[14px] font-medium text-[#F65D2C]">${filters.priceMax}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ShopFilterSidebar;



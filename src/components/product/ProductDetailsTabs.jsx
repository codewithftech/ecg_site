const ProductDetailsTabs = ({
  activeTab,
  setActiveTab,
  reviewsCount,
  isWriteReviewOpen,
  setIsWriteReviewOpen,
  reviewForm,
  setReviewForm,
  reviewErrors,
  setReviewErrors,
  onSubmitReview,
  allReviews,
}) => {
  return (
    <section id="product-details" className="mb-12">
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="flex items-center gap-10 px-6 pt-4 border-b border-border overflow-x-auto">
          {[
            { key: 'description', label: 'Description' },
            { key: 'specs', label: 'Specifications' },
            { key: 'reviews', label: `Reviews (${reviewsCount})` },
            { key: 'shipping', label: 'Shipping & Returns' },
          ].map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActiveTab(t.key)}
              className={`pb-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                activeTab === t.key ? 'text-foreground border-b-2 border-primary' : 'text-secondary hover:text-foreground'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'description' && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Product Description</h3>
              <p className="text-secondary leading-relaxed mb-4">
                The SMOK Nord 5 Kit represents the latest evolution in pod mod technology, featuring an impressive 80W
                output and compatibility with RPM3 coils. This device combines the portability of a pod system with the
                power and customization options of a traditional box mod.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                Designed for both MTL and DTL vaping styles, the Nord 5 offers adjustable airflow and multiple coil
                options to suit any vaping preference. The large 2000mAh battery ensures all-day vaping, while the Type-C
                charging port provides fast and convenient charging.
              </p>

              <h4 className="text-xl font-bold text-foreground mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Advanced Coil Technology', desc: 'Enhanced flavor and vapor production' },
                  { title: 'Smart Battery Management', desc: 'Optimized power delivery and longevity' },
                  { title: 'Adjustable Airflow', desc: 'Customizable vaping experience' },
                  { title: 'Premium Build Quality', desc: 'Durable zinc alloy construction' },
                ].map((f) => (
                  <div key={f.title} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <i className="fas fa-check text-xs"></i>
                    </span>
                    <div>
                      <div className="font-semibold text-foreground">{f.title}</div>
                      <div className="text-sm text-secondary">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Device Specs</h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li>Output Power: 5-80W</li>
                    <li>Battery: 2000mAh</li>
                    <li>Charging: Type-C</li>
                    <li>Material: Zinc Alloy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Pod Specs</h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li>Capacity: 5ml</li>
                    <li>Coil: RPM3 Series</li>
                    <li>Filling: Side Fill</li>
                    <li>Airflow: Adjustable</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-foreground">Reviews</h3>
                <button
                  type="button"
                  onClick={() => setIsWriteReviewOpen((v) => !v)}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90"
                >
                  Write a Review
                </button>
              </div>

              {isWriteReviewOpen && (
                <form onSubmit={onSubmitReview} className="border border-border rounded-xl p-5 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        value={reviewForm.name}
                        onChange={(e) => setReviewForm((s) => ({ ...s, name: e.target.value }))}
                        className={`w-full px-4 py-3 rounded-xl border bg-card outline-none focus:ring-2 focus:ring-primary ${
                          reviewErrors.name ? 'border-destructive' : 'border-border'
                        }`}
                        placeholder="Your name"
                      />
                      {reviewErrors.name && <p className="text-sm text-destructive mt-1">{reviewErrors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const star = i + 1;
                          const active = star <= Number(reviewForm.rating || 0);
                          return (
                            <button
                              key={`rate-${star}`}
                              type="button"
                              onClick={() => setReviewForm((s) => ({ ...s, rating: star }))}
                              className="p-1"
                              aria-label={`Rate ${star} star`}
                            >
                              <i className={`fas fa-star text-lg ${active ? 'text-accent' : 'text-border'}`} />
                            </button>
                          );
                        })}
                      </div>
                      {reviewErrors.rating && <p className="text-sm text-destructive mt-1">{reviewErrors.rating}</p>}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-foreground mb-2">Review</label>
                    <textarea
                      rows={4}
                      value={reviewForm.text}
                      onChange={(e) => setReviewForm((s) => ({ ...s, text: e.target.value }))}
                      className={`w-full px-4 py-3 rounded-xl border bg-card outline-none focus:ring-2 focus:ring-primary ${
                        reviewErrors.text ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Write your review..."
                    />
                    {reviewErrors.text && <p className="text-sm text-destructive mt-1">{reviewErrors.text}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 mt-5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsWriteReviewOpen(false);
                        setReviewErrors({});
                      }}
                      className="px-6 py-3 rounded-full border border-border font-semibold hover:bg-muted transition-colors"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90">
                      Submit Review
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-6">
                {allReviews.map((r) => (
                  <div key={r.id} className="border border-border rounded-xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-foreground">{r.name}</div>
                      <div className="text-xs text-secondary">{r.date}</div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={`${r.id}-star-${i}`}
                          className={`fas fa-star text-sm ${i < r.rating ? 'text-accent' : 'text-border'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-secondary leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Shipping & Returns</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3">Shipping</h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li>Orders ship within 1–2 business days (verified accounts).</li>
                    <li>Tracking provided via email once dispatched.</li>
                    <li>Free shipping may apply on qualified wholesale orders.</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h4 className="font-semibold text-foreground mb-3">Returns</h4>
                  <ul className="space-y-2 text-sm text-secondary">
                    <li>Returns accepted within 7 days for unopened items.</li>
                    <li>Defective items may be eligible for replacement.</li>
                    <li>Contact support with your order number to start a return.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-destructive/10 border border-destructive/20 rounded-xl p-6">
                <h4 className="text-lg font-bold text-destructive mb-3">
                  <i className="fas fa-triangle-exclamation mr-2"></i>
                  Compliance Warning
                </h4>
                <ul className="space-y-2 text-sm text-destructive">
                  <li>• This product contains nicotine</li>
                  <li>• Not for sale to minors</li>
                  <li>• Keep away from children and pets</li>
                  <li>• For adult use only (21+)</li>
                  <li>• Not for pregnant or nursing women</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsTabs;



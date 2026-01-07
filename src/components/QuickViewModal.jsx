import { useEffect, useState } from 'react';
import Product from '../pages/Product';

const QuickViewModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    const onOpen = (e) => {
      const nextId = e?.detail?.productId ?? '1';
      setProductId(String(nextId));
      setIsOpen(true);
    };
    const onClose = () => setIsOpen(false);

    window.addEventListener('quick-view-open', onOpen);
    window.addEventListener('quick-view-close', onClose);
    return () => {
      window.removeEventListener('quick-view-open', onOpen);
      window.removeEventListener('quick-view-close', onClose);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      >
        <div
          className="relative w-[min(96vw,96vw)] max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-xl border border-border"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Close quick view"
          >
            <i className="fas fa-xmark text-lg" />
          </button>

          <Product embedded productId={productId} />
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;



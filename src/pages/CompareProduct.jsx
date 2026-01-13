import { useMemo, useState } from 'react';
import CompareHeader from '../components/compare/CompareHeader';
import CompareTable from '../components/compare/CompareTable';
import ProsConsGrid from '../components/compare/ProsConsGrid';
import AddProductSection from '../components/compare/AddProductSection';

const CompareProduct = ({ embedded = false }) => {
  const [products, setProducts] = useState([
    {
      id: 'smok-nord-4',
      name: 'SMOK Nord 4',
      subtitle: 'Pod System Kit',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/cd7cd1e811-2f9fafa89eacdc906c22.png',
      brand: 'SMOK',
      category: 'Pod Systems',
      deviceType: 'Refillable Pod',
      batteryCapacity: '2000mAh',
      coilType: 'Mesh Coils',
      capacity: '4.5ml',
      weight: '115g',
      colors: '7 Colors',
      charging: 'USB-C',
      safety: '8 Protections',
      pros: ['Large battery capacity', 'Adjustable airflow', 'Multiple coil options', 'Fast charging'],
      cons: ['Heavier than competitors', 'Learning curve for beginners'],
    },
    {
      id: 'elfbar-bc5000',
      name: 'Elf Bar BC5000',
      subtitle: 'Disposable Vape',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c1b38ef8c9-19015643434b6acf2d96.png',
      brand: 'Elf Bar',
      category: 'Disposables',
      deviceType: 'Disposable',
      batteryCapacity: '650mAh',
      coilType: 'Built-in Mesh',
      capacity: '13ml (5000 puffs)',
      weight: '78g',
      colors: '15+ Flavors',
      charging: 'USB-C',
      safety: 'Basic Protection',
      pros: ['Ready to use', 'Great flavor variety', 'Compact size', 'No maintenance'],
      cons: ['Not refillable', 'Higher long-term cost'],
    },
    {
      id: 'uwell-crown-5',
      name: 'Uwell Crown 5',
      subtitle: 'Sub-Ohm Tank',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/0c19cec3cc-8f2fd85b6806236dadfb.png',
      brand: 'Uwell',
      category: 'Tanks',
      deviceType: 'Sub-Ohm Tank',
      batteryCapacity: 'N/A',
      coilType: 'UN2 Mesh',
      capacity: '5ml',
      weight: '68g',
      colors: '5 Colors',
      charging: 'N/A',
      safety: 'N/A',
      pros: ['Excellent flavor production', 'Easy top-fill design', 'Leak-resistant', 'Premium build quality'],
      cons: ['Requires separate mod', 'Higher juice consumption'],
    },
  ]);

  const features = useMemo(
    () => [
      { key: 'brand', label: 'Brand', icon: 'fas fa-tag' },
      { key: 'category', label: 'Category', icon: 'fas fa-layer-group' },
      { key: 'deviceType', label: 'Device Type', icon: 'fas fa-microchip' },
      { key: 'batteryCapacity', label: 'Battery Capacity', icon: 'fas fa-battery-full' },
      { key: 'coilType', label: 'Coil Type', icon: 'fas fa-fire' },
      { key: 'capacity', label: 'Capacity', icon: 'fas fa-droplet' },
      { key: 'weight', label: 'Weight', icon: 'fas fa-weight-scale' },
      { key: 'colors', label: 'Available Colors', icon: 'fas fa-palette' },
      { key: 'charging', label: 'Charging', icon: 'fas fa-plug' },
      { key: 'safety', label: 'Safety Features', icon: 'fas fa-shield-halved' },
    ],
    []
  );

  const removeProduct = (id) => setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <main id="comparison-main" className={embedded ? 'px-6 py-6' : 'container mx-auto px-6 py-12'}>
      <CompareHeader embedded={embedded} />
      <CompareTable products={products} features={features} onRemove={removeProduct} />
      <ProsConsGrid products={products} />
      <AddProductSection />
    </main>
  );
};

export default CompareProduct;


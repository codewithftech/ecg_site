import { useState } from 'react';
import BrandHero from '../components/brand/BrandHero';
import BrandDescription from '../components/brand/BrandDescription';
import BrandProducts from '../components/brand/BrandProducts';
import BrandB2bCta from '../components/brand/BrandB2bCta';

const Brand = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const brandInfo = {
    name: 'SMOK',
    tagline: 'Innovation Keeps Changing the Vaping Experience',
    logo: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c4a1f673e8-20922e367a42c7c39f28.png',
    heroImage: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/04c7f8aabf-a3e3fe427c9e76de9c70.png',
    stats: [
      { value: '250+', label: 'Products' },
      { value: '15+', label: 'Years' },
      { value: 'Global', label: 'Leader' },
    ],
  };

  const products = [
    {
      id: 1,
      name: 'SMOK Nord 5 Kit',
      description: '80W Pod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/bfc35734d9-0ded04407dace8893200.png',
    },
    {
      id: 2,
      name: 'SMOK Morph 3 Kit',
      description: '230W Box Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/8889ee715f-bf006080ecb8b9e3ad54.png',
    },
    {
      id: 3,
      name: 'SMOK RPM 5 Kit',
      description: '80W Pod Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/f5d2f3a6ba-d35a378777cd5e94ddd8.png',
    },
    {
      id: 4,
      name: 'SMOK TFV18 Tank',
      description: 'Sub-Ohm Tank 7.5ml',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/1d6ddbb38f-d3ce64cde5efc2dac22f.png',
    },
    {
      id: 5,
      name: 'SMOK Novo X Kit',
      description: '25W Pod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c66cb81573-61696afccf40b1f78817.png',
    },
    {
      id: 6,
      name: 'SMOK Stick V9 Max',
      description: '60W Starter Kit',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/5297142e99-b5b5329f3a408cf811de.png',
    },
    {
      id: 7,
      name: 'SMOK Mag P3 Kit',
      description: '230W Box Mod',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/c6b69f0e3b-f77fd4f460bc0f888b72.png',
    },
    {
      id: 8,
      name: 'SMOK Pozz X Kit',
      description: '40W Pod System',
      image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/d86388cc01-f21025f2cfc8fd4f9b44.png',
    },
  ];

  return (
    <>
      <BrandHero brandInfo={brandInfo} />
      <BrandDescription brandInfo={brandInfo} />
      <BrandProducts brandInfo={brandInfo} products={products} viewMode={viewMode} setViewMode={setViewMode} />
      <BrandB2bCta />
    </>
  );
};

export default Brand;

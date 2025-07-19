import React, { useState } from 'react';
import productsData from './data/products';
import ProductList from './components/ProductList';
import FilterPanel from './components/FilterPanel';

function App() {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const categories = [...new Set(productsData.map(p => p.category))];
  const brands = [...new Set(productsData.map(p => p.brand))];

  const resetFilters = () => {
    setCategory('');
    setBrand([]);
    setMinPrice('');
    setMaxPrice('');
  };

  const filteredProducts = productsData.filter(product => {
    const matchCategory = category ? product.category === category : true;
    const matchBrand = brand.length > 0 ? brand.includes(product.brand) : true;
    const matchMinPrice = minPrice !== '' ? product.price >= Number(minPrice) : true;
    const matchMaxPrice = maxPrice !== '' ? product.price <= Number(maxPrice) : true;

    return matchCategory && matchBrand && matchMinPrice && matchMaxPrice;
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>🛍️ Product Catalog</h1>

      <FilterPanel
        categories={categories}
        brands={brands}
        selectedCategory={category}
        setCategory={setCategory}
        selectedBrands={brand}
        setBrand={setBrand}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        resetFilters={resetFilters}
      />

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;

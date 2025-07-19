import React from 'react';

const FilterPanel = ({
  categories, brands,
  selectedCategory, setCategory,
  selectedBrands, setBrand,
  minPrice, setMinPrice,
  maxPrice, setMaxPrice,
  resetFilters
}) => {
  const handleBrandChange = (e) => {
    const value = e.target.value;
    setBrand((prev) =>
      prev.includes(value) ? prev.filter((b) => b !== value) : [...prev, value]
    );
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Filters</h2>

      <div>
        <label>Category: </label>
        <select value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Brands:</label>
        {brands.map((brand) => (
          <label key={brand} style={{ marginLeft: 10 }}>
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={handleBrandChange}
            />
            {brand}
          </label>
        ))}
      </div>

      <div>
        <label>Min Price: </label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div>
        <label>Max Price: </label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <button onClick={resetFilters} style={{ marginTop: 10 }}>Reset Filters</button>
    </div>
  );
};

export default FilterPanel;

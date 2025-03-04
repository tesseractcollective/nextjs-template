import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { faSearch, faFont, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BulkProductSectionProps {
  bulkProductData: {
    cssClass?: string;
    title?: string;
    urlParam?: string;
    categories: Record<string, string[]>;
  };
}

const BulkProductSection = ({ bulkProductData }: BulkProductSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchParams = useSearchParams();

  // Get initial category from URL params
  const initialCategory = searchParams?.get("category") || null;

  // Get all category names
  const categories = Object.keys(bulkProductData.categories);

  // Filter and sort logic
  const getFilteredProducts = () => {
    let products = selectedCategory
      ? bulkProductData.categories[selectedCategory] || []
      : Object.values(bulkProductData.categories).flat();

    if (searchQuery) {
      products = products.filter((product) =>
        product.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products.sort((a, b) =>
      sortOrder === "asc" ? a.localeCompare(b) : b.localeCompare(a)
    );
  };

  const filteredProducts = getFilteredProducts();

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSortOrder("asc");
  };

  return (
    <div className={`max-w-6xl mx-auto p-6 ${bulkProductData.cssClass || ""}`}>
      {/* Search and Controls */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          {/* <FontAwesomeIcon icon={faFont} className="w-8 h-8 text-[#000000]" /> */}
          <div className="relative flex-1">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-3 text-lg border border-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-[#000000]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                border border-[#CCCCCC] 
                ${
                  selectedCategory === category
                    ? "bg-primary text-[#FFFFFF] border-primary"
                    : "bg-[#FFFFFF] text-[#333333] hover:bg-[#F5F5F5]"
                }`}
            >
              {category.replace(/_/g, " ")}
            </button>
          ))}
        </div>

        {/* Controls Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="px-6 py-2 border border-[#CCCCCC] rounded-lg bg-[#FFFFFF] text-[#333333]"
            >
              <option value="asc">Sort A-Z</option>
              <option value="desc">Sort Z-A</option>
            </select>

            {(searchQuery || selectedCategory) && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 text-[#FF0000] hover:text-[#CC0000]"
              >
                <FontAwesomeIcon icon={faTimes} />
                Reset Filters
              </button>
            )}
          </div>

          <div className="text-[#666666] text-sm">
            Showing {filteredProducts.length} results
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-[#EEEEEE]"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#000000]">
                {product}
              </h3>
              {selectedCategory && (
                <span className="text-sm text-[#666666] mt-1 block">
                  Category: {selectedCategory.replace(/_/g, " ")}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-[#666666] text-xl mb-4">
            No products found matching your criteria
          </div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-primary text-[#FFFFFF] rounded-lg hover:bg-secondary border border-primary"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default BulkProductSection;

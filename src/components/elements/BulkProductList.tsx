import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  Squares2X2Icon,
  ListBulletIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
  MinusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { FilloutSliderEmbedButton } from "@fillout/react";

interface BulkProductSectionProps {
  bulkProductData: {
    cssClass?: string;
    title?: string;
    urlParam?: string;
    categories: Record<string, string[]>;
    filloutId?: string;
    requestButtonText?: string;
  };
}

const BulkProductSection = ({ bulkProductData }: BulkProductSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  // Changed to store objects with product and category info
  const [selectedProducts, setSelectedProducts] = useState<
    { product: string; category: string }[]
  >([]);

  // Get all category names
  const categories = Object.keys(bulkProductData.categories);

  // Helper function to find which category a product belongs to
  const findProductCategory = (productName: string): string => {
    for (const [category, products] of Object.entries(
      bulkProductData.categories
    )) {
      if (products.includes(productName)) {
        return category;
      }
    }
    return "Unknown";
  };

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
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSortOrder("asc");
    setCurrentPage(1);
  };

  const toggleProductSelection = (product: string) => {
    const category = selectedCategory || findProductCategory(product);
    const productWithCategory = { product, category };

    setSelectedProducts((prev) => {
      const existingIndex = prev.findIndex((p) => p.product === product);
      if (existingIndex !== -1) {
        // Remove if already selected
        return prev.filter((p) => p.product !== product);
      } else {
        // Add with category info
        return [...prev, productWithCategory];
      }
    });
  };

  const clearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  const isProductSelected = (product: string): boolean => {
    return selectedProducts.some((p) => p.product === product);
  };

  // Format selected products for the form parameter
  const formatSelectedProductsForForm = (): string => {
    return selectedProducts
      .map(
        ({ product, category }) =>
          `Category: ${category.replace(/_/g, " ")}: ${product}`
      )
      .join(", ");
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOrder]);

  const FilterSidebar = () => (
    <div className="bg-text-color border border-bg-secondary rounded-lg p-4 h-fit sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-bg flex items-center gap-2">
          <FunnelIcon className="w-5 h-5" />
          Filters
        </h3>
        {(searchQuery || selectedCategory) && (
          <button
            onClick={handleReset}
            className="text-sm text-primary hover:text-secondary flex items-center gap-1"
          >
            <XMarkIcon className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-bg mb-2">
          Search Products
        </label>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bg opacity-50 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-bg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-text-color text-bg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-bg mb-3">
          Categories ({categories.length})
        </label>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
              !selectedCategory
                ? "bg-primary text-white"
                : "text-bg hover:bg-text-color-secondary"
            }`}
          >
            All Categories ({filteredProducts.length})
          </button>
          {categories.map((category) => {
            const count = bulkProductData.categories[category]?.length || 0;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex justify-between ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "text-bg hover:bg-text-color-secondary"
                }`}
              >
                <span>{category.replace(/_/g, " ")}</span>
                <span className="text-xs opacity-75">({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const ProductCard = ({
    product,
    index,
  }: {
    product: string;
    index: number;
  }) => {
    const isSelected = isProductSelected(product);

    return (
      <div className="bg-text-color border border-bg-secondary rounded-lg overflow-hidden hover:shadow-md hover:border-primary transition-all duration-200 group flex flex-col h-full">
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-medium text-bg text-sm leading-snug mb-2 line-clamp-2 flex-1">
            {product}
          </h3>
          <div className="flex items-center justify-between mt-auto">
            {selectedCategory && (
              <span className="text-xs text-bg opacity-75 bg-text-color-secondary px-2 py-1 rounded-full">
                {selectedCategory.replace(/_/g, " ")}
              </span>
            )}
            <button
              onClick={() => toggleProductSelection(product)}
              className={`ml-auto flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors ${
                isSelected
                  ? "bg-primary text-white hover:bg-secondary"
                  : "bg-text-color-secondary text-bg hover:bg-primary hover:text-white"
              }`}
            >
              {isSelected ? (
                <>
                  <MinusIcon className="w-3 h-3" />
                  Remove
                </>
              ) : (
                <>
                  <PlusIcon className="w-3 h-3" />
                  Select
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ListView = ({ product, index }: { product: string; index: number }) => {
    const isSelected = isProductSelected(product);

    return (
      <div className="bg-text-color border border-bg-secondary rounded-lg p-4 hover:shadow-sm hover:border-primary transition-all duration-200 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-bg text-sm mb-1 truncate">
            {product}
          </h3>
          {selectedCategory && (
            <span className="text-xs text-bg opacity-75">
              Category: {selectedCategory.replace(/_/g, " ")}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => toggleProductSelection(product)}
            className={`flex items-center gap-1 px-3 py-1 text-xs rounded-md transition-colors ${
              isSelected
                ? "bg-primary text-white hover:bg-secondary"
                : "bg-text-color-secondary text-bg hover:bg-primary hover:text-white"
            }`}
          >
            {isSelected ? (
              <>
                <MinusIcon className="w-3 h-3" />
                Remove
              </>
            ) : (
              <>
                <PlusIcon className="w-3 h-3" />
                Select
              </>
            )}
          </button>
        </div>
      </div>
    );
  };

  const Pagination = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const maxVisible = 5;
      let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    };

    return (
      <div className="flex justify-center items-center gap-2 py-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm border border-bg-secondary rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-text-color-secondary text-bg"
        >
          Previous
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 text-sm rounded-md ${
              currentPage === page
                ? "bg-primary text-white"
                : "border border-bg-secondary text-bg hover:bg-text-color-secondary"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm border border-bg-secondary rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-text-color-secondary text-bg"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div
      className={`max-w-8xl mx-auto p-4 my-16 rounded bg-text-color w-full ${
        bulkProductData.cssClass || ""
      }`}
    >
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 px-4 py-2 bg-text-color border border-bg-secondary rounded-lg text-bg"
        >
          <AdjustmentsHorizontalIcon className="w-4 h-4" />
          Filters & Sort
          {(searchQuery || selectedCategory) && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              {(searchQuery ? 1 : 0) + (selectedCategory ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop with faint background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />
          {/* Modal Content */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-text-color shadow-2xl border-l border-bg-secondary">
            <div className="p-4 overflow-y-auto h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-bg">Filters</h3>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-text-color-secondary rounded-lg"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar />
              <div className="mt-4 pt-4 border-t border-bg-secondary">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-1/4 flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:w-3/4">
          {/* Selected Products Bar */}
          {selectedProducts.length > 0 && (
            <div className="bg-primary bg-opacity-10 border border-primary rounded-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShoppingCartIcon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-bg">
                    {selectedProducts.length} product
                    {selectedProducts.length !== 1 ? "s" : ""} selected
                  </span>
                  <button
                    onClick={clearSelectedProducts}
                    className="text-xs text-primary hover:text-secondary underline"
                  >
                    Clear all
                  </button>
                </div>

                {bulkProductData.filloutId && (
                  <div className="flex items-center gap-2">
                    <FilloutSliderEmbedButton
                      filloutId={bulkProductData.filloutId}
                      sliderDirection="right"
                      text={
                        bulkProductData.requestButtonText ||
                        "Request Selected Products"
                      }
                      color="var(--primary)"
                      size="small"
                      parameters={{
                        message: formatSelectedProductsForForm(),
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Selected products preview */}
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProducts.slice(0, 3).map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-text-color border border-bg-secondary rounded text-xs text-bg"
                  >
                    {item.product.length > 30
                      ? `${item.product.substring(0, 30)}...`
                      : item.product}
                    <button
                      onClick={() => toggleProductSelection(item.product)}
                      className="hover:text-primary"
                    >
                      <XMarkIcon className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedProducts.length > 3 && (
                  <span className="text-xs text-bg opacity-75 px-2 py-1">
                    +{selectedProducts.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-bg">
                {bulkProductData.title || "Products"}
              </h2>
              <span className="text-sm text-bg opacity-75">
                {filteredProducts.length} results
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Items per page */}
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="px-3 py-2 border border-bg-secondary rounded-md bg-text-color text-bg text-sm"
              >
                <option value={12}>12 per page</option>
                <option value={24}>24 per page</option>
                <option value={48}>48 per page</option>
              </select>

              {/* Sort */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                className="px-3 py-2 border border-bg-secondary rounded-md bg-text-color text-bg text-sm"
              >
                <option value="asc">Sort A-Z</option>
                <option value="desc">Sort Z-A</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-bg-secondary rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "bg-text-color text-bg hover:bg-text-color-secondary"
                  }`}
                >
                  <Squares2X2Icon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "bg-text-color text-bg hover:bg-text-color-secondary"
                  }`}
                >
                  <ListBulletIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          {paginatedProducts.length > 0 ? (
            <>
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
                  {paginatedProducts.map((product, index) => (
                    <ProductCard key={index} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {paginatedProducts.map((product, index) => (
                    <ListView key={index} product={product} index={index} />
                  ))}
                </div>
              )}

              <Pagination />
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-bg opacity-50 mb-4">
                <MagnifyingGlassIcon className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-medium text-bg mb-2">
                No products found
              </h3>
              <p className="text-bg opacity-75 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulkProductSection;

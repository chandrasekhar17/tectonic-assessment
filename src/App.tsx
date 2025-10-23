import { useState } from 'react'
import { Header } from './components/layout/Header'
import { LookbookContainer } from './components/lookbook/LookbookContainer'
import { ProductDetail } from './components/product/ProductDetail'
import { mockLooks } from './data/mockData'
import type { Product } from './types'
import './App.css'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentLookIndex, setCurrentLookIndex] = useState(0)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
  }

  const handleCloseProductDetail = () => {
    setSelectedProduct(null)
  }

  const handleNextLook = () => {
    setCurrentLookIndex((prev) => (prev + 1) % mockLooks.length)
  }

  const handlePrevLook = () => {
    setCurrentLookIndex((prev) => (prev - 1 + mockLooks.length) % mockLooks.length)
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onClose={handleCloseProductDetail}
          />
        ) : (
          <LookbookContainer
            currentLook={mockLooks[currentLookIndex]}
            onProductClick={handleProductClick}
            onNextLook={handleNextLook}
            onPrevLook={handlePrevLook}
            currentIndex={currentLookIndex}
            totalLooks={mockLooks.length}
          />
        )}
      </main>
    </div>
  )
}

export default App

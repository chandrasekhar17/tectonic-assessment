import { useState } from 'react'
import type { Product } from '../../types'
import './ProductDetail.css'

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const handleAddToCart = () => {
    console.log('Adding to cart:', { product, selectedSize, selectedColor })
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <div className="product-detail-overlay" onClick={onClose}>
      <div className="product-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close product details">
          ✕
        </button>
        
        <div className="product-content">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            <p className="category">Category: {product.category}</p>
            
            <div className="product-options">
              <div className="size-selector">
                <h4>Size</h4>
                <div className="options">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      className={`option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="color-selector">
                <h4>Color</h4>
                <div className="options">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              className="add-to-cart"
              onClick={handleAddToCart}
              disabled={!selectedSize || !selectedColor}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'
import type { Annotation, Product } from '../../types'
import './ProductAnnotation.css'

interface ProductAnnotationProps {
  annotation: Annotation
  product: Product
  onClick: () => void
}

export const ProductAnnotation = ({ annotation, product, onClick }: ProductAnnotationProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="product-annotation"
      style={{
        left: `${annotation.x}%`,
        top: `${annotation.y}%`
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="annotation-dot">
        <div className="dot-pulse" />
      </div>
      
      <div className="annotation-label">
        {annotation.label}
      </div>
      
      <div className={`annotation-tooltip ${isHovered ? 'visible' : ''}`}>
        <div className="tooltip-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="tooltip-content">
          <h4 className="product-name">{product.name}</h4>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-category">{product.category}</p>
          <div className="product-colors">
            {product.colors.slice(0, 3).map(color => (
              <span 
                key={color} 
                className="color-dot" 
                style={{ 
                  backgroundColor: color.toLowerCase() === 'multi' ? 
                    '#ff6b6b' : 
                    color.toLowerCase() === 'white' ? '#f0f0f0' :
                    color.toLowerCase() === 'beige' ? '#f5f5dc' :
                    color.toLowerCase() === 'navy' ? '#000080' :
                    color.toLowerCase() === 'black' ? '#000000' :
                    color.toLowerCase() === 'brown' ? '#8b4513' :
                    color.toLowerCase() === 'blue' ? '#0066cc' :
                    color.toLowerCase() === 'pink' ? '#ff69b4' :
                    color.toLowerCase() === 'red' ? '#ff0000' :
                    color.toLowerCase() === 'gray' ? '#808080' :
                    color.toLowerCase() === 'cream' ? '#fffdd0' :
                    color.toLowerCase()
                }}
                title={color}
              />
            ))}
          </div>
        </div>
        <div className="tooltip-arrow" />
      </div>
    </div>
  )
}
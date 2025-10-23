import { useState } from 'react'
import type { Look, Product, VideoState } from '../../types'
import './LookViewer.css'
import { ProgressBar } from '../ui/ProgressBar'
import { MediaViewer } from '../media/MediaViewer'
import { ProductAnnotation } from './ProductAnnotation'

interface LookViewerProps {
  look: Look
  onProductClick: (product: Product) => void
}

export const LookViewer = ({ look, onProductClick }: LookViewerProps) => {
  const [videoState, setVideoState] = useState<VideoState>({
    isPlaying: false,
    isMuted: false,
    progress: 0,
    duration: 0
  })
  const [showAnnotations, setShowAnnotations] = useState(true)

  const handleVideoStateChange = (newState: Partial<VideoState>) => {
    setVideoState(prev => ({ ...prev, ...newState }))
  }

  const handleMediaClick = () => {
    if (look.video) {
      setVideoState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
    }
  }

  const handleAnnotationClick = (productId: string) => {
    const product = look.products.find(p => p.id === productId)
    if (product) {
      onProductClick(product)
    }
  }

  return (
    <div className="look-viewer">
      <div className="media-container">
        <MediaViewer
          image={look.image}
          video={look.video}
          videoState={videoState}
          onVideoStateChange={handleVideoStateChange}
          onMediaClick={handleMediaClick}
        />
        
        {look.video && !videoState.isPlaying && (
          <ProgressBar progress={videoState.progress} duration={videoState.duration} />
        )}
        
        {showAnnotations && (
          <div className="annotations-overlay">
            {look.annotations.map(annotation => {
              const product = look.products.find(p => p.id === annotation.productId)
              return product ? (
                <ProductAnnotation
                  key={annotation.id}
                  annotation={annotation}
                  product={product}
                  onClick={() => handleAnnotationClick(annotation.productId)}
                />
              ) : null
            })}
          </div>
        )}
        
        <button 
          className="toggle-annotations"
          onClick={() => setShowAnnotations(!showAnnotations)}
          title={showAnnotations ? 'Hide annotations' : 'Show annotations'}
        >
          {showAnnotations ? '👁️' : '👁️‍🗨️'}
        </button>
      </div>
    </div>
  )
}
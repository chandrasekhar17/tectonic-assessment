
import type { Look, Product } from '../../types'
import './LookbookContainer.css'
import { LookNavigation } from './LookNavigation'
import { LookViewer } from './LookViewer'

interface LookbookContainerProps {
  currentLook: Look
  onProductClick: (product: Product) => void
  onNextLook: () => void
  onPrevLook: () => void
  currentIndex: number
  totalLooks: number
}

export const LookbookContainer = ({
  currentLook,
  onProductClick,
  onNextLook,
  onPrevLook,
  currentIndex,
  totalLooks
}: LookbookContainerProps) => {
  return (
    <div className="lookbook-container">
      <div className="lookbook-header">
        <h2>{currentLook.title}</h2>
        <p>{currentLook.description}</p>
        {currentLook.celebrity && (
          <span className="celebrity">Styled by {currentLook.celebrity}</span>
        )}
      </div>
      
      <LookViewer 
        look={currentLook}
        onProductClick={onProductClick}
      />
      
      <LookNavigation
        onNext={onNextLook}
        onPrev={onPrevLook}
        currentIndex={currentIndex}
        totalItems={totalLooks}
      />
    </div>
  )
}
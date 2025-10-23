import './LookNavigation.css'

interface LookNavigationProps {
  onNext: () => void
  onPrev: () => void
  currentIndex: number
  totalItems: number
}

export const LookNavigation = ({ onNext, onPrev, currentIndex, totalItems }: LookNavigationProps) => {
  return (
    <div className="look-navigation">
      <button 
        className="nav-button prev"
        onClick={onPrev}
        disabled={currentIndex === 0}
        aria-label="Previous look"
      >
        ←
      </button>
      
      <div className="nav-indicators">
        {Array.from({ length: totalItems }, (_, index) => (
          <div 
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <button 
        className="nav-button next"
        onClick={onNext}
        disabled={currentIndex === totalItems - 1}
        aria-label="Next look"
      >
        →
      </button>
    </div>
  )
}
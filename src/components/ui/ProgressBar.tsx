import './ProgressBar.css'

interface ProgressBarProps {
  progress: number
  duration: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="progress-bar">
      <div 
        className="progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
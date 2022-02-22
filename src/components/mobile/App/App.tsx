import "./App.css"
interface AppProps {
  icon: string;
  title: string;
  onClick: () => void;
}

export default function App({ icon, title, onClick }: AppProps) {
  return (
    <button className="app-icon">
      <img 
        src={icon} 
        draggable={false} 
        alt={title}
        onClick={onClick}
      />
      <span>{title}</span>
    </button>
  )
}
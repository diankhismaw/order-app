import { ReactNode } from "react"
type ButtonType = 'primary' | 'secondary' | 'disabled'
interface PropsButton {
  type: ButtonType,
  children: ReactNode,
  onClick: () => void,
}
export const Button = ({type, children, onClick}:PropsButton) => {
  const buttonClassName = () => {
    if (type === "primary") {
      return 'bg-slate-950 text-slate-50 p-3 rounded-lg'
    }
    if (type === 'secondary') {
      return 'bg-slate-900 text-slate-50 p-3 rounded-lg'
    }
    if (type === 'disabled') {
      return 'bg-slate-800 text-slate-50 p-3 rounded-lg'
    } 
  }
  return (
    <button className={buttonClassName()} onClick={() => onClick()}>
      {children}
    </button>
  )
}
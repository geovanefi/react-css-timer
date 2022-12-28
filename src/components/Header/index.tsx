import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/ignitelogo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logoIgnite}
        alt="Logo da pagina com desenho de dois triangulos verdes, inclinados a direita sobrepostos"
      />
      <nav>
        <NavLink to="/" title="Página Inicial">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

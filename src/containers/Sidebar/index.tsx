import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Igor Murta</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        igormurta7
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Front-end Developer
      </Descricao>
      <BotaoTema>Switch theme</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar

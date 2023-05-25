import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>About me</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi quia,
      magni sit adipisci aut labore unde doloribus quidem aspernatur hic,
      incidunt perferendis facere autem. Saepe amet nam consequatur nobis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=igormurta7&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=igormurta7&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre

import { Container } from './style'
import Habit from '../../components/Habit'

export default function InitialPage() {
  return (
    <Container>
      <h1>Teste</h1>
      <Habit completed={1} />
      <Habit completed={2} />
      <Habit completed={5} />
      <Habit completed={10} />
      <Habit completed={15} />
    </Container>
  )
}

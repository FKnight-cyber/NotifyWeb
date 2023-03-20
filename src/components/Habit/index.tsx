import { Container } from './style'

interface HabitProps {
  completed: number
}

export default function Habit(props: HabitProps) {
  return (
    <Container completed={props.completed}>
      <h1>{props.completed}</h1>
    </Container>
  )
}

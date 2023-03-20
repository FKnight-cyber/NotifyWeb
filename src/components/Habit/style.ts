import styled from 'styled-components/macro'

interface Props {
  completed: number
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: purple;
  border-radius: 6px;
  margin-top: 4px;

  h1 {
    color: ${(props) => (props.completed > 10 ? 'red' : 'white')};
  }
`

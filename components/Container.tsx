import styled, { StyledComponent } from 'styled-components'
import { FontFamilyProps, SpaceProps, space, themeGet } from 'styled-system'

const Container: StyledComponent<
  'div',
  {},
  SpaceProps & FontFamilyProps
> = styled.div`
  max-width: 64rem;
  ${space};
`

Container.defaultProps = {
  color: 'body',
  mx: [2, 3, 4],
}

export default Container

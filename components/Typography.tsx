import styled, { StyledComponent } from 'styled-components'
import {
  themeGet,
  color,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  ColorProps,
  SpaceProps,
  space,
} from 'styled-system'

const H1: StyledComponent<
  'h1',
  {},
  FontFamilyProps & FontSizeProps & ColorProps & SpaceProps
> = styled.h1`
  font-weight: 400;
  ${fontSize};
  ${fontFamily};
  ${color};
  ${space};
`

H1.defaultProps = {
  color: 'heading',
  fontFamily: 'asap',
  fontSize: '4rem',
}

const H2: StyledComponent<
  'h2',
  {},
  FontFamilyProps & FontSizeProps & ColorProps & SpaceProps
> = styled.h2`
  font-weight: 400;
  font-size: 3.2rem;
  ${fontSize};
  ${fontFamily};
  ${color};
  ${space};
`

H2.defaultProps = {
  color: 'heading',
  fontFamily: 'asap',
}

const H3: StyledComponent<
  'h3',
  {},
  FontFamilyProps & ColorProps & SpaceProps
> = styled.h3`
  font-weight: 400;
  font-size: 2.8rem;
  ${fontFamily};
  ${color};
  ${space};
`

H3.defaultProps = {
  color: 'heading',
  fontFamily: 'asap',
}

const H4: StyledComponent<
  'h4',
  {},
  FontFamilyProps & ColorProps & SpaceProps
> = styled.h4`
  font-weight: 400;
  font-size: 2.4rem;
  ${fontFamily};
  ${color};
  ${space};
`

H4.defaultProps = {
  color: 'body',
  fontFamily: 'asap',
  marginBottom: 2,
}

const P: StyledComponent<
  'p',
  {},
  FontFamilyProps & FontSizeProps & ColorProps & SpaceProps
> = styled.p`
  font-weight: 400;
  line-height: 2.8rem;
  ${fontSize};
  ${fontFamily};
  ${color};
  ${space};
`

P.defaultProps = {
  color: 'body',
  fontFamily: 'asap',
  fontSize: '2rem',
}

const Blockquote: StyledComponent<
  'blockquote',
  {},
  FontFamilyProps & ColorProps & SpaceProps
> = styled.blockquote`
  font-weight: 400;
  font-style: italic;
  margin-left: ${themeGet('space.2')};
  position: relative;
  ${fontFamily};
  ${color};
  ${space};

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    top: 0;
    left: -${themeGet('space.2')};
    width: ${themeGet('space.5')};
    opacity: 0.1;
    background-color: ${themeGet('colors.secondary')};
  }
`

Blockquote.defaultProps = {
  fontFamily: 'asap',
  color: 'body',
  marginBottom: 3,
}

const Ul: StyledComponent<'ul', {}, SpaceProps> = styled.ul`
  ${space}
`

const Li: StyledComponent<
  'li',
  {},
  ColorProps & FontFamilyProps & FontSizeProps
> = styled.li`
  ${fontFamily};
  ${fontSize};
  ${color};
`

Li.defaultProps = {
  color: 'body',
  fontFamily: 'asap',
}

const A: StyledComponent<
  'a',
  {},
  ColorProps & FontFamilyProps & FontSizeProps
> = styled.a`
  text-decoration: none;
  position: relative;
  ${fontFamily};
  ${fontSize};
  ${color};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: ${themeGet('space.2')};
    opacity: 0.1;
    background-color: ${themeGet('colors.secondary')};
    transition: opacity ease-in-out 0.3s;
  }

  &:hover {
    &::after {
      opacity: 0.2;
    }
  }
`

A.defaultProps = {
  color: 'secondary',
  fontFamily: 'asap',
}

export { H1, H2, H3, H4, P, Ul, Li, A, Blockquote }

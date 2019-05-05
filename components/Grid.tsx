import styled, { StyledComponent } from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  SpaceProps,
  ColorProps,
  WidthProps,
  FontSizeProps,
  FlexProps,
  OrderProps,
  AlignSelfProps,
  FlexWrapProps,
  FlexDirectionProps,
  AlignItemsProps,
  JustifyContentProps,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system'

const Box: StyledComponent<
  'div',
  {},
  SpaceProps &
    ColorProps &
    WidthProps &
    FontSizeProps &
    FlexProps &
    OrderProps &
    AlignSelfProps
> = styled.div`
  ${space};
  ${color};
  ${width};
  ${fontSize};
  ${flex};
  ${order};
  ${alignSelf};
`

const Flex: StyledComponent<
  'div',
  {},
  SpaceProps &
    ColorProps &
    WidthProps &
    FontSizeProps &
    FlexProps &
    OrderProps &
    AlignSelfProps &
    FlexWrapProps &
    FlexDirectionProps &
    AlignItemsProps &
    JustifyContentProps
> = styled.div`
  ${space};
  ${color};
  ${width};
  ${fontSize};
  ${flex};
  ${order};
  ${alignSelf};
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
`

export { Box, Flex }

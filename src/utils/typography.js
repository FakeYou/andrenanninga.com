import Typography from 'typography';
import theme from 'typography-theme-alton';

const typography = new Typography({
	...theme,
	overrideStyles: (config, options) => ({
		...theme.overrideStyles(config, options),
		small: {
			fontFamily: theme.headerFontFamily.join(', '),
			fontSize: '60%'
		}
	})
});

console.log(typography);

export default typography;

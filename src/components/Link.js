import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const A = styled.a`
	color: #ff2b17;
	transition: all 0.05s;

	&:hover {
		text-decoration: underline;
	}
`;

const Link = styled(GatsbyLink)`
	color: #ff2b17;
	transition: all 0.05s;

	&:hover {
		text-decoration: underline;
	}
`;

console.log(A.css);

export default ({ href, to, ...props }) => {
	if (href) {
		return <A href={href} {...props} />;
	}

	return <Link to={to} {...props} />;
};

// export default Link;

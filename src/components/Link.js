import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const A = styled.a`
	color: #ff2b17;
	padding: 0.1rem 0.3rem 0 0.3rem;
	transition: all 0.05s;

	&:hover {
		background-color: #ff2b17;
		color: #fff;
	}
`;

const Link = styled(GatsbyLink)`
	color: #ff2b17;
	padding: 0.1rem 0.3rem 0 0.3rem;
	transition: all 0.05s;

	&:hover {
		background-color: #ff2b17;
		color: #fff;
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

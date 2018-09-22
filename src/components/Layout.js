import React from 'react';
import styled from 'styled-components';

import Helmet from 'react-helmet';

const Container = styled.div`
	max-width: 40rem;
	margin: 5rem auto;
	position: relative;
`;

const Layout = ({ children }) => (
	<>
		<Helmet>
			<title>💾 André Nanninga</title>
		</Helmet>
		<Container>{children}</Container>
	</>
);

export default Layout;

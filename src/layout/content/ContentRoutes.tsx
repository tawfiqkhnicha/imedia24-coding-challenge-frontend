import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

const ContentRoutes = () => {
	return (
		<Routes>
			{routes.map((page) => (
				// eslint-disable-next-line react/jsx-props-no-spreading
				<Route key={page.path} {...page} />
			))}
			<Route path='*' element={<Navigate to='/404' replace />} />
		</Routes>
	);
};

export default ContentRoutes;

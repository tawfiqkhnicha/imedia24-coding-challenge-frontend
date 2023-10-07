import { lazy } from 'react';

export const POKEMONE = {
    DASHBOARD: {
        INDEX: {
            ELEMENT: lazy(() => import('./dashboard/Dashboard')),
            PATH: '/',
        }
    },

    NOT_FOUND: {
        INDEX: {
            ELEMENT: lazy(() => import('./error/Page404')),
            PATH: '/404',

        }
    }
};
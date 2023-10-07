import { POKEMONE } from "../pages/export";

export const routes = [
    {
		path: POKEMONE.DASHBOARD.INDEX.PATH,
		element: <POKEMONE.DASHBOARD.INDEX.ELEMENT/>,
		exact: true
	},
	{
		path: POKEMONE.NOT_FOUND.INDEX.PATH,
		element: <POKEMONE.NOT_FOUND.INDEX.ELEMENT/>,
		exact: true
	},
]
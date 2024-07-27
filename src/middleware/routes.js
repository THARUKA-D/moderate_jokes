const { getNewJoke, deleteJoke, addJoke, login } = require("../controllers/jokes-controller");

const commonRoutes = [
	{
		path: "/login",
		handler: login,
		method: "post",
	},
];

const authenticatedRoutes = [
	{
		path: "/addNewJoke",
		handler: addJoke,
		method: "post",
	},
	{
		path: "/deleteJoke",
		handler: deleteJoke,
		method: "post",
	},
	{
		path: "/getNewJoke",
		handler: getNewJoke,
		method: "get",
	},
];

module.exports = {
	commonRoutes,
	authenticatedRoutes,
};
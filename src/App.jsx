import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Mid from './main/MainPage';
import SignInPage from './main/SignInPage'; // SignInPage를 import 합니다.
import Register from './main/Register'; 
import MyPage from './main/MyPage'; 
import Post from './main/Post'; 
import Gongji from './main/Gongji'; 
import SugangPage from './main/SugangPage';
import EventPage from './main/EventPage'; 
import EventPages from './main/EventPages';

import "./csscss.css";
import "./chaeCss.css";
import "./css3.css";

/** @type {import("react-router-dom").RouteObject[]} */
const routers = [
	{
		path: "/",
		element: <Mid />,
	},
	{
		path: "/signin",
		element: <SignInPage />,
	},
	{
		path: "/Register",
		element: <Register />,
	},
	{
		path: "/MyPage",
		element: <MyPage />,
	},
	{
		path: "/Post",
		element: <Post />,
	},
	{
		path: "/EventPage",
		element: <EventPage />,
	},
	{
		path: "/Gongji",
		element: <Gongji />,
	},
	{
		path: "/SugangPage",
		element: <SugangPage />,
	},
	{
		path: "/EventPages",
		element: <EventPages />
	},
];

const router = createBrowserRouter(routers, {
	basename: process.env.PUBLIC_URL,
});

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;

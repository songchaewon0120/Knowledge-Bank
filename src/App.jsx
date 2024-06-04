import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Mid from './main/MainPage';
import SignInPage from './main/SignInPage'; // SignInPage를 import 합니다.

import "./csscss.css";
import "./chaeCss.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Mid/>
	},
	{
		path: "/signin",
		element: <SignInPage/>
	},
]);

function App() {
    return (
		<RouterProvider router={router}/>
    );
}

export default App;

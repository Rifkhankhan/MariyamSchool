import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Sports from '../Pages/Sports/Sports'
import BlogDetails from '../Pages/BlogDetails/BlogDetails'
import Profile from '../Pages/Profile/Profile'
import Blogs from '../Components/Blog/Blog'
import CreateBlog from '../Components/CreateFruitComponent/CreateFruitComponent'
import Dashboard from '../Components/Dashboard/Dashboard'
// import Home from '../Pages/Home/Home'

import Login from '../Pages/Login/Login'
import Technology from '../Pages/Technology/Technology'
import Animals from '../Pages/Animals/Animals'
import News from '../Pages/News/News'
import ResetPage from '../Pages/ResetPage/ResetPage'
import Personal from '../Components/Personal/Personal'

const Routers = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

	// const PrivateRoute = ({ children }) => {
	// 	const isAuthenticated = useSelector(state => state.netflixAuth.isAuthenticated)
	// 	return isAuthenticated ? <>{children}</> : <Navigate to="/netflix" />;
	// }

	// const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
	// const isAuthenticated = useSelector(
	// 	state => state.netflixAuth.isAuthenticated
	// )

	// useEffect(() => {
	// 	dispatch(netflixAuthActions.autoLogin())
	// }, [dispatch])
// 	<Route path="/topics" element={<Topics />}>
	// 	<Route path=":topicId" element={<Topic />}>
	// 	  <Route path=":resourceId" element={<Resource />} />
	// 	</Route>
//   </Route>
	//   console.log(isAuthenticated);
	return (
		<Routes>
		 <Route path="/" element={<Home />} />
		 <Route path="/login" element={<Login />} />
		 <Route path="/sports" element={<Sports />} />
		 <Route path="/technology" element={<Technology />} />
		 <Route path="/animals" element={<Animals />} />
		 <Route path="/news" element={<News />} />
		 <Route path="/reset/:token" element={<ResetPage />} />
		 <Route path="/blogs/:id" element={<BlogDetails />} />
		{isAuthenticated && <Route path="/profile" element={<Profile />} >
		 	 <Route index element={<Dashboard /> } />
		 	 <Route path='blogs' element={<Blogs /> } />
		 	 <Route path='personal' element={<Personal /> } />
			 <Route path='create-blog' element={<CreateBlog /> } />
		 </Route>}
	
		 <Route path="*" element={<Home />} />

		 	{/* {isAuthenticated && (
		// 		<Route path="/netflix/profile" element={<NetflixProfile />}>
		// 			<Route index element={<Movies />} />
		// 			<Route path="movies" element={<Movies />} />
		// 			<Route path="series" element={<Series />} />
		// 			<Route path="users" element={<Users />} />
		// 			<Route path="likes" element={<LikesComponents />} />
		// 			<Route path="unlikes" element={<DisLikeComponents />} />
		// 			<Route path="yourVideos" element={<YourVideosComponent />} />
		// 			<Route path="downloads" element={<DownloadsComponent />} />
		// 			<Route path="watchLater" element={<WatchLaterComponent />} />
		// 			<Route path="category" element={<AddCategory />} />
		// 			<Route path="*" element={<Series />} />
		// 		</Route>
		// 	)} */}

	

		

		

		</Routes>
	)
}

export default Routers

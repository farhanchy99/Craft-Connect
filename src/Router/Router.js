import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import EditProfile from "../Pages/EditProfile/EditProfile";
import Profile from "../Pages/Profile/Profile";
import SellerPro from "../Pages/SellerPro/SellerPro";
import FollowPages from "../Pages/FollowPages/FollowPages";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import FeatureLayout from "../Layout/FeatureLayout";
import Friends from "../Pages/Friends/Friends";
import Watch from "../Pages/Watch/Watch";
import Groups from "../Pages/Groups/Groups";
import MarketPlace from "../Pages/MarketPlace/MarketPlace";
import BookMarked from "../Pages/BookMarked/BookMarked";
import AdCenter from "../Pages/AdCenter/AdCenter";
import AdsManager from "../Pages/AdsManager/AdsManager";
import Pages from "../Pages/Fb_Pages/Pages";


export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRouter><Main></Main></PrivateRouter>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      { path: '/home', element: <Home></Home> },
      { path: '/profile', element: <Profile></Profile> },
      { path: '/editprofile', element: <EditProfile></EditProfile> },
      { path: '/sellerpro', element: <SellerPro></SellerPro> },
      { path: '/pages', element: <FollowPages></FollowPages> },
    ]
  },
  {
    path: '/feature',
    element: <PrivateRouter><FeatureLayout></FeatureLayout></PrivateRouter>,
    children: [
      {
        path: '/feature/friends',
        element: <Friends></Friends>
      },
      {
        path: '/feature/watch',
        element: <Watch></Watch>
      },
      {
        path: '/feature/groups',
        element: <Groups></Groups>
      },
      {
        path: '/feature/marketplace',
        element: <MarketPlace></MarketPlace>
      },
      {
        path: '/feature/bookmarked',
        element: <BookMarked></BookMarked>
      },
      {
        path: '/feature/adcenter',
        element: <AdCenter></AdCenter>
      },
      {
        path: '/feature/adsmanager',
        element: <AdsManager></AdsManager>
      },
      {
        path: '/feature/pages',
        element: <Pages></Pages>
      },
    ]
  },
  { path: "/login", element: <Login></Login> },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

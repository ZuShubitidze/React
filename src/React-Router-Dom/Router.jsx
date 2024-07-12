import AboutPage from "./AboutPage";
import ErrorPage from "./ErrorPage";
import LinkLayout from "./LinkLayout";
import MainPage from "./MainPage";
import ParamPage from "./ParamPage";

const router = [
  
  {
    element: <LinkLayout />,
    path: '/',
    children: [
      {
        element: <MainPage />,
        index: true
      },
      {
        element: <MainPage />,
        path: 'main'
      },
      {
        element: <AboutPage />,
        path: 'about'
      },
    ]},
    {
      element: <ParamPage />,
      path: '/:factId'
    },
    {
      element: <ErrorPage />,
      path: '*'
    }
  ]

export default router
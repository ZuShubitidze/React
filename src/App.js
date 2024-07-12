// import Profile from "./Profile.jsx";
// import BooksList from "./Books/BooksList";
// import DarkMode from "./DarkModeHomeWork/DarkMode.jsx";
// import MyList from "./MyList.jsx";
// import ToDoList from "./HomeWork07.09/ToDoList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./React-Router-Dom/Router";

function App() {
  // return <Profile />;
  // return <BooksList />
  return (
    <>
      {/* <UseState /> */}
      {/* <MyList /> */}
      {/* <DarkMode /> */}
      {/* <ToDoList /> */}
      <RouterProvider router={createBrowserRouter(router)} />
    </>
  )
}

export default App;
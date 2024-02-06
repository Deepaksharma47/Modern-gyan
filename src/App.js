import "./App.css";
import { Route, Routes  } from "react-router-dom";
import Home from "./pages/Home"
import {Signup} from "./pages/Signup";
import Navbar from "./components/common/Navbar";
import { OpenRoute } from "./components/core/auth/OpenRoute";
import { Login } from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyOtp from "./pages/VerifyOtp";
import About from "./pages/About";
import ContactUsPage from "./pages/ContactUsPage";
import MyProfile from "./components/core/Dashboard/MyProfile";
import PrivateRoute from "./components/core/auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { Error } from "./pages/Error";
// import Settings from "./components/core/Dashboard/settings/Index";

import SettingPage from "./components/core/Dashboard/settings/SettingPage";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/cart/index"
// import AddCourse from "./components/core/Dashboard/AddCourse/index";
import AddCourse from "./components/core/Dashboard/AddCourse/index"
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/index"
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from "./pages/ViewCourse";
// import VideoDetails from 
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import TestingPage from "./components/TestingPage/TestingPage";


function App() {


  const { user } = useSelector((state) => state.profile)



  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="catalog/:catalogName" element={<Catalog/>}/>
      <Route path="courses/:courseId" element= {<CourseDetails/>}/>

      <Route path="/signup"
        element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        }
      />
      <Route path="/login" 
      element={
        <OpenRoute>
          <Login/>
        </OpenRoute>
      }/>
    <Route path="/forgot-password" 
      element={
        <OpenRoute>
          <ForgotPassword/>
        </OpenRoute>
      }/>
      <Route path="/update-password/:id"
        element={
          <OpenRoute>
            <UpdatePassword/>
          </OpenRoute>
        }
      />
      <Route path="/verify-email"
        element={
          <OpenRoute>
            <VerifyOtp/>
          </OpenRoute>
        }
      />
      <Route path="/about"
        element={<About/>}
      />

      <Route path="/contact"
        element={<ContactUsPage/>}
      />

      <Route element={
          <PrivateRoute>
            <Dashboard/>
            
          </PrivateRoute>
        }>
          <Route path="dashboard/my-profile" element={<MyProfile/>}/>
          <Route path="dashboard/settings" element={<SettingPage/>}/>


        {
          user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
            <Route path="dashboard/cart" element={<Cart />} />
            <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
            </>
          )
        }

        {
          user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
            <Route path="dashboard/add-course" element={<AddCourse/>} />
            <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
            </>
          )
        }

        </Route>

      <Route path="*" element={<Error/>}/>

      <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
          {/* <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId" element={<TestingPage/>}/> */}
        </Route>


    </Routes>
    </div>
  );
}

export default App;
 
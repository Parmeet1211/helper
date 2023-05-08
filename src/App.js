import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './components/main/Main';
import SignIn from './components/signin/SignIn';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Contact from './components/contact/Contact';
import Dashboard from './Admin/components/dashboard/Dashboard';
import Summary from './Admin/components/summary/Summary';
import Project from './Admin/components/project/Project';
import ProjectView from './Admin/components/project/ProjectView';
import AddProject from './Admin/components/project/AddProject';
import Task from './Admin/components/tasks/Task';
import TaskView from './Admin/components/tasks/TaskView';
import AddTask from './Admin/components/tasks/AddTask';
import SingleTask from './Admin/components/tasks/SingleTask';
import Employee from './Admin/components/employee/Employee';
import AddEmployee from './Admin/components/employee/AddEmployee';
import ViewEmployee from './Admin/components/employee/ViewEmployee';
import Report from './Admin/components/reports/Report';
import AssignTask from './Admin/components/tasks/AssignTask';
import View from './Admin/components/employee/View';
import ViewSingle from './Admin/components/project/ViewSingle';
import Board from './Admin/components/Boards/Board';
import Enquiry from './Admin/components/enquiry/Enquiry';
import Reply from './Admin/components/enquiry/Reply';
import Team from './Admin/components/teams/Team';
import Detail from './Admin/components/teams/Detail';
import Master from './User/components/main/Master';
import Profile from './User/components/profile/Profile';
import UpdateProfile from './User/components/profile/UpdateProfile';
import UpdateEmployee from './Admin/components/employee/UpdateEmployee';
import UpdateProject from './Admin/components/project/UpdateProject';
import UpdateTask from './Admin/components/tasks/UpdateTask';
import EmployeeTask from './User/components/task/EmployeeTask';
import TeamView from './Admin/components/teams/TeamView';
import TaskDetail from './User/components/task/TaskDetail';
import History from './User/components/task/History';
import EnquiryUser from './User/components/enquiry/EnquiryUser';
import Replies from './User/components/enquiry/Replies';
import UserHome from './User/components/home/UserHome';
import UserTeam from './User/components/home/UserTeam';
import UserProject from './User/components/home/UserProjects';
import ReportUser from './User/components/report/ReportUser';
import AddCategory from './Admin/components/category/AddCategory';
import ViewCategory from './Admin/components/category/ViewCategory';
import UpdateCategory from './Admin/components/category/UpdateCategory';
import ContactView from './Admin/components/contact/contact';
import Changepassword from './User/components/changepassword/Changepassword';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
        <Route path='/admin' element={<Dashboard/>}>
          <Route path='/admin' element={<Summary/>}/>
          <Route path='/admin/project' element={<Project/>}/>
          <Route path='/admin/projectview' element={<ProjectView/>}/>
          <Route path='/admin/updateproject' element={<UpdateProject/>}/>
          <Route path='/admin/viewsingle' element={<ViewSingle/>}/>
          <Route path='/admin/addproject' element={<AddProject/>} /> 
          <Route path='/admin/task' element={<Task/>}/>
          <Route path='/admin/taskview' element={<TaskView/>}/>
          <Route path='/admin/updatetask' element={<UpdateTask/>}/>
          <Route path='/admin/singletask' element={<SingleTask/>}/>
          <Route path='/admin/addtask' element={<AddTask/>}/>
          <Route path='/admin/assigntask' element={<AssignTask/>}/>
          <Route path='/admin/employee' element={<Employee/>}/>
          <Route path='/admin/addemployee' element={<AddEmployee/>}/>
          {/* <Route path='employee/addemployee' element={<AddEmployee/>}/> */}
          <Route path='/admin/viewemployee' element={<ViewEmployee/>}/>
          <Route path='/admin/updateemployee' element={<UpdateEmployee/>}/>
          <Route path='/admin/view' element={<View/>}/>
          <Route path='/admin/report' element={<Report/>}/>
          <Route path='/admin/board' element={<Board/>}/>
          <Route path='/admin/enquiry' element={<Enquiry/>}/>
          <Route path='/admin/reply' element={<Reply/>}/>
          <Route path='/admin/teams' element={<Team/>}/>
          <Route path='/admin/teamview' element={<TeamView/>}/>
          <Route path='/admin/details' element={<Detail/>}/>
          <Route path='/admin/addcategory' element={<AddCategory/>}/>
          <Route path='/admin/viewcategory' element={<ViewCategory/>}/>
          <Route path='/admin/updatecategory' element={<UpdateCategory/>}/>
          <Route path='/admin/viewcontact' element={<ContactView/>}/>

        </Route>
        <Route path='/user' element={<Master/>}>
          <Route path='/user' element={<UserHome/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='/user/update' element={<UpdateProfile/>}/>
          <Route path='/user/employeetask' element={<EmployeeTask/>}/>
          <Route path='/user/taskdetail' element={<TaskDetail/>}/>
          <Route path='/user/history' element={<History/>}/>
          <Route path='/user/enquiry' element={<EnquiryUser/>}/>
          <Route path='/user/reply' element={<Replies/>}/>
          <Route path='/user/teams' element={<UserTeam/>}/>
          <Route path='/user/projects' element={<UserProject/>}/>
          <Route path='/user/reportuser' element={<ReportUser/>}/>
          <Route path='/user/changepassword' element={<Changepassword/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

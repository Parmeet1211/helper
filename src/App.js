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
import Employee from './Admin/components/employee/Employee';
import AddEmployee from './Admin/components/employee/AddEmployee';
import ViewEmployee from './Admin/components/employee/ViewEmployee';
import Report from './Admin/components/reports/Report';
import AssignTask from './Admin/components/tasks/AssignTask';
import View from './Admin/components/employee/View';
import ViewSingle from './Admin/components/project/ViewSingle';
import Board from './Admin/components/Boards/Board';

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
          <Route path='project' element={<Project/>}/>
          <Route path='project/projectview' element={<ProjectView/>}/>
          <Route path='project/projectview/viewsingle' element={<ViewSingle/>}/>
          <Route path='project/addproject' element={<AddProject/>} /> 
          <Route path='task' element={<Task/>}/>
          <Route path='task/taskview' element={<TaskView/>}/>
          <Route path='task/addtask' element={<AddTask/>}/>
          <Route path='task/assigntask' element={<AssignTask/>}/>
          <Route path='employee' element={<Employee/>}/>
          <Route path='employee/addemployee' element={<AddEmployee/>}/>
          {/* <Route path='employee/addemployee' element={<AddEmployee/>}/> */}
          <Route path='employee/viewemployee' element={<ViewEmployee/>}/>
          <Route path='employee/viewemployee/view' element={<View/>}/>
          <Route path='report' element={<Report/>}/>
          <Route path='board' element={<Board/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

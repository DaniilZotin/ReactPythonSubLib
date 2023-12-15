import Course from "./components/courses/Course";
import Introduction from "./components/introduction/Introduction";
import Mentor from "./components/mentors/Mentor";
import Student_Course from "./components/student_cource/Student_Course";
import Student from "./components/students/Student";


function App() {
  return (
    <div className="App">
      <Introduction></Introduction>
      <Student></Student>
      <Mentor></Mentor>
      <Course></Course>
      <Student_Course></Student_Course>
    </div>
  );
}

export default App;

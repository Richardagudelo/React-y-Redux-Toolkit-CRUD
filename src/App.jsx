import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import { HashRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <HashRouter >
        {/* <HashRouter basename="/React-y-Redux-Toolkit-CRUD"> */}
          <Routes>
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  )
}

export default App;

// import TaskForm from "./components/TaskForm";
// import TasksList from "./components/TasksList";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="bg-zinc-900 h-screen text-white">
//       <div className="flex items-center justify-center h-full">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<TasksList />} />
//           <Route path="/create-task" element={<TaskForm />} />
//           <Route path="/edit-task/:id" element={<TaskForm />} />
//         </Routes>
//       </BrowserRouter>
//       </div>
//     </div>
//   )
// }

// export default App;
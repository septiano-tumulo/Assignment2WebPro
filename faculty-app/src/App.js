// import Comment from './components/Comment';

// const komentar = {
//   text: "This is my commentar",
//   date: new Date(),
//   author: {
//     avatarUrl: "https://via.placeholder.com/60",
//     name: "John Doe"
//   }
// };

// import HomePage from './pages/HomePage';
// import EmployeePage from './pages/EmployeePage';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   return(
//     <Router>
//       <div>
//         {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}

//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/employee" component={EmployeePage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// import ExampleStateHook from './components/ExampleStateHook';
// import Counter from './components/Counter';

// import Penghitung from './components/Penghitung';

import Todos from './components/todos/Todos';

function App() {
  return(
    <div className="container w-75 p-3">
      <Todos />
    </div>
  );
}

export default App;


// import React, { useState, useMemo } from 'react';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import { UserContext } from './UserContext';

// function App()  {
//   const [ user, setUser ] = useState('Guest');

//   const userValueProvider = useMemo(() => ({user, setUser}), [user, setUser]);

//   return(
//     <div>
//       <nav class="px-3 fs-3 navbar-dark bg-dark bg-gradient text-white"> {/*untuk mengatur, font-sizenya lalu background menjadi dark dan juga textnya menjadi warna putih */}
//         <Link class="link-light text-decoration-none" to="/">Home</Link> <Link class="link-light text-decoration-none" to="/about">About</Link> {/*text menjadi warna putih dan underlinenya dihilangkan atau none */}
        
//       </nav>

//       <UserContext.Provider value={userValueProvider}>
//         <Routes>
//           <Route path="/" element={<Home />}  />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;

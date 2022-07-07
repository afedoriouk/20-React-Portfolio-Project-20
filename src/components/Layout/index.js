import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tag top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tag bottom-tags">
          &lt;body&gt;
          <br />
          <span className="bottom-html">&lt;html&gt;</span>
        </span>
      </div>
    </div>
  )
}

// import { Routes, Route } from 'react-router-dom'
// import Layout from ',/component/Layout'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//       </Routes>
//     </>
//   )
// }
export default Layout

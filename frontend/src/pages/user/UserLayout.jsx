import { Outlet } from "react-router-dom"
import Sidebar from "../../components/Sidebar"

export default function UserLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto bg-white">
        <Outlet />
      </main>
    </div>
  )
}

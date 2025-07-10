import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import { CreateRoom } from "./pages/create-room";
import { Room } from "./pages/room";

export function App() {
    return (
   <Routes>
    <BrowserRouter>
      <Route element={<CreateRoom />} index />
      <Route element={<Room />} path="/room/id" />
    </BrowserRouter>
   </Routes>
  )
}


import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App({ state, addPost, UpdateNewPostText }) {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__wrapper__content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs state={state.dialogsPage} />}
            />
            <Route
              path="/profile/*"
              element={
                <Profile
                  state={state.profilePage}
                  addPost={addPost}
                  UpdateNewPostText={UpdateNewPostText}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

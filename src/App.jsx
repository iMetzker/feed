import "./global.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/SideBar";

export function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ipsum iste, omnis dolorum consequatur nihil fugit impedit excepturi fuga sed distinctio error, totam tempora. Dolorum ut earum saepe libero quae!"
          />
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ipsum iste, omnis dolorum consequatur nihil fugit impedit excepturi fuga sed distinctio error, totam tempora. Dolorum ut earum saepe libero quae!"
          />
        </main>
      </div>
    </>
  );
}

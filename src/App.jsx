import "./global.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/113571205?v=4",
      name: "Ivny Metzker",
      role: "Student Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir este projeto super legal! É meu primeiro projeto da jornada que estou fazendo na trilha Ignite, da Rocketseat. 🚀",
      },
      { type: "link", content: "👉 metzker.developer/feed" },
    ],
    publushedAt: new Date("2023-09-02 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "data:image/jpeg;base64,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",
      name: "Ana Carolina",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 carolina.developer/doctorcare" },
    ],
    publushedAt: new Date("2023-08-30 15:30:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <Sidebar />
        <main>
          { posts.map((post) => {
            return (
                <Post
                key={post.id}
                 author={post.author}
                 content={post.content}
                 publishedAt={post.publushedAt}
               />
            );
          }) }
        </main>
      </div>
    </>
  );
}

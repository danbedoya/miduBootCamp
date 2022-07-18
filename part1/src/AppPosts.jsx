import React from "react";
import Post from "./components/Posts";
import { useEffect, useState } from "react";
import { getAllNotes } from "./services/notes/getAllNotes";
import { createNote } from "./services/notes/createNote";
import axios from "axios";

const AppPosts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    //Using fetch method
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });
    console.log("effect");
    const promise = axios.get("http://localhost:3001/notes");
    console.log(promise);
    setLoading(true);
    getAllNotes().then((posts) => {
      console.log("promise fulfilled");
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  console.log("render", posts.length, "notes");

  const handleChange = (event) => {
    setNewPost(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPostToAdd = {
      title: newPost,
      body: newPost,
      userId: 1,
    };

    setError("");
    createNote(newPostToAdd)
      .then((newPost) => {
        setPosts([...posts, newPost]);
      })
      .catch((e) => {
        console.error(e);
        setError("The API didnt give any response");
      });

    // setNotes([...posts, newNoteToAdd]);
    setNewPost("");
  };

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "Cargando..." : ""}
      <ol>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newPost}></input>
        <button>Crear Nota</button>
      </form>
      {error ? error : ""}
    </div>
  );
};

export default AppPosts;

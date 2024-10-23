import { useState, useEffect } from "react";

export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = fetch(url);
    const data = await response.json();
  }
}

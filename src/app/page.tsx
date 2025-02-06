import { SigninForm } from "@/components/forms/signin-form";
import AuthLayout from "./(auth)/layout";

const page = async () => {
  return (
    <div>
      <SigninForm/>
    </div>
  );
};

export default page;

// "use client";

// import { useEffect, useState } from "react";

// export default function MyComponent() {
// const [posts, setPosts] = useState([]);
// useEffect(() => {
// const fetchData = async () => {
// try {
// const data = await fetch("/api/posts");
// const response = await data.json();
// setPosts(response.posts);
// console.log(response);
// } catch (error) {
// console.log(error);
// }
// };
// fetchData();
// }, []);
// return (
// <div>
// tes pasing data
// {/* {posts.map(post => (
// <div>{post.email}</div>
// ))} */}

// {/*
// );
// }

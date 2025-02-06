import React from 'react'
import executeQuery from "../lib/db.js"

const page = async () => {

const result= await executeQuery("select * from users where id = ?", [1]);
return(
<div>
    <h1>Coba Pasing Data</h1>
</div>
);
};


export default page




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

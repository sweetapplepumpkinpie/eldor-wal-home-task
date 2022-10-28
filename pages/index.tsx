import { useEffect, useState } from "react";
import PostFrom from "../components/PostForm";
import NewsletterSignupForm from "../components/NewsletterSignupForm";
import UsersList from "../components/UsersList";

export default function IndexPage({ users }) {
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [showNewsletterWidget, setShowNewsletterWidget] = useState(false)
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNewsletterWidget(() => true)
    }, 10000);

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const getUserPosts = async ({ target: { id } }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    const posts = await res.json()

    setSelectedUserId(() => id)
    setPosts(() => posts)
  }

  return (
    <>
      <UsersList users={users} getUserPosts={getUserPosts} />

      {showNewsletterWidget && (
        <div>
          <h2>Join Our Newletter</h2>
          <NewsletterSignupForm />
        </div>
      )}
      {posts && <>
        {posts.length ? posts.map(post => (
          <div key={post.id}>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
          </div>
        )):
        <div>No posts</div>
        }
        <PostFrom userId={selectedUserId} />
      </>}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  return {
    props: {
      users,
    },
  }
}

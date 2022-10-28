import React, { useCallback, useState } from "react";

import createNewPost from '../utils/createNewPost'

export default function PostFrom({ userId }: {userId : string}) {
  const defaultState = { title: '', body: ''}
  const [state, setState] = useState(defaultState);

  const onChange = useCallback(({ target: { name, value } }) => {
    setState(state => ({ ...state, [name]: value }))
  }, [])
  const handleSubmit = async () => {
    setState(defaultState)
    const postId = await createNewPost(state.title, state.body,Number(userId))

    console.log(postId)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          onChange={onChange}
          type="text"
          name="title"
          value={state.title}
        />
      </div>
      <div>
        <textarea
          onChange={onChange}
          name="body"
          value={state.body}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

import User from "./User";
import styles from "./UsersList.module.css";

export default function UsersList({ users, getUserPosts }) {
  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      <div>
        {users.map((u) => (
          <User key={u.id} {...u} onClick={getUserPosts} />
        ))}
      </div>
    </div>
  );
}



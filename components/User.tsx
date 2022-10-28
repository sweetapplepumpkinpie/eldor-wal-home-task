import { BaseSyntheticEvent, MouseEventHandler } from "react";
import styles from "./User.module.css";

type Props = {
  id: number;
  name: string;
  username: string;
  email: string;
  onClick: MouseEventHandler
};

export default function User({ name, username, email, id, onClick }: Props) {
  return (
    <div className={styles.User} id={id.toString()} onClick={onClick}>
      {name} - {username} - {email}
    </div>
  );
}

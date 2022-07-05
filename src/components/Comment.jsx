import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Larissa Mendes</strong>
              <time title="01 de Maio as 08:13h" dateTime="2022-05-01">
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar Comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <ThumbsUp />
          Aplaudir
          <span>20</span>
        </footer>
      </div>
    </div>
  );
}

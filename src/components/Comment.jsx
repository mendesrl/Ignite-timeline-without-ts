import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment () {
    return (
        <div className={styles.comment}>
            <Avatar />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header></header>
                    <p>Muito bom , parabéns</p>

                </div>
                <footer>
                    aplaudir
                </footer>

            </div>
        </div>
    )
}
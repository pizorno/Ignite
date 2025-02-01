import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/pizorno.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo Pizorno</strong>
                            <time title='30 de Janeiro às 07:44' datetime="2025-01-30 07:44:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>
                <footer>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </footer>
            </div> 
        </div>
    )
}
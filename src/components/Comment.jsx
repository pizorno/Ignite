import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasborder={false} src="https://github.com/pizorno.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo Pizorno</strong>
                            <time title='30 de Janeiro às 07:44' dateTime="2025-01-30 07:44:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div> 
        </div>
    )
}
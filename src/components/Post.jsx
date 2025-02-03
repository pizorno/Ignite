import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import styles from './Post.module.css'

export function Post({ author, content, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })          
    const publishedAtDistance = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>{publishedAtDistance}</time>
            </header>
            <div className={styles.content}>
                {content.map((item, index) => {
                    if (item.type === 'paragraph') {
                        return <p key={index}>{item.content}</p>
                    }
                    if (item.type === 'link') {
                        return <a key={index} href={item.content} target='_blank' rel='noreferrer'>{item.content}</a>
                    }
                    return null
                }
                )}
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/diego3g.png' />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernander</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='30 de Janeiro às 07:44' datetime="2025-01-30 07:44:00">Publicado há 01h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera </p>
                <p>Acabei de subir mai um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.</p>
                <p><a href="#">pizorno.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
            </div>
        </article>
    )
}
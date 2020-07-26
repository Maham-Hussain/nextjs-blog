import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <p>I’m starting my very first personal blog. I can’t share how happy that makes me feel. It’s almost like an accomplishment in itself. But I won’t take all the credit here.The fact of the matter is, I received a lot of help from my brother in law, Ahmad Awais — who happens to know WordPress and building sites very well.More on this later…</p>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}

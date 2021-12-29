// Next Components
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

// Custom Components
import {
    Container,
    Main,
    BlogTitle,
    List,
    ListItem,
    PostTitle,
    PostBody,
} from '@components/Article';

const title: string = 'My awesome blog!';

export default function Home({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container>
            <Head>
                <title>My awesome blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Main>
                <BlogTitle>{title}</BlogTitle>
                <Link href="/about">About this blog</Link>
                <List>
                    {posts.map((post) => (
                        <Link
                            href="/posts/[id]"
                            as={`/posts/${post.id}`}
                            key={post.id}
                        >
                            <ListItem>
                                <PostTitle>{post.title}</PostTitle>
                                <PostBody>{post.body}</PostBody>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Main>
        </Container>
    );
}

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const posts: Post[] = await res.json();

    return {
        props: {
            posts,
        },
    };
};

// Next Components
import Link from 'next/link';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';

// Styles
import styled from '@emotion/styled';

// Styles with StyledComponents
const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BlogTitle = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
`;

const List = styled.ul`
    list-style-type: none;
`;

const ListItem = styled.li`
    padding: 10px;
    text-transform: capitalize;
    margin: 40px 0;
    cursor : pointer;
    color #252525;
    &:hover{
        background: #f0f0f0
    }
`;

const PostTitle = styled.h2`
    margin: 0;
    font-size: 24px;
`;

const PostBody = styled.p`
    font-size: 16px;
`;

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
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <ListItem key={post.id}>
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

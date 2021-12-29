// Next components
import {
    GetStaticPropsContext,
    InferGetStaticPropsType,
    GetStaticPaths,
} from 'next';

// Custom Components
import { Article, BlogPostImage } from '@components/Article';

// Custom Types
import type { Post } from '../index';

export default function BlogPost({
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Article>
            <h1>{post.title}</h1>
            <BlogPostImage src="/cat.jpeg" alt="My little cat" />
            <p>{post.body}</p>
        </Article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const posts: Post[] = await res.json();

    const paths = posts.map((post) => ({
        params: {
            id: post.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context;
    // Now we can get the posts/1 thanks to the params.id coming from context

    // * The params object can be undefined, so we will take care about this
    const emptyPost: Post = {
        title: 'Post not found',
        body: '',
        id: 0,
        userId: 0,
    };

    if (!params?.id) {
        return {
            props: {
                post: emptyPost,
            },
        };
    }

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    const post: Post = await res.json();

    return {
        props: {
            post,
        },
    };
};

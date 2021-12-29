import styled from '@emotion/styled';

// posts/[id] file
export const Article = styled.article`
    margin: 0 auto;
    max-width: 500px;
`;

export const BlogPostImage = styled.img`
    width: 100%;
    height: auto;
    margin: 20px 0;
`;

// index.tsx file
export const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BlogTitle = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
`;

export const List = styled.ul`
    list-style-type: none;
`;

export const ListItem = styled.li`
    padding: 10px;
    text-transform: capitalize;
    margin: 40px 0;
    cursor : pointer;
    color #252525;
    &:hover{
        background: #f0f0f0
    }
`;

export const PostTitle = styled.h2`
    margin: 0;
    font-size: 24px;
`;

export const PostBody = styled.p`
    font-size: 16px;
`;

import React, {FC} from 'react';
import {PostItem} from "./PostItem";
import {postType} from "./types";

type PostsListPropsType = {
    posts: postType[]
    title: string
}

export const PostsList:FC<PostsListPropsType> = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map(post =>
                <PostItem key={post.id} post={post}/>
            )}
        </div>
    );
};
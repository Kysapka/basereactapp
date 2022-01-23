import React, {FC} from 'react';
import {PostItem} from "./PostItem";
import {postType} from "./types";

type PostsListPropsType = {
    posts: postType[]
    title: string
    remove: (post:postType) => void
}

export const PostsList:FC<PostsListPropsType> = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem key={post.id} number={index + 1} post={post} remove={remove}/>
            )}
        </div>
    );
};
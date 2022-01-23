import React, {FC} from 'react';
import {MyButton} from "./UI/button/MyButton";
import {postType} from "./types";

type PostItemPropsType = {
    number: number
    remove: (post: postType) => void
    post: {
        id: number,
        title: string,
        body: string
    }
}

export const PostItem: FC<PostItemPropsType> = ({post, post: {id, title, body}, number, remove}) => {

    return (
        <div className="post">
            <div className="post_content">
                <strong>{number}. {title}</strong>
                <div>{body}</div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};
import React, {FC} from 'react';

type PostItemPropsType = {
    post: {
        id: number,
        title: string,
        body: string
    }
}

export const PostItem: FC<PostItemPropsType> = ({post: {id, title, body}}) => {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{id}. {title}</strong>
                <div>{body}</div>
            </div>
            <div className="post_btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};
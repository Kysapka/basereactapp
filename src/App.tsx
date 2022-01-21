import React, {SyntheticEvent, useState} from 'react';
import './styles/App.css';
import {PostsList} from "./PostsList";
import {MyButton} from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


export const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNewPost = (e: SyntheticEvent) => {
        e.preventDefault()
        const newPost = {id: +new Date(), title: 'JavaScript 1', body}
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={(e: SyntheticEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={body}
                    onChange={(e: SyntheticEvent<HTMLInputElement>) => setBody(e.currentTarget.value)}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostsList posts={posts} title={'Посты про JS'}/>
        </div>
    );
}

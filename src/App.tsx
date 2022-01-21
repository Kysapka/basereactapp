import React, {useState} from 'react';
import './styles/App.css';
import {PostsList} from "./PostsList";
import {MyButton} from "./UI/button/MyButton";


export const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название поста" />
                <input type="text" placeholder="Описание поста" />
                <MyButton>Создать пост</MyButton>
            </form>
            <PostsList posts={posts} title={'Посты про JS'}/>
        </div>
    );
}

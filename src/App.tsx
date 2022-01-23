import React, {SyntheticEvent, useState} from 'react';
import './components/styles/App.css';
import {PostsList} from "./components/PostsList";
import {MyButton} from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import {postType} from "./components/types";


export const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript 1', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'},
    ])

    const createPost = (newPost: postType) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostsList posts={posts} title={'Посты про JS'}/>
        </div>
    );
}

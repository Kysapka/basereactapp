import React, {useState} from 'react';
import './components/styles/App.css';
import {PostsList} from "./components/PostsList";
import PostForm from "./components/PostForm";
import {postType, SortType} from "./components/types";
import MySelect from "./components/UI/select/MySelect";

export const App = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'ааа', body: 'яяя'},
        {id: 2, title: 'ббб', body: 'ччч'},
        {id: 3, title: 'ввв', body: 'ккк'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost: postType) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post: postType) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPost = (sort: string) => {
        const sortMethod = sort as SortType
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sortMethod].localeCompare(b[sortMethod])
        ))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    options={[
                        {value: 'title', name: 'по названию'},
                        {value: 'body', name: 'по описанию'}
                    ]}
                    defaultValue={"Сортировка"}
                />
            </div>
            {posts.length
                ? <PostsList posts={posts} remove={removePost} title={'Посты про JS'}/>
                : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
            }

        </div>
    );
}

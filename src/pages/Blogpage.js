import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";

const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || ''; //запрос пользователя в форме, отражается в URL после ? (URL.ua/posts?post=abc&data=). Если ничего не находит, то пустая строка ''.
    const latest = searchParams.has('latest'); //получение последних 20 постов

    const startsFrom = latest ? 80 : 1;


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);

    return (
        <div>
            <h1>Our news</h1>

            <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} /> {/*добавление BlogFilter с props*/}

            <Link to="/posts/new" style={{ margin: '1rem 0', display: 'inline-block' }}>Add new post</Link>
            {
                posts.filter( //проверка наличия поискового запроса из формы поиска и проверка checkbox
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export { Blogpage };
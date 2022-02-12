import { useState } from "react"; //создание компонента для удобства, вынесение формы и её метода

const BlogFilter = ({ postQuery, latest, setSearchParams }) => { //получение props от Blogpage
    const [search, setSearch] = useState(postQuery); //управляемость формой, при обновлении данные из формы не исчезают
    const [checked, setChecked] = useState(latest); //управляемость формой, при обновлении данные из формы не исчезают

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target; //получение поисковой формы

        const query = form.search.value; //получение набранного запроса в форме
        const isLatest = form.latest.checked; //checkbox, проверка, что пришло в форму, true || faulse

        const params = {}; //создание пустого объекта для удобства, для последующего сохранения значения в state

        if (query.length) params.post = query; //если поисковое слово есть, то ...
        if (isLatest) params.latest = true; //если checkbox установлен, то ...       http://localhost:3000/posts?post=dolor&latest=true

        setSearchParams(params); //обновление адресной строки
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
            <label style={{ padding: '0 1rem' }}> {/*checkbox*/}
                <input type="checkbox" name="latest" checked={checked} onChange={e => setChecked(e.target.checked)} />New only
            </label>
            <input type="submit" value="Search" />
        </form>
    )
}

export { BlogFilter };
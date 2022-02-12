import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch({
        path: to,
        end: to.length === 1 //полностью включена ссылка либо частично, указан только "/" (главная страница) или нет
    });

    return (
        <Link
            to={to}
            style={{ color: match ? 'var(--color-active)' : 'white', }}
            {...props}
        >
            {children}
        </Link>
    )
}

export { CustomLink };
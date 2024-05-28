import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className="header">
            <h1><Link to="/">Header</Link></h1>
            <div className="menu">
                <a href="/create_word" className="link">Word추가</a>
                <a href="/create_day" className="link">Day추가</a>
            </div>
        </div>
    )
}
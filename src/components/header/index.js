import { h } from 'preact';
import style from './style';

const Header = () => (
	<header class={style.header}>
    <h1>To-Do</h1>
    <nav>
      <a>Notes</a>
      <a>Lists</a>
    </nav>
	</header>
);

export default Header;

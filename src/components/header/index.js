import { h } from 'preact';
import style from './style';

const Header = () => (
	<header class={style.header}>
    <h1>
      <a href="/">To-Do</a>
    </h1>
    <nav>
      <a href="/notes">Notes</a>
    </nav>
	</header>
);

export default Header;

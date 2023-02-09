import {Link} from 'react-router-dom'


export const Header = () => {
    return (
        <nav>
            <Link to="/CountSC">Count SC</Link>
            - -
            <Link to="/Count ">Count</Link>
            - -
            <Link to="/filmes">Filmes</Link>
      </nav>
    )
}
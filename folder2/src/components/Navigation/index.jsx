import { Link } from 'react-router-dom';
import { StyledLink } from './styled';

const Navigation = () => {
  return (
    <>
      <ul>
        <ol>
          <Link to="/">Home</Link>
        </ol>
        <ol>
          <Link to="/dashboard">Dashboard</Link>
        </ol>
        <ol>
          <StyledLink to="/datasets">DataSets</StyledLink>
        </ol>
      </ul>
    </>
  );
};

export default Navigation;

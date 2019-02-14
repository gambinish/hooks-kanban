import styled from 'styled-components';

const NavStyles = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: teal;
  font-family: arial;

li {
  float: left;
  padding-right: 20px;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li button {
  background:none!important;
  border:none; 
  padding:0!important;
  color: white;
  text-align: center;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
`;

export default NavStyles;
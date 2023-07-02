import s from 'styled-components';
import delImg from '../images/delete.png'

export const DelIcon = s.div`
  width: 30px;
  height: 30px;
  background-image: url(${delImg});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #ddd;
  border-radius: 50%;
  transition: 0.4s;

  :hover {
    background-color: rgb(255, 166, 0);
    transform: scale(1.1) rotate(15deg);
  }
`



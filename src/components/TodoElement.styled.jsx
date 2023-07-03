import s from 'styled-components';
import delImg from '../images/delete.png'


export const Container = s.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 30px;
  position: relative;
`

export const TodoText = s.div`
  width: 300px;
  height: 30px;
  margin-left: 20px;
  line-height: 150%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: arial, monospace;
`

export const DelIcon = s.div`
  width: 25px;
  height: 25px;
  background-image: url(${delImg});
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #ddd;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 20px;

  transition: 0.4s;

  :hover {
    background-color: rgb(255, 166, 0);
    transform: scale(1.1) rotate(15deg);
  }
`
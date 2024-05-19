import './css/HomeQuiz/homeQuiz.css'
import { Outlet } from 'react-router-dom';

export default function Quiz() {
  return (
    <main>
      <Outlet/>
    </main>
  );
}

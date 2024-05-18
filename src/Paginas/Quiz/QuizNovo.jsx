import React from 'react';
import QuizApp from './componentesQuiz/QuizApp';
import './css/style.css';

export default function QuizNovo() { 
  
  return (
    <div>
      <QuizApp totalQuestions={5} />
    </div>
  );
}


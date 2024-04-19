import React from 'react';
import './style.css';
import QuizApp from './componentesQuiz/QuizApp';

export default function QuizNovo() { 
  
  return (
    <div>
      <QuizApp totalQuestions={5} />
    </div>
  );
}


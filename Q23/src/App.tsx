import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Di pulau manakah Kabupaten Bogor berada?",
      options: [
        { id: 0, text: "Jawa Timur", isCorrect: false },
        { id: 1, text: "Jawa Barat", isCorrect: true },
        { id: 2, text: "Papua", isCorrect: false },
        { id: 3, text: "Dihatimu", isCorrect: false },
      ],
    },
    {
      text: "Siapakah menantu Rosulullah yang mendapatkan gelar pemilik dua cahaya?",
      options: [
        { id: 0, text: "Bilal Bin Rabah", isCorrect: false },
        { id: 1, text: "Umar bin Khottob", isCorrect: false },
        { id: 2, text: "Usman bin Affan", isCorrect: true },
        { id: 3, text: "Ali bin Abi Tholib", isCorrect: false },
      ],
    },
    {
      text: "Jika x + 1 = 10, maka berapakah nilai x?",
      options: [
        { id: 0, text: "3", isCorrect: false },
        { id: 1, text: "-2", isCorrect: false },
        { id: 2, text: "9", isCorrect: true },
        { id: 3, text: "-9", isCorrect: false },
      ],
    },
    {
      text: "Apa Surat Alquran yang menceritakan wanita menjebak laki-laki sholeha?",
      options: [
        { id: 0, text: "Albaqoroh", isCorrect: false },
        { id: 1, text: "Annisa", isCorrect: false },
        { id: 2, text: "Yusuf", isCorrect: true },
        { id: 3, text: "Alfalak", isCorrect: false },
      ],
    },
    {
      text: " Investasi terbaik selain harta dan keturunan adalah?",
      options: [
        { id: 0, text: "emas", isCorrect: false },
        { id: 1, text: "uang", isCorrect: false },
        { id: 2, text: "anak", isCorrect: false },
        { id: 3, text: "pendidikan", isCorrect: true },
      ],
    },
  ];

  /* Memilih Jawaban*/
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Memulai kembali Question */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Welcome to My Quizz Yo!</h1>

      {showResults ? (
        <div className="final-results">
          <h1>Your Score </h1>
          <h2>......{(score / questions.length) * 100}......</h2>
          <button onClick={() => restartGame()}>Again.. ?</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

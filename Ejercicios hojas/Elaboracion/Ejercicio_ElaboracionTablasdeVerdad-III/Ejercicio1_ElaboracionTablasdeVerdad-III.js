const questions = [
    { id: 1, text: ['[', '(', 'p', '"→"', 'q', ')', '"ꓥ"', 'p', ']', '*→*', 'q'], correct: '→' },
    { id: 2, text: ['[', '(', 'p', '"→"', 'q', ')', '"ꓥ"', '"¬"', 'q', ']', '*→*', '"¬"', 'p'], correct: '→' },
    { id: 3, text: ['(', 'p', '→', 'q', ')', '*ꓥ*', '(', '¬', 'q', '→', '¬', 'p', ')'], correct: 'ꓥ' },
    { id: 4, text: ['[', '(', 'p', '"→"', 'q', ')', '"ꓥ"', '(', 'q', '"→"', 'p', ')', ']', '*↔*', '(', 'p', '"↔"', 'q', ')'], correct: '↔'},
    { id: 5, text: ['"¬"', '(', 'p', '"V"', 'q', ')', '*↔*', '(', '"¬"', 'p', '"ꓥ"', '"¬"', 'q', ')'], correct: '↔'},
    { id: 6, text: ['*¬*', '[', '(', 'p', '"V"', 'q', ')', '"↔"', '(', '"¬"', 'p', '"ꓥ"', '"¬"', 'q', ')', ']'], correct: '¬'},
    { id: 7, text: ['"¬"', '(', 'p', '"ꓥ"', 'q', ')', '*↔*', '(', '"¬"', 'p', '"V"', '"¬"', 'q', ')'], correct: '↔'},
  ];
  
  const container = document.getElementById('questions-container');
  
  questions.forEach(({ id, text, correct }) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
  
    // Detectar la posición correcta (índice) donde aparece el operador con asteriscos
    let correctIndex = -1;
    const cleanText = text.map((token, index) => {
      if (token.includes(`*${correct}*`)) {
        correctIndex = index;
        return token.replace(/\*/g, '');
      }
      return token.replace(/[*"]/g, '');
    });
  
    cleanText.forEach((displayToken, index) => {
      const span = document.createElement('span');
      span.textContent = displayToken;
  
      if (['¬', 'ꓥ', 'V', '→', '↔'].includes(displayToken)) {
        span.classList.add('operator');
        span.addEventListener('click', () => {
          if (index === correctIndex) {
            span.classList.add('correct');
          } else {
            span.classList.add('incorrect');
          }
        });
      }
  
      questionDiv.appendChild(span);
    });
  
    container.appendChild(questionDiv);
  });
  
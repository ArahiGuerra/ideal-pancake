const questions = [
    { id: 1, text: ['*¬*', 'p'], correct: '¬' },
    { id: 2, text: ['"¬"', 'p', '*ꓥ*', 'q'], correct: 'ꓥ' },
    { id: 3, text: ['*¬*', '(', 'p', '"ꓥ"', 'q', ')'], correct: '¬' },
    { id: 4, text: ['(', 'p', '"ꓥ"', 'q', ')', '*→*', 'p'], correct: '→' },
    { id: 5, text: ['p', '*→*', '(', 'p', '"V"', 'q', ')'], correct: '→' },
    { id: 6, text: ['(', 'p', '"ꓥ"', 'q', ')', '*V*', '(', 'r', '"ꓥ"', 's', ')'], correct: 'V' },
  ];
  
  const container = document.getElementById('questions-container');
  
  questions.forEach(({ id, text, correct }) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.dataset.correct = correct;
  
    text.forEach(token => {
      const displayToken = token.replace(/[*"]/g, '');
      const span = document.createElement('span');
      span.textContent = displayToken;
  
      if (['¬', 'ꓥ', 'V', '→'].includes(displayToken)) {
        span.classList.add('operator');
        span.addEventListener('click', () => handleClick(span, correct));
      }
  
      questionDiv.appendChild(span);
    });
  
    container.appendChild(questionDiv);
  });
  
  function handleClick(span, correct) {
    span.classList.remove('correct', 'incorrect');
  
    if (span.textContent === correct) {
      span.classList.add('correct');
    } else {
      span.classList.add('incorrect');
    }
  }
  
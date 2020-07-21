export const filterQuestions = (state, id) => {
  const allFaq = state.theme.faq;

  const data = []

  allFaq.forEach(item => {
    item.questions.forEach(question => {
      if(Array.isArray(question.pages)) {
        question.pages.forEach(page => {
          if(page.ID === id) {
            data.push(question);
          }
        })
      } 
    });
  });

  return data;
}
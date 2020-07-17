export const filterQuestions = (state, id) => {
  const dataFaq = state.source.get('/about/faq');
  const postFaq = state.source[dataFaq.type][dataFaq.id];
  const allFaq = postFaq.acf.categories;

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
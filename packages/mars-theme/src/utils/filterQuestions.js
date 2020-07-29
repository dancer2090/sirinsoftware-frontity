export const filterQuestions = (faq = [], id) => {
  const data = [];
  if(faq && faq.length>0){
    faq.forEach((item) => {
      item.questions.forEach((question) => {
        if (Array.isArray(question.pages)) {
          question.pages.forEach((page) => {
            if (page.ID === id) {
              data.push(question);
            }
          });
        }
      });
    });
  }

  return data;
};

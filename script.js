const headings = document.querySelectorAll('.heading');

headings.forEach(heading => {
  heading.addEventListener('click', () => {
    const currentDesc = heading.parentNode.querySelector('.desc');
    const allDescs = document.querySelectorAll('.desc');

    allDescs.forEach(desc => {
      if (desc === currentDesc) {
        desc.classList.toggle('fulldesc');
      } else {
        desc.classList.remove('fulldesc');
      }
    });
  });
});

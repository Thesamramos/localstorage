const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');

const commentSection = document.querySelector('#comment-section');

let comments = JSON.parse(localStorage.getItem('comments')) || [];

if (comments.length > 0) {
  comments.forEach(comment => {
    const p = document.createElement('p');
    p.textContent = comment;
    commentSection.appendChild(p);
  });
}

submitBtn.addEventListener('click', () => {

  const commentInput = document.querySelector('#comment');
  const comment = commentInput.value;

  comments.push(comment);

  localStorage.setItem('comments', JSON.stringify(comments));

  const p = document.createElement('p');
  p.textContent = comment;
  commentSection.appendChild(p);

  commentInput.value = '';
});
const comment = document.querySelector('.section-comments');
const close = document.querySelector('.close');
const butComment = document.querySelector('.commentsBtn');

butComment.addEventListener('click', () => {
    comment.style.display = 'flex';
    comment.innerHTML = `<div class="general__container">
<button class="close">X</button>
<div>
  <img class="photo__breaking" src="./img/Breaking-Bad-Logo.jpg" alt="">
</div>
<h3 class="name__space">Space 3</h3>
<div class="main__content">
<div class="content__1">
  <p>jkjwdkwdjw</p>
  <p>jhwjhdjwhd</p>
</div>
<div class="content__2">
  <p>ajaajajjaja</p>
  <p>jrjrjrjrjrr</p>
</div>
</div>
<h4 class="name__comment">Comments(2)</h4>
<div class="content__3">
  <p class="five">kjkdekjkej</p>
  <p class="six">ksjkjkajksjk</p>
</div>
<h5 class="name__add">Add a Comments</h5>
<div class="input__main">
  <input class="input__text" type="text" placeholder="your name" required>
  <input class="input__mail" type="email" name="" id="" placeholder="massage">
  <button class="button__comment">Comment</button>
</div>
</div>`
});




close.addEventListener('click', () => {
    overlay.style.display = 'none';
    comment.remove();
  });
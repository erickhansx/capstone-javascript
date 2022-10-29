import characterCounter from '../components/home/characters-counts.js';
import commentsCounter from '../components/home/commentsCounter.js';

describe('Testing', () => {
  test('Total number of characters', () => {
    document.body.innerHTML = `<nav class="mobile">
    <div class="logo-div"><img src="http://localhost:8080/57a1848e29052255134f.png" alt="Movie Logo" class="Logo"></div>
    <div class="ul-div">
      <ul class="links">
        <li>
          <a id='numberShow' class="links-li font" href="#body">
           


          </a>
        </li>
        <li><a class="links-li font" href="#">Top Rated</a></li>
      </ul>
    </div>
    </nav>`;
    const numberShow = document.querySelector('#numberShow');
    characterCounter(numberShow, 40);
    expect(numberShow.innerHTML).toEqual('Characters (40)');
  });
  test('Total number of comments', () => {
    document.body.innerHTML = `<div id="commentContainer">
                                  <h2 id="commentTitle">Comments (1)</h2>
                                    <div id="comments">

                                    </div>
                                </div>`;
    const numberComments = document.querySelector('#comments');
    commentsCounter(numberComments, 60);
    expect(numberComments.innerHTML).toEqual('Comments (60)');
  });
});

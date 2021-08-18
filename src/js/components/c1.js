import twitterlogo from './../../img/icon-twitter.svg';

function c1() {
  let m = document.createElement('main');
  let p = document.createElement('p');
  let img = document.createElement('img');

  m.append(p);
  p.append(img);
  img.src = twitterlogo;
  img.alt = 'twitter logo';

  return m;
}

export default c1;

import EasingFunctions from './easing-functions';

const smoothScroll = (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    const targetEl = document.getElementById(id)
    if (!targetEl) return;

    const html = document.querySelector('html');
    const body = document.querySelector('body');

    let t = 0;
    const fps = 60,
        finish = targetEl.offsetTop - 52,
        start = html.scrollTop, // pixel
        dir = finish > start ? 1 : -1

    function move() {
        let fraction = EasingFunctions.easeInOutQuint(t);
        t += 1 / fps;
        let position = fraction * (finish - start) + start
        if (position * dir >= finish * dir || t >= 1) {
            clearInterval(handler);
            html.scrollTop = finish;
            body.scrollTop = finish;
            return;
        }
        html.scrollTop = position;
        body.scrollTop = position;
    }

    let handler = setInterval(move, 1000 / fps);
}

export default smoothScroll

export function formatTime(seconds, frameRate) {
    const f = Math.floor((seconds % 1) * (frameRate || 0));
    let s = Math.floor(seconds);
    let m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const wrap = (value) => value < 10 ? `0${value}` : value;
    m = m % 60;
    s = s % 60;
    return `${h > 0 ? `${wrap(h)}:` : ''}${wrap(m)}:${wrap(s)}${(f ? `:${wrap(f)}` : '')}`;
}
export function timeToSeconds(timecode) {
    const time = timecode.replace(/;/g, ':').split(':');
    let seconds = 0;
    if (time.length === 3) {
        seconds += parseFloat(time[0]) * 60 * 60;
        seconds += parseFloat(time[1]) * 60;
        seconds += parseFloat(time[2]);
    }
    else {
        seconds += parseFloat(time[0]) * 60;
        seconds += parseFloat(time[1]);
    }
    return seconds;
}

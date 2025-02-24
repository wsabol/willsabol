import React from 'react';

export default props => {
    const text = props.text ?? 'Loading...'
    const color = props.color ?? 'warning'
    const is_light = props.is_light ?? false;
    const fade_in = props.fade_in ?? false;

    let classes = [
        'notification',
        'is-' + color
    ];

    if (is_light) {
        classes.push('is-light')
    }

    if (fade_in) {
        classes.push('fade-in')
    }

    return <div className={classes.join(' ')}>
        {text}
    </div>
}

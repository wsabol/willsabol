import React from 'react';
import Notification from './notification';
import {DateTime} from 'luxon';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data || [];
    }

    singeExp(exp, is_last) {
        let start = DateTime.fromSQL(exp.start_date);
        let end = DateTime.fromJSDate(new Date());
        if (exp.end_date) {
            end = DateTime.fromSQL(exp.end_date);
        }

        const diff = end.diff(start, ["years", "months"]).toObject();
        console.log(diff)
        const dur = [
            `${diff.years} yrs`,
            `${Math.ceil(diff.months)} mo`
        ].filter(d => !['0', '-'].includes(d[0])).join(' ')
        console.log(dur)

        const dateFormat = d => {
            if (!d) return 'Present'
            return DateTime.fromSQL(d).toFormat("MMM yyyy")
        }

        let subtitles = [];

        if (exp.positions.length === 1) {
            subtitles.push(<div className={'bold-emphasis'}>{exp.positions[0].title}</div>)
            subtitles.push(<div>
                <span className={'slight-emphasis'}>{exp.employer_name}</span>
                {exp.is_part_time ? <span>&nbsp;·&nbsp;Part-time</span> : null}
            </div>)
            exp.positions[0].title = null

            subtitles.push(<div>
                <time dateTime={exp.start_date}>{dateFormat(exp.start_date)}</time>
                &nbsp;-&nbsp;
                <time dateTime={exp.end_date}>{dateFormat(exp.end_date)}</time>
                &nbsp;·&nbsp;
                {dur}
            </div>)

        } else if (exp.positions.length > 1) {
            subtitles.push(<div className={'slight-emphasis'}>{exp.employer_name}</div>)
            subtitles.push(<div>
                {dur}
            </div>)
        }

        if (exp.location) {
            subtitles.push(<div>{exp.location}</div>)
        }

        return <>
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={exp.logo} alt={exp.employer_name} />
                    </figure>
                </div>
                <div
                    className="media-content is-align-items-center">
                    {subtitles.map(s => s)}
                    <div className={`content ${exp.positions.length > 1 ? 'mt-4' : 'mt-1'}`}>
                        {exp.positions.map((pos, j) => <>
                            {pos.title ? <>
                                    <div className={"bold-emphasis"}>{pos.title}</div>
                                    <div>
                                        <time dateTime={pos.start_date}>{dateFormat(pos.start_date)}</time>
                                        &nbsp;-&nbsp;
                                        <time dateTime={pos.end_date}>{dateFormat(pos.end_date)}</time>
                                    </div>
                                </> :
                                null
                            }
                            <ul className={"mt-1"}>
                                {pos.duties.map((duty, k) =>
                                    <li key={k}>{duty}</li>)}
                            </ul>
                        </>)}
                    </div>
                </div>
            </div>
            {is_last ? null : <hr/>}
        </>
    }

    render() {
        const count = this.data.length;

        if (count === 0) {
            return <Notification
                color={'info'}
                text={'No experience'} />
        }

        return <>
            {this.data.map((exp, i) => this.singeExp(exp, i === count - 1))}
        </>
    }
}

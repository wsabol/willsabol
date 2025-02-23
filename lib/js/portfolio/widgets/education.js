import React from 'react';
import Notification from './notification';
import {DateTime} from 'luxon';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data || [];
    }

    singeEdu(school, is_last) {
        let start = DateTime.fromSQL(school.start_date);
        let end = DateTime.fromJSDate(new Date());
        if (school.end_date) {
            end = DateTime.fromSQL(school.end_date);
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
        subtitles.push(<div className={'bold-emphasis'}>{school.name}</div>)
        subtitles.push(<div>{[
            school.degree,
            school.field_of_study
        ].filter(s => !!s).join(', ')}</div>)

        if (school.location) {
            subtitles.push(<div>{school.location}</div>)
        }

        subtitles.push(<div>
            <time dateTime={school.start_date}>{dateFormat(school.start_date)}</time>
            &nbsp;-&nbsp;
            <time dateTime={school.end_date}>{dateFormat(school.end_date)}</time>
            &nbsp;·&nbsp;
            {dur}
        </div>)

        return <>
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={school.logo} alt={school.name} />
                    </figure>
                </div>
                <div className="media-content is-align-items-center">
                    {subtitles.map(s => s)}
                    <div className={'mt-1'}>{ school.description }</div>
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
                text={'No education'} />
        }

        return <>
            {this.data.map((edu, i) => this.singeEdu(edu, i === count - 1))}
        </>
    }
}

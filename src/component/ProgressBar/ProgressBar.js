import './ProgressBar.style.scss';

export class ProgressBar extends React.Component {
    render() {
        const { checkoutStep, progressBarSteps } = this.props;
        progressBarSteps.reverse();
        return (
            <div className='progressbar-wrapper'>
                <ul className="step-list">
                    {progressBarSteps.map((text, i) => {
                        const displayedText = text.split('_')[0].toLocaleLowerCase();
                        return (
                            <li
                                className={`
                                step-item 
                                ${progressBarSteps.indexOf(text) >= progressBarSteps.indexOf(checkoutStep) ? 'current-item' : ''}
                            `}>
                                <span className="progress-count">{progressBarSteps.length - i}</span>
                                <span className="progress-label">{displayedText}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    };
};
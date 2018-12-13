import React from 'react';

class Video extends React.Component {
    render() {
        return (
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/w73QvOPEKm8" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen title="jsx-a11y/iframe-has-title">
            </iframe>
        )
    }
}

export default Video;
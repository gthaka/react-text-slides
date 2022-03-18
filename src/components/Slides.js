import React from 'react';

function Slides({slides}) {

  const [currentSlide,setCurrentSlide] = React.useState(0);
  const {title,text} = slides[currentSlide];

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined"
                onClick={()=>setCurrentSlide(0)} disabled={currentSlide === 0}>Restart</button>
                <button data-testid="button-prev" className="small"
                onClick={()=>setCurrentSlide(currentSlide-1)} disabled={currentSlide === 0}>Prev</button>
                <button data-testid="button-next" className="small"
                onClick={()=>setCurrentSlide(currentSlide+1)} disabled={currentSlide === slides.length - 1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;

import React from 'react'

class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.children);

    return (
      <div className="Slider">
        {/* {images.map((image, i) =>
          <div
            key={ i }
            className="image"
            style={{
              backgroundImage: `url(${ image })`,
              transform: `translateX(${ (index + i) * 100 }vw)`
            }}/>
        )} */}
      </div>
    )
  }
}

export default Slider

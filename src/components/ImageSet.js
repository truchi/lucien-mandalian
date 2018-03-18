import React from 'react'

class ImageSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const index  = this.state.index
    const images = this.props.images
    const circle = this.props.circle

    return (
      <div className="ImageSet" style={{
        clipPath: `circle(${ circle.r }vw at ${ circle.cx }vw ${ circle.cy }vh)`
      }}>
        {images.map((image, i) =>
          <div
            key={ i }
            className="image"
            style={{
              backgroundImage: `url(${ image })`,
              transform: `translateX(${ (index + i) * 100 }vw)`
            }}/>
        )}
      </div>
    )
  }
}

export default ImageSet

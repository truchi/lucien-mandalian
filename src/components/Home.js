import React    from 'react'
import ImageSet from './ImageSet'
import Slider   from './Slider'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0
    }
  }

  render() {
    const slides = this.props.slides

    return (
      <div className="Home">
        <Slider slides={ slides }>
          <div>lala</div>
          <div>lolo</div>
        </Slider>
      </div>
    )

    // return (
    //   <div className="Home">
    //     <ImageSet index={ index } images={ images } circle={{ r: 10, cx: 70, cy: 50 }} />
    //     <ImageSet index={ index } images={ images } circle={{ r:  4, cx: 50, cy: 50 }} />
    //     <ImageSet index={ index } images={ images } circle={{ r:  2, cx: 30, cy: 50 }} />
    //     <TextSlider></TextSlider>
    //   </div>
    // )
  }
}

export default Home

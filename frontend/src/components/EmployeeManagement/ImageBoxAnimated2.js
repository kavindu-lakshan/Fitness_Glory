import React from 'react';
import styled from 'styled-components';
import BlackBoxAnimated from './BlackBoxAnimated';

const ImageBox = styled.div`
  width: 90vw;
  height: 90vh;
  margin-left: -50px;
  background: url("https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?cs=srgb&dl=pexels-william-choquette-1954524.jpg&fm=jpg");
  background-size: cover;
  background-position: center;
`;

class ImageBoxAnimation extends React.Component {
    componentWillMount() {
      this.setState({
        animationNumber: 1
      });
  
      setTimeout(this.startNextAnimation, 500);
      setTimeout(this.startNextAnimation, 1000);
      setTimeout(this.startNextAnimation, 1500);
      setTimeout(this.startNextAnimation, 2000);
      setTimeout(this.startNextAnimation, 2500);
      setTimeout(this.startNextAnimation, 3000);
      setTimeout(this.startNextAnimation, 3500);
      setTimeout(this.startNextAnimation, 4000);
      setTimeout(this.startNextAnimation, 4500);
    }
  
    startNextAnimation = () => {
      this.setState({
        animationNumber: this.state.animationNumber + 1
      });
    };
    render() {
      const { animationNumber } = this.state;
  
      return (
        <ImageBox>
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 1}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 2}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 3}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 4}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 5}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 6}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 7}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 8}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={false}
            startAnimation={animationNumber >= 9}
          />
  
          <BlackBoxAnimated
            heightPercentage={10}
            reverseDirection={true}
            startAnimation={animationNumber >= 10}
          />
        </ImageBox>
      );
    }
  }

  export default ImageBoxAnimation;
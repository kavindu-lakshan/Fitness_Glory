import React, { Component } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";

export default class CleanerRegistrationFormCards extends Component {
  render() {
    var data = [
      {
        url:
          "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102131/Card1_ivi6x3.jpg",
        title: "Dare to be great",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102131/Card1_ivi6x3.jpg"    
      },
      {
        url:
          "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102022/Card2_pyxppf.jpg",
        title: "Everyday is a choice",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102022/Card2_pyxppf.jpg"
      },
      {
        url:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102076/Card3_ykeb0n.jpg",
        title: "Push yourself",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102076/Card3_ykeb0n.jpg"
      },
      {
        url:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102108/Card4_lgftoj.jpg",
        title: "Let's be FunFit",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102108/Card4_lgftoj.jpg"
      },

      {
        url:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102085/Card5_gcapk1.jpg",
        title: "FIt is hit",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102085/Card5_gcapk1.jpg"
      },
      {
        url:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102047/Card6_zcjkrp.jpg",
        title: "Shape it up",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102047/Card6_zcjkrp.jpg"
      },
      {
        url:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102074/Card7_fn2qb9.jpg",
        title: "Results, not promises",
        thumbUrl:
        "https://res.cloudinary.com/djg9iitcl/image/upload/v1631102074/Card7_fn2qb9.jpg"
      }
    ];

    return (
      <div style = {bgStyles}>
        <DztImageGalleryComponent images={data} />
        <br></br>
        <h1 style = {headingStyles}>REGISTER NEW CLEANERS</h1>
      </div>
    );
  }
}

const bgStyles = {
  backgroundColor: 'black',
  width: '1218px',
  height: '700px',
  marginLeft: '70px',
  marginTop: '20px'
}

const headingStyles = {
  marginTop: '-130px',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold'
}
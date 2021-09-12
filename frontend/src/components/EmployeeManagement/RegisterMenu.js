import React, { useState } from 'react'
import { useSpring, useSprings, animated, interpolate } from 'react-spring'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      height: 5,
      width: 1120,
      marginLeft: 115
    }}
  />
);

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center'
  },

  label: {
    textTransform: 'capitalize',
  },
})(Button);

function Stack({ image, background }) {
  const [open, setOpen] = useState(false)
  const { f, r } = useSpring({ f: open ? 0 : 1, r: open ? -3 : 3 })
  const cards = useSprings(5, [0, 1, 2, 3, 4].map(i => ({ opacity: 0.2 + i / 5, z: open ? (i / 5) * 80 : 0 })))
  return (
    <div class="container" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {cards.map(({ z, opacity }, index) => (
        <animated.div
          style={{
            opacity: 0.8,
            background,
            textAlign: 'center',
            transform: interpolate(
              [z, f.interpolate([0, 0.2, 0.6, 1], [0, index, index, 0]), r],
              (z, f, r) => `translate3d(0,0,${z}px) rotateX(${f * r}deg)`
            )
          }}>
          {index === 4 && <animated.img style={{ transform: f.interpolate([0, 1], ['scale(0.7)', 'scale(1)']) }} src={image} />}
        </animated.div>
      ))}
    </div>
  )
}

export default function RegisterMenu() {
  return (
    <div>
      <ColoredLine color="black" style = {lineStyles}/>
      <div style = {cardDesign}>
        <Stack image="https://res.cloudinary.com/djg9iitcl/image/upload/v1631133107/EmployeeMenu1_eprtgo.jpg" background="black" />
        <h1 style = {textDesign}>TRAINER REGISTRATION INTERFACE</h1>
        <StyledButton style = {btnStyles}><a href = "/employee/trainer-register" style = {linkStyles}>REGISTER TRAINER</a></StyledButton>
      </div>
      <ColoredLine color="black" marginLeft ="20px"/>
      <div style = {cardDesign}>
        <Stack image="https://res.cloudinary.com/djg9iitcl/image/upload/v1631133107/EmployeeMenu2_m0srt0.jpg" background="black" />
        <h1 style = {textDesign}>CLEANER REGISTRATION INTERFACE</h1>
        <StyledButton style = {btnStyles}><a href = "/admin/CleanerRegistrationForm" style = {linkStyles}>REGISTER CLEANER</a></StyledButton>
      </div>
      <ColoredLine color="black" style = {lineStyles}/>
    </div>
  )
}

const cardDesign = {
  marginTop: '0px',
  marginLeft: '20px'
}

const lineStyles = {
  marginLeft: '-100px'
}

const textDesign = {
  fontSize: '24px',
  marginTop: '10px',
  textAlign: 'center'
}

const btnStyles = {
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '550px',
  marginTop: '10px',
  textColor: 'white',
  textDecoration: 'none'
}

const a = {
  color: 'white'
}

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold'
}



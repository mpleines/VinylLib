import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import {colors} from '../utils/colors';
import { typeScale } from '../utils/typography';

export const ToastyContainer = ({ props }) => {
  const { text } = props
  const styles = useSpring({
    fontSize: typeScale.paragraph,
    fontWeight: '400',
    opacity: 1,
    from: { opacity: 0 },
    display: 'inline-block',
    minWidth: '300px',
    border: `1px solid ${colors.text.lightgrey}`,
    borderRadius: '7px',
    boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2)',
    background: colors.primary["400"],
    padding: '1em 1.5em',
    margin: '0 auto',
    color: colors.text.inverted,
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    marginBottom: '64px'
  })
  return (
    <animated.div style={styles}>
      <span>{text}</span>
    </animated.div>
  )
}

const createCenterDiv = () => {
  let container = document.createElement('div')
  container.style.display = 'flex'
  container.style.width = '100vw'
  container.style.justifyContent = 'center'
  container.style.alignItems = 'center'
  return container
}

export const toasty = (text, duration) => {
  let container = createCenterDiv()
  document.body.appendChild(container)
  ReactDOM.render(<ToastyContainer props={{ duration, text }} />, container)
  // unmounting the component
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(container)
  }, duration)
}
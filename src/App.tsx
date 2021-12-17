import './style/App.scss'
import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const useInnerHeigh = () => {
  const getInnerHeight = () => {
    return window.innerHeight
  }

  const [innerHeight, setInnerHeight] = useState(getInnerHeight())
  useEffect(() => {
    const onResize = () => {
      setInnerHeight(getInnerHeight())
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return innerHeight
}

const App = () => {
  return (
    <>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap&subset=japanese'
        />
      </head>
      <main style={{ height: useInnerHeigh() }}>
        <h1 className='title'>nacal.io</h1>
        <div className='contents'>
          <div>
            <div className='links'>
              <a href='https://github.com/nacal' className='icon'>
                <FaGithubSquare title='GitHub icon' />
              </a>
              <a href='https://twitter.com/_nacal' className='icon'>
                <FaTwitterSquare title='Twitter icon' />
              </a>
            </div>
            <h2 className='copy'>Under development.</h2>
            <address className='address'>
              <a href='mailto:nacal.dev@gmail.com'>nacal.dev@gmail.com</a>
            </address>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

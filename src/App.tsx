import './App.scss'

import { FaGithubSquare, FaTwitterSquare } from 'react-icons/fa'

const App = () => {
  return (
    <>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap&subset=japanese'
        />
      </head>
      <main>
        <h1 className='title'>nacal.io</h1>
        <div className='contents'>
          <div>
            <div className='links'>
              <a href='https://github.com/nacal' className='icon'>
                <FaGithubSquare />
              </a>
              <a href='https://twitter.com/_nacal' className='icon'>
                <FaTwitterSquare />
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

import React from 'react';
import { useRef } from 'react';
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import mario1 from './assets/mario1.jpg'
import mario2 from './assets/mario2.jpg'
import mario from './assets/mario.gif'

function App() {
  const ref = useRef();
  return (
    
    <div>
      <Parallax  pages={4} ref={ref} >
      <ParallaxLayer
          offset={0}  //positio o page
          speed={.5}  //speed scroll
          factor={4}   //page size
          style={{
            backgroundImage: `url(${mario1})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${mario2})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          style={{ textAlign: 'center' }}
        >
         <img src={mario} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={.6}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div className="content-1">
          <span className='txt-1' >Welcome to mario world</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.5}
          onClick={() => ref.current.scrollTo(0)}
        >
          <div className="content-2">
          <span className='txt' >Hello My Name Is Mario!!!!!</span>
          </div>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;

import React from 'react';
import Featurebox from './Featurebox';
import f1image1 from '../images/1.png';
import f1image2 from '../images/2.png';
import f1image3 from '../images/3.png';
import f1image4 from '../images/4.png';

function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className='a-container'>
        <Featurebox image={f1image1} title="Weight Training" description="Weight training, a cornerstone of gym workouts, focuses on building muscle strength." />
        <Featurebox image={f1image2} title="Muscle Training" description="Muscle training further refines this process by targeting specific muscle groups." />
        <Featurebox image={f1image3} title="Body Posing" description="Body posing, often associated with bodybuilding, emphasizes aesthetic presentation." />
        <Featurebox image={f1image4} title="calisthenics" description="Cardio exercises like running or cycling promote cardiovascular health and calorie burn." />
      </div>
    </div>
  );
}

export default Feature;

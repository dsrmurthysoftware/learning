import React from 'react';
import TrainerList from '../containers/trainer-list';
import TrainerDetails from '../containers/trainer-details'


//HOC - High Order Component
const App = () => (
    <div>       
            <h1>Trainers List- Murthy Infotek</h1>
            <TrainerList/>
            <hr />
            <h2>Trainer Details</h2>
            <TrainerDetails/>
         <h2 className="footer">Copyright Reserved to Murthy</h2>
     </div>
);
export default App;
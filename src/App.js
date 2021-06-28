import './index.css';
// import Header from './components/Header';
// import Clients from './components/Clients'
import Section from './components/Section'
import Services from './components/Services'
import Who from './components/Who';
import CompletedWorkCount from './components/CompletedWorkCount';
import WhatSay from './components/WhatSay';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="rdweb-container">
      {/* <Header /> */}
      <Section />
      {/* <Clients /> */}
      <Services />
      <Who />
      <CompletedWorkCount />
      <WhatSay />
      <BlogList />
    </div>
  );
}

export default App;

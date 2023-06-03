import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reason from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import JoinNow from './components/JoinNow/JoinNow';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
 
          <Hero />
          <Programs />
          <Reason />
          <Plans />
          <Testimonials />
          <JoinNow />
          <Footer />
    </div>
  );
}

export default App;

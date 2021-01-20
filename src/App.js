import './App.css';
import './Header.css';
import './Section2.css';
import './Section3.css';
import './Footer.css';
import Header from './Header';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from './Footer'


const App = () => {
    return(
        <div>
            <Header />
            <Section2 />
            <Section3 />
            <Footer />
        </div>
    )
}


export default App;

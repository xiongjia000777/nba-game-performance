import '../styles/globals.css';
import 'bulma/css/bulma.min.css';
import 'mapbox-gl/dist/mapbox-gl.css'; 

import HomeButton from '../components/HomeButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { NBAStore } from '../lib/utils';

function MyApp({ Component, pageProps }) {
    return (
        <NBAStore>
            <HomeButton />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </NBAStore>
    );
}

export default MyApp

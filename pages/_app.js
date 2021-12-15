import dynamic from 'next/dynamic';
import { Layout } from '../components';
import '../styles/app.scss';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
});

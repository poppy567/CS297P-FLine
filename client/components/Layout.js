import Head from "next/head";
import Nav from './nav'

const Layout = props => {
    return (
        <div className="Layout">
            <Head>
                <title>FLINE</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <div className="Content">{props.children}</div>
        </div>
    )
}

export default Layout;
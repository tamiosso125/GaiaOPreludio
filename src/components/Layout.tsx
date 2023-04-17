import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Main } from './Infos';

// export * from './Footer';
// export * from './Navbar';
// export * from './Main';


export default function Layout({ children }: any) {
  return (
    <>
      <Main />
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}
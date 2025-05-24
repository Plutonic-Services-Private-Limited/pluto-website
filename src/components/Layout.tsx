import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
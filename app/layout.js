import './globals.css';
import Navbar from '@/components/Navbar';


export const metadata = {
  title: 'Lost & Found Log System',
  description: 'Report and track lost & found items easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

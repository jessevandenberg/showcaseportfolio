
import "./globals.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

export const metadata = {
  title: "showcase portfolio Jesse Berg",
  description: "Portfolio van Jesse v/d Berg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <Header />
       
        {children}
      </body>
    </html>
  );
}


import "./globals.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Projects />
        {children}
      </body>
    </html>
  );
}

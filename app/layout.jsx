import '@/styles/globals.css';

export const metadata = {
  title: "Prompt Pedia",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html Lan="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <div className="app">{children}</div>
      </body>
    </html>
  );
};
export default RootLayout;

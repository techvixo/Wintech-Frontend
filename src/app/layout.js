import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import NewFooter from "../components/Shared/Footer/NewFooter";
import ChatBox from "../components/Shared/ChatBox/ChatBox";
import SocialIcons from "../components/Shared/SocialIcons/SocialIcons";
import TestNavbar from "../components/TestNavbar";

export const metadata = {
  title: "Abroad",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={``}>
        <NextIntlClientProvider messages={messages}>
          <Navbar></Navbar>
          <SocialIcons></SocialIcons>
          <ChatBox></ChatBox>
          {/* <TestNavbar></TestNavbar> */}
          {children}
          {/* <Footer></Footer> */}
          <NewFooter></NewFooter>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
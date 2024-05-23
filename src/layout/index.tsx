import React from "react";
import { Footer } from "../components/footer";
import NavHero from "../components/header";
import { Helmet } from 'react-helmet'
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Odonto Clinic - {title}</title>
      </Helmet>
      <NavHero />
      {children}
      <Footer />
    </React.Fragment>
  );
}

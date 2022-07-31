import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useAnimation from '@shared/useAnimation';
import Menu from '../components/menu';
import About from '../components/about';
import Footer from '../components/footer';
import Seo from '../components/seo';

const AboutPage = () => {
  const showAnimation = useAnimation();

  return (
    <main className="flex flex-col min-h-screen">
      <Seo page="/about" title="About Me - Rafal Szczepankiewicz" description="About Rafal Szczepankiewicz education and professional experience" />
      <div className="flex-1 mb-4">
        <Menu />
        <TransitionGroup component={null}>
          {showAnimation && (
            <CSSTransition classNames="fade-up" timeout={0}>
              <div className="px-5 sm:px-10 lg:px-20 pt-32 lg:pt-24" style={{ transitionDelay: `500ms`, transitionDuration: '300ms' }}>
                <About standalone />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;

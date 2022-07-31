import React from 'react';
import useAnimation from '@shared/useAnimation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from '../components/menu';
import Projects from '../components/projects';
import Footer from '../components/footer';
import Seo from '../components/seo';

const ProjectsPage = () => {
  const showAnimation = useAnimation();

  return (
    <main className="flex flex-col min-h-screen">
      <Seo page="/projects" title="Ecommerce Projects - Rafal Szczepankiewicz" description="Big Projects worked by Rafal Szczepankiewicz" />
      <div className="flex-1">
        <Menu />
        <TransitionGroup component={null}>
          {showAnimation && (
            <CSSTransition classNames="fade-up" timeout={0}>
              <div className="px-5 md:px-10 lg:px-20 pt-32 lg:pt-24" style={{ transitionDelay: `500ms`, transitionDuration: '300ms' }}>
                <Projects />
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

export default ProjectsPage;

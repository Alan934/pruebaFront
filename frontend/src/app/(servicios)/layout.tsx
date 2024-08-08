import CarouselOtrosServicios from '@/components/CarouselOtrosServicios/CarouselOtrosServicios';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
        {children}
      
    </>
  );
};

export default Layout;

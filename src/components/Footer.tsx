
import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("pt-8 pb-6 mt-6 border-t border-gray-200", className)}>
    
      <p className="text-center text-xs mt-6 text-gray-500">
        © 2024 Temple Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

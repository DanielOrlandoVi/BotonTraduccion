// layout.tsx
import React from 'react';
import './globals.css'; // Importa los estilos globales
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Backoffice',
  description: 'Homecenter Backoffice',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>; // Renderiza el contenido de las vistas
};

export default RootLayout;

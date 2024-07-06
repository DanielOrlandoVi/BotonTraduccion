// OtrasVistasPage.tsx (nombre sugerido)
import { useRouter } from 'next/router';

const OtrasVistasPage = () => {
  const router = useRouter();

  // Redirige a la página en español
  router.push('/es');

  // No necesitas renderizar nada en esta página
  return null;
};

export default OtrasVistasPage;

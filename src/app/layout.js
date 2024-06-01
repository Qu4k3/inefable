import { Mulish } from "next/font/google";
import { openGraphImage } from './shared-metadata'
import '@/styles/globals.css'

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Inefable Day · Boda de Isa & Paul · 02.11.24",
  description: "¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día.",
  openGraph: {
    ...openGraphImage,
    title: 'Inefable Day · Boda de Isa & Paul · 02.11.24',
    description: "¡Te damos la bienvenida al rincón especial de nuestra boda! Aquí encontrarás información y hermosos recuerdos de nuestro gran día.",
    type: 'website',
    url: 'https://inefable.day',
    image: 'https://inefable.day'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}

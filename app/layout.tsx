import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import {calculateExperience} from "@/utils";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mehran Mahmoudkhani - Software Developer',
  description:
    `Hello! I am Mehran Mahmoudkhani. I am a Software Developer with +${calculateExperience()} years experience.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

import { Space_Mono, Prompt, JetBrains_Mono } from 'next/font/google';

export const spaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700']
});

export const prompt = Prompt({
    subsets: ['latin'],
    weight:['500', '600']
});

export const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin','cyrillic','cyrillic-ext','greek','latin-ext','vietnamese'],
    weight: ['variable']
});
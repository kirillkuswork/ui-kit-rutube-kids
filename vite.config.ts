import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import commonjs from 'vite-plugin-commonjs';
import dts from 'vite-plugin-dts';
import resolve from 'vite-plugin-resolve';
import plugin from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react'
import postcss from 'postcss/lib/postcss';

export const getFiles = (
    entry: string,
    extensions: string[] = [],
    excludeExtensions: string[] = [],
) => {
    let fileNames: string[] = [];
    const dirs = fs.readdirSync(entry);

    dirs.forEach((dir) => {
        const dirPath = `${entry}/${dir}`;

        if (fs.lstatSync(dirPath).isDirectory()) {
            fileNames = [
                ...fileNames,
                ...getFiles(dirPath, extensions, excludeExtensions),
            ];

            return;
        }

        if (!excludeExtensions.some((exclude) => dir.endsWith(exclude))
      && extensions.some((ext) => dir.endsWith(ext))
      && !dirPath.includes('stories')
        ) {
            fileNames.push(dirPath);
        }
    });

    return fileNames;
};

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

const input = [
    './src/index.ts',
    ...getFiles('./src/components', extensions),
    ...getFiles('./src/assets', extensions),
    ...getFiles('./src/utils', extensions),
]

export default defineConfig({
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
        ],
    },
    plugins: [
        postcss(),
        resolve({}),
        commonjs(),
        dts({
            compilerOptions: {
                sourceMap: true,
                declaration: true,
                declarationDir: 'dist',
            },
            include: input,
            outDir: 'dist',
        }),
        react(),
    ],
    build: {
        rollupOptions: {
            preserveEntrySignatures: 'strict',
            external: ['react', 'react-dom'],
        },
        lib: {
            entry: path.resolve(__dirname, input[0]),
            fileName: (ext) => `index.${ext}.js`,
            name: "cyber-ui-kit",
            formats: ['es', 'cjs'],
        },
        target: 'esnext',
        sourcemap: true
    },
});

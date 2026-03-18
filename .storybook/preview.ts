import type { Preview } from "@storybook/react";
import '@/index.css';
import '@/fonts.css';
import {BreakpointDecorator} from "../src/components/BreakpointDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      stylePreview: true,
    },
  },
};

export default preview;
export const decorators = [BreakpointDecorator];

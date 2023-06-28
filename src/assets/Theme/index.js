import '@fontsource/m-plus-rounded-1c/100.css';
import '@fontsource/m-plus-rounded-1c/300.css';
import '@fontsource/m-plus-rounded-1c/400.css';
import '@fontsource/m-plus-rounded-1c/500.css';
import '@fontsource/m-plus-rounded-1c/700.css';
import '@fontsource/m-plus-rounded-1c/800.css';
import '@fontsource/m-plus-rounded-1c/900.css';
import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import { extendTheme } from "@chakra-ui/react";


const Theme = extendTheme({
  fonts: {
    heading: `'M PLUS Rounded 1c', sans-serif;`,
    body: `Lato, sans-serif;`
  }
})

export default Theme

import "../styles/globals.css";

import { MantineProvider, createEmotionCache } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function MyApp({ Component, pageProps }) {
  const myCache = createEmotionCache({
    key: "mantine",
    prepend: false,
  });

  return (
    <MantineProvider
      emotionCache={myCache}
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Prompt",
      }}
    >
      <NotificationsProvider>
        <Component {...pageProps} />
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;

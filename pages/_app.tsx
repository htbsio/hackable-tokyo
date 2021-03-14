import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { appWithTranslation } from "@i18n";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    return (
        <ApolloProvider client={apolloClient}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </ApolloProvider>
    );
}

export default appWithTranslation(MyApp);

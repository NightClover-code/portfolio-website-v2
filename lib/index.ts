import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_URL,
  cache: new InMemoryCache(),
});

export const emailKeys = {
  serviceID: process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
  templateID: process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
  publicID: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID,
};

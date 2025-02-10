import type { UseFetchOptions } from "nuxt/app";
import { useRuntimeConfig } from "#imports";

export async function useApiFetch<T>(
  path: string,
  options: UseFetchOptions<T> = {},
) {
  const runtimeConfig = useRuntimeConfig();

  console.log("runtime", runtimeConfig.public.apiUrl);

  const requestUrl = runtimeConfig.public.apiUrl + path;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': runtimeConfig.public.apiToken,
  };

  const response = await useFetch(requestUrl, {
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });

  return response;
}


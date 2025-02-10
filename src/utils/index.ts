//todo: SOLUCION MOMENTANEA

export function replaceBackendWithLocalhost(url: string) {
  // Check if the URL contains 'backend' and replace it with 'localhost'
  if (url.includes("backend")) {
    return url.replace("backend", "localhost");
  }
  return url;
}

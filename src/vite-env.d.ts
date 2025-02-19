/// <reference types="vite/client" />

interface Window {
  YT: any;
  onYouTubeIframeAPIReady: () => void;
}

declare module '*.png' {
  const value: string;
  export default value;
}
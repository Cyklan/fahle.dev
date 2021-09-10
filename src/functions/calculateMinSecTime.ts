export default function calculateMinSecTime(duration: number) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.round(duration - minutes * 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
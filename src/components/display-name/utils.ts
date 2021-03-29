export const formatTime = (timestamp: Date): string =>
  new Date(timestamp)
    .toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    .toLocaleLowerCase();

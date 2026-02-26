export const formatDate = (dateString: string | number | Date) => {
  return new Date(dateString).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatTime = (timeString: string) => {
  return timeString ? timeString.split(":").slice(0, 2).join(":") : "n/a";
};

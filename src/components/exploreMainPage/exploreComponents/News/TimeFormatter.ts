export const formatTime = (timeString: string): string => {
  console.log(timeString);
  if (!timeString || timeString.length !== 15) {
    return "Invalid time format";
  }

  try {
    // Extrahera datum och tid
    const year = parseInt(timeString.substring(0, 4), 10);
    const month = parseInt(timeString.substring(4, 6), 10) - 1; // Månader är 0-indexerade
    const day = parseInt(timeString.substring(6, 8), 10);
    const hour = parseInt(timeString.substring(9, 11), 10);
    const minute = parseInt(timeString.substring(11, 13), 10);
    const second = parseInt(timeString.substring(13, 15), 10);

    // Skapa ett Date-objekt
    const date = new Date(year, month, day, hour, minute, second);

    // Formatera till ett läsbart format
    return new Intl.DateTimeFormat("sv-SE", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(date);
  } catch (error) {
    console.error("Error formatting time:", error);
    return "Invalid time format";
  }
};

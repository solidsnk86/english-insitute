onmessage = (event) => {
  const data = event.data;

  if (data.init === true) {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const endDate = new Date(data.date || "13 Sep, 2026").getTime();
      const diffDate = endDate - currentDate;

      const day = Math.floor(
        new Date(diffDate).getDate() - ((24 * 60 * 60 * 1000) % 1000),
      );
      const hou = Math.floor(
        new Date(diffDate).getHours() - ((60 * 60 * 1000) % 1000),
      );
      const min = Math.floor(
        new Date(diffDate).getMinutes() - ((60 * 1000) % 1000),
      );
      const sec = Math.floor(new Date(diffDate).getSeconds() - (1000 % 1000));
      postMessage({ day, hou, min, sec });

      if (currentDate >= endDate) {
        clearInterval(interval);
      }
    }, 1000);
  }
};

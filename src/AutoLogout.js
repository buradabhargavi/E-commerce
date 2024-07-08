import React, { useEffect } from "react";

function AutoLogoutHOC() {
  let lastActivityTimestamp = Date.now();

  function logoutUser() {
    window.location.href = "/login";
  }

  function checkUserActivity() {
    let currentTime = Date.now();
    console.log(currentTime);
    let timeDiffInSeconds = (currentTime - lastActivityTimestamp) / 1000;

    if (timeDiffInSeconds > 300) {
      logoutUser();
    }
  }

  function resetActivityTimestamp() {
    lastActivityTimestamp = Date.now();
  }

  useEffect(() => {
    const interval = setInterval(checkUserActivity, 60000);

    document.addEventListener("mousemove", resetActivityTimestamp);
    document.addEventListener("keypress", resetActivityTimestamp);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", resetActivityTimestamp);
      document.removeEventListener("keypress", resetActivityTimestamp);
    };
  }, []);

  return null;
}

export default AutoLogoutHOC;

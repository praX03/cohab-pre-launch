import React, { useEffect } from "react";

function Waitlist(props) {
  const { formUrl, actionText, className } = props;
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.typeform.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openForm = () => {
    window.typeformEmbed.makePopup(formUrl, {
      mode: "popup",
      autoOpen: true,
      hideHeaders: true,
      hideFooters: true,
      onSubmit: function () {
        console.log("Form submitted");
      },
    });
  };

  return (
    <span className={className} onClick={openForm}>
      {actionText}
    </span>
  );
}

export default Waitlist;

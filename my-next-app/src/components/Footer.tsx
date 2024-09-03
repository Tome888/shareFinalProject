// function Footer() {
//   return (
//     <footer>
//       <div className="footerWrapper">
//         <div className="firstWrapperFooter">
//           <div className="logo"></div>
//           <form action="submit">
//             <label>Претплати се на билтен</label>
//             <input type="email" placeholder="Е-маил" />
//           </form>
//         </div>
//         <div className="secondWrapperFooter">
//           <div>
//             <div>
//               <h3>Адреса</h3>
//               <p>Бул. ВМРО бр.7/1-7</p>
//               <p>1000 Скопје, Македонија</p>
//             </div>
//             <div>
//               <h3>Емаил</h3>
//               <p>contact@mhra.mk</p>
//             </div>
//           </div>
//           <div>
//             <i className="fa-brands fa-linkedin"></i>
//             <i className="fa-brands fa-instagram"></i>
//             <i className="fa-brands fa-square-facebook"></i>
//             <i className="fa-brands fa-square-youtube"></i>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent the default form submission

    // Make sure email is not empty
    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Handle successful submission
        setPopup(true);
        setEmail(""); // Clear the input field
      } else {
        // Handle errors
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <footer>
      <div className="footerWrapper">
        <div
          className={popup ? "subPopupContainer" : "subPopupContainer dNone"}
        >
          <h3>Subscription successful!</h3>
          <button onClick={() => setPopup(false)}>OK!</button>
        </div>
        <div className="firstWrapperFooter">
          <div className="logo"></div>
          <form onSubmit={handleSubmit}>
            <label>Претплати се на билтен</label>
            <input
              type="email"
              placeholder="Е-маил"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footerInpSub"
            />
            <button className="buttonAni" type="submit">
              Претплати се!
            </button>
          </form>
        </div>
        <div className="secondWrapperFooter">
          <div>
            <div>
              <h3>Адреса</h3>
              <p>Бул. ВМРО бр.7/1-7</p>
              <p>1000 Скопје, Македонија</p>
            </div>
            <div>
              <h3>Емаил</h3>
              <p>contact@mhra.mk</p>
            </div>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

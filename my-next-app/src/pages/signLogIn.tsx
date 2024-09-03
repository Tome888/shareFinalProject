import HeroSectionTwo from "@/components/HeroSectionTwo";
import WhiteContainerText from "@/microComponents/WhiteContainerText";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

interface UserProps {
  firstName: string;
  lastName: string;
  profession: string;
  getNotyOn: string;
  getNotyFor: string;
  email: string;
  pass: string;
  id: string;
}

function signLogIn() {
  const router = useRouter();
  // const [userData, setUserData] = useState<UserProps | null>(null);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [popup, setPopup] = useState(false);

  // ======Example dont uncomm=========
  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault(); // Prevent the default form submission

  //     // Make sure email and password are not empty
  //     if (!email || !password) {
  //       alert("Please enter both email and password.");
  //       return;
  //     }

  //     try {
  //       const response = await fetch("http://localhost:5000/regUsers", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, pass: password }),
  //       });

  //       if (response.ok) {
  //         // Handle successful submission
  //         setPopup(true);
  //         setEmail(""); // Clear the input field
  //         setPassword(""); // Clear the password field
  //       } else {
  //         // Handle errors
  //         alert("Subscription failed. Please try again.");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("An error occurred. Please try again.");
  //     }
  //   };
  // ======Example dont uncomm=========

  // const validateUser = (theData: UserProps) => {
  //   if (theData.pass === password) {
  //     console.log("SUCC logg in");
  //     localStorage.setItem("userData", JSON.stringify(theData));
  //   } else {
  //     console.log("NOT logged in");
  //     localStorage.removeItem("userData");
  //   }
  // };

  // const handleLogin = (event: any) => {
  //   event.preventDefault();
  //   fetch(`http://localhost:5000/regUsers?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("user found", data[0]);
  //       setUserData(data[0]);
  //       validateUser(data[0]);
  //     })
  //     .catch((err) => {
  //       console.error("user not found", err);
  //       setUserData(null);
  //     });
  // };

  const toUserDashBoard = (e: any) => {
    e.preventDefault();

    router.push("/userDashboard");
  };
  return (
    <>
      <Head>
        <title>MHRA</title>
        <meta name="description" content="Sign In MHRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSectionTwo
        img1={"/genericPhotos/generic2.jpg"}
        img2={"/genericPhotos/generic2.jpg"}
      >
        <>
          <WhiteContainerText title={"Придружи ни се!"} />
          <button className="buttonAni">Прочитај повеќе</button>
        </>
      </HeroSectionTwo>
      {/* <section>
        <p>
          <b>Најави се</b> или <b>Регистрирај се</b>
        </p>
      </section>
      <div>Продолжи со Google</div>
      <p>или</p>
      <div>
        {popup && <div className="popup">Thank you for subscribing!</div>}
        <form onSubmit={handleLogin}>
          <label>
            e-mail
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="mhra@primer.com"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Your password"
            />
          </label>
          <button type="submit">Продолжи со овој email</button>
        </form>
      </div> */}

      <section className="loginSection">
        <p className="logintextFirst">
          <b>Најави се</b> или <b>Регистрирај се</b>
        </p>
        <div className="loginWithGoogle">Продолжи со Google</div>
        <div className="orlogin">
          <hr />
          <p>или</p>
          <hr />
        </div>
        <div>
          <form className="formOne" onSubmit={(e) => toUserDashBoard(e)}>
            <label>e-mail</label>
            <input type="email" placeholder="mhra@primer.com" />

            <button className="buttonNoAni" type="submit">
              Продолжи со овој email
            </button>
          </form>
        </div>
        <div className="termsDiv">
          <p>
            Со кликнување на 'Продолжи со Google/Email', се согласувате со
            нашите Услови на користење и Политика за приватност
          </p>

          <div>
            <input type="checkbox" />
            <label>Сакам да станам член на МАЧР</label>
          </div>

          <div>
            <input type="checkbox" />
            <label>Сакам редовно да добивам информации на е-маил</label>
          </div>
        </div>
      </section>

      <section className="lastSecLogin">
        <div className="leftWrapperLogin">
          <div>
            <img
              className="leftImgLogin"
              src="/genericPhotos/generic6.jpg"
              alt=""
            />
          </div>
          <div className="lastTextDiv">
            <h2>Бенефити од корпоративно зачленување</h2>
            <ul>
              <li>Претставник во корпоративниот одбор на МАЧР</li>
              <li>Можности за промоција на вашата компанија</li>
              <li>Ширење на мрежата регионално и интернационално</li>
              <li>Попусти на HR настани, обуки, конференции и сл.</li>
              <li>HR огласи за работа</li>
            </ul>
          </div>
        </div>
        <div className="rightWrapperLogin">
          <div className="lastTextDiv">
            <h2>Бенефити од индивидуално зачленување</h2>
            <ul>
              <li>Едукативни настани</li>
              <li>Најнови информации и случувања</li>
              <li>Ширење на мрежата на контакти</li>
              <li>Вклучување во работењето на МАЧР</li>
              <li>HR огласи за работа</li>
            </ul>
          </div>

          <div>
            <img
              className="rightImgLogin"
              src="/genericPhotos/generic7.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default signLogIn;

// import { useAuth } from "../context/AuthContext"; // Adjust the path as needed

// const MyComponent = () => {
//   const { isAuthenticated, setAuthenticated } = useAuth();

//   return (
//     <div>
//       {isAuthenticated ? (
//         <p>User is authenticated</p>
//       ) : (
//         <p>User is not authenticated</p>
//       )}
//       <button onClick={() => setAuthenticated(!isAuthenticated)}>
//         Toggle Authenticated
//       </button>
//     </div>
//   );
// };

// export default MyComponent;

"use client";
import { useState } from "react";
import Image from "next/image";

export default function happyTime() {
  const [bobs, setBobs] = useState(0); /* this makes a function, setBobs, that 
  sets the value of the variable bobs */
  const [bobsIncrement, setBobsIncrement] =
    useState(1); /* this makes a function, setBobsIncrement, that 
  sets the value of the variable bobsIncrement */
  const [passportType, setPassportType] = useState(
    "/thailandPassport.jpg"
  ); /* this makes a function, setPassportType, that 
  sets the value of the variable passportType*/

  const [passportName, setPassportName] =
    useState("Red Thai"); /* this makes a function, setPassportType, that 
  sets the value of the variable passportType*/

  const bobClick = () => {
    const theNextValue = bobs + bobsIncrement;
    // Predict the next value when we increment "bobs" by 1
    // This value is called "theNextValue"
    setBobs(theNextValue);

    // sets bobs to the next value

    if (theNextValue < 10) {
      let help = "/thailandPassport.jpg";
      setPassportName("Red Thai");
      setPassportType(help);
      setBobsIncrement(1);
    } else if (theNextValue < 100) {
      let help = "/AwesomeThailandPassport.jpg";
      setPassportName("Blue Thai");
      setPassportType(help);
      setBobsIncrement(3);
    } else {
      let help = "/awesomeBoblandiaPassport.png";
      setPassportName("Boblandian");
      setPassportType(help);
      setBobsIncrement(10000000000);
    }
  };

  return (
    <div>
      <h1>Bob's Thai/Boblandian customs.</h1>
      <p>Hello. You have the {passportName} Passport.</p>
      {/* please excuse all the br tags I will learn margins or whatever later */}
      <br></br>
      <button onClick={bobClick}>Click ME For +{bobsIncrement} Bobs</button>
      <br></br>
      <br></br>
      <p>You Have {bobs} Bobs, Bro.</p>
      <br></br>
      <Image src={passportType} width={100} height={100} alt="{passportType}" />
      <br></br>
      <br></br>
      <p>With 10 Bobs, you have the cool Blue Thailand passport.</p>
      <p>
        With 100 Bobs, you have the Boblandian passport (very powerful you can
        travel anywhere)
      </p>
      <br></br>
      <p>
        Bob Sez: When you have the Blue Thailand passport, you get 3 bobs per
        press instead.
      </p>
      <p>
        Additionally, Bob Sez: When you have the Boblandian passport, you get 1e
        <sup>10</sup> bobs per press instead.
      </p>
    </div>
  );
}

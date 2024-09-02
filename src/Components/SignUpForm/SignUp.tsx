import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function SignUp() {
  const [step, setStep] = useState<number>(1);

  let navigate = useNavigate();

  const handleForward = () => {
    setStep((prev) => prev + 1);
  };

  const handleBackward = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    navigate(`step-${step}`);
  }, [step]);

  return (
    <>
      <h1>Sign Up</h1>
      <nav>
        <NavLink to="step-1">Step 1</NavLink>
        <NavLink to="step-2">Step 2</NavLink>
        <NavLink to="step-3">Step 3</NavLink>
      </nav>
      <form>
        <Outlet />
      </form>

      <nav>
        {step === 1 ? null : <button onClick={handleBackward}>Back</button>}
        {step === 3 ? null : <button onClick={handleForward}>Next</button>}
      </nav>
    </>
  );
}

export default SignUp;

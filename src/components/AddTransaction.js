import React, { useEffect, useState } from "react";
import Button from "./designSystem/Button";
import ButtonSecondary from "./designSystem/ButtonSecondary";
import Chip from "./designSystem/Chip";
import H1 from "./designSystem/H1";
import Input from "./designSystem/Input";
import InputNumber from "./designSystem/InputNumber";
import HelperText from "./designSystem/HelperText";

export default function AddTransaction(props) {
  const [nextStep, setNextStep] = useState(1);
  const [buttonTitle, setButtonTitle] = useState("Continue")
  const [what, setWhat] = useState("");
  const [howMuch, setHowMuch] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    what !== "" ? setIsVisible(true) : setIsVisible(false);
  }, [what])

  useEffect(() => {
    howMuch !== "" ? setIsVisible(true) : setIsVisible(false);
  }, [howMuch])


  function next() {
    if(nextStep === 1) {
      setNextStep(2);
      setIsVisible(false);
    }
    if(nextStep === 2) {
      setNextStep(3);
    }
  }

  function previous() {
    setNextStep(nextStep - 1);
  }
  return (
    <div className="h-full w-full flex flex-col bg-slate-50 items-center animate__animated animate__fadeIn">
      <div className={`${nextStep === 1 && "flex-row-reverse"} flex items-center py-4 w-full justify-between w-[680px]`}>
      
      {nextStep !== 1 && (
 <div>
 <ButtonSecondary onClick={previous}>Back</ButtonSecondary>
</div>
      )}

<div>
      <ButtonSecondary onClick={props.onClick}>Cancel</ButtonSecondary>
      </div>
     
      </div>
      <div className="w-full h-full flex justify-center items-center">
      <div className="w-[400px] flex flex-col animate__animated animate__fadeIn">
        {nextStep === 1 && (
          <div className="animate__animated animate__fadeIn">
            <div className="py-2">
              <H1>
                What did you buy?
              </H1>
            </div>
            <div className="py-2">
              <Input placeholder="Coffee, Food, Gas, Shopping" type="text" value={what} onChange={(event) => setWhat(event.target.value)}></Input>
            <div className="pt-1"> 
              <HelperText text="💡 It is good idea to write just one word." isVisible={what !== "" ? true : false}></HelperText>
            </div>
          
            </div>
          </div>
        )}
        {nextStep === 2 && (
          <div className="animate__animated animate__fadeIn">
            <div className="py-2">
              <H1>
                How much did you spend?
              </H1>
            </div>
            <div className="py-2">
              <InputNumber placeholder="$" value={howMuch} onChange={(event) => setHowMuch(event.target.value)} />
            </div>
          </div>
        )}

        {nextStep === 3 && (
          <div className="animate__animated animate__fadeIn">
            <div className="py-2">
              <H1>
                Where did you spend?
              </H1>
            </div>
            <div className="py-2">
              <Input placeholder="Place"></Input>
              <div className="pt-1"> 
              <HelperText text="💡 If you want, You can skip it." isVisible={true}></HelperText>
            </div>
            </div>
          </div>
        )}

        <div className="pt-2">
          <div className="py-2 h-12">
            {isVisible && <Button onClick={next}>{nextStep === 3 ? "Save - That's it" : "Continue"}</Button>}
          </div>

        </div>
      </div>
      </div>
     
    </div>
  );
}

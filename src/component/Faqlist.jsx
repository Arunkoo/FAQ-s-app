import { useState } from "react";
import { FaqData } from "../data";
import Faq from "./Faq";
const Faqlist = () => {
  // STATE ...
  const [curopen, setcuropen] = useState(null);
  return (
    <div className="flex flex-col gap-y-8">
      {FaqData.map((list) => (
        <Faq
          question={list.question}
          id={list.id}
          key={list.id}
          curopen={curopen}
          onopen={setcuropen}
        >
          {list.answer}
        </Faq>
      ))}
    </div>
  );
};

export default Faqlist;

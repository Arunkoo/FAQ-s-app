/* eslint-disable react/prop-types */
const Faq = ({ children, question, id, curopen, onopen }) => {
  // state management..
  const isopen = id === curopen;
  const handleClick = () => {
    onopen(isopen ? null : id);
  };

  return (
    <div
      onClick={handleClick}
      className={` ${
        isopen ? " border-4" : ""
      } flex px-5 relative justify-between w-[60vh] flex-wrap shadow-xl rounded-xl  cursor-pointer`}
    >
      <h2 className=" text-xl font-poppins font-medium">{question}</h2>
      <p className="text-2xl font-poppins  hover:text-slate-500">
        {isopen ? "-" : "+"}
      </p>
      {isopen && (
        <div className=" font-poppins text-base leading-5 mb-3 mt-0 border-2 ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Faq;

import { useEffect } from "react";

const Scroller = () => {
  function handleScroll() {
    console.log(window.scrollX, window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // must be clear the eventListener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <p style={{ fontSize: "100px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
        laborum qui eos dolore? Quae id impedit maiores voluptatibus laborum
        laudantium!
      </p>
    </div>
  );
};

export default Scroller;

"use client";

export default function Login() {
  // function for login,
  // tell the next page if the user is Girl or boy
  // + redirect to matching page.
  const goToMatchingPage = () => {
    window.location.href = "/matching";
  };

  return (
    <div className="p-8 flex flex-col justify-center items-center h-screen w-screen">
      <h2 className="text-4xl font-bold">Who are you?</h2>
      <div className="flex gap-2 mt-5 md:flex-col">
        <button
          className=" bg-sky-500 p-4 font-semibold px-8 md:w-52 hover:scale-[1.02] duration-150 rounded-lg shadown-lg shadow-white"
          onClick={goToMatchingPage}
        >
          Boy
        </button>
        <button
          className=" bg-pink-500 p-4 font-semibold px-8 md:w-52 hover:scale-[1.02] duration-150 rounded-lg shadown-lg shadow-white"
          onClick={goToMatchingPage}
        >
          Girl
        </button>
      </div>
    </div>
  );
}

"use client";

export default function Home() {
  function goToLoginPage() {
    window.location.href = "/login";
  }
  return (
    <div>
      <h1>MOVIE MATCHER</h1>
      <button onClick={goToLoginPage} className=" p-4 bg-white text-black">
        Click to start
      </button>
    </div>
  );
}

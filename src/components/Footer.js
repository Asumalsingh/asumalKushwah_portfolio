import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <section
      name="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-screen-xl text-gray-300 px-5 md:px-10 py-20 flex justify-center mx-auto">
        <div>
          <div>
            <p className="font-bold text-5xl font-signature text-white">
              Asumal Kushwah
            </p>
          </div>
          <div className="my-5">
            <Social />
          </div>
          <div>
            <p>No © copyright issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

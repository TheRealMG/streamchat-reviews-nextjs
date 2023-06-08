import React, { Children } from "react";

import Link from "next/link";

const Form = ({ type, submitting, handleSubmit, children }) => {
  return (
    <section className="w-full max-w-3xl flex-center flex-col glassmorphism">
      <h1 className="head_text text-left">
        <span className="purple_gradient">{type} Review</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        
        {children}

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-300 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : "Publish"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

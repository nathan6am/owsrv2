"use client";

import { testCreate } from "./actions";

export default function SubmitButton() {
  return (
    <button
      onClick={async () => {
        const event = await testCreate();
        console.log(event);
      }}
    >
      Submit
    </button>
  );
}

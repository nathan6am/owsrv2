import Image from "next/image";
import Input from "@/components/base/Input";
import CTA from "@/components/base/CTA";
import Button from "@/components/base/Button";
import React, { Suspense, useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Image
        src="/images/atf1.jpg"
        alt="atf1"
        layout="responsive"
        width={100}
        height={100}
      />
      <div className="z-10 max-w-6xl w-full items-center justify-between grid grid-cols-2 ">
        <div className="flex flex-col items-center p-8 m-4 rounded-md bg-elevation-3">
          <h1 className="text-primary-400">Header One</h1>
          <h2 className="font-light text-light-200 text-2xl">Header Two</h2>
          <Input label="Input" />
          <Input label="Disabled Input" disabled />
          <Input label="Optional Input" optional />
          <Input label="Error Input" errorText="Input error message" />
          <Input label="Async Input" inProgress />
          <Input label="Success Input" status="success" />
          <Input label="Password Input" type="password" />
        </div>

        <div className="flex flex-col items-center p-8 m-4 rounded-md bg-elevation-3">
          <CTA>START RACING</CTA>
          <Button variant="primary">Primary Button</Button>
          <Button variant="primary" outline>
            Primary Button
          </Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="secondary" outline>
            Secondary Button
          </Button>
          <Button variant="neutral">Neutral Button</Button>
          <Button variant="neutral" outline>
            Neutral Button
          </Button>
          <Button variant="success">Success Button</Button>
          <Button variant="success" outline>
            Success Button
          </Button>

          <Button variant="neutral" size="sm">
            Small Button
          </Button>
          <Button variant="neutral" size="md">
            Regular Button
          </Button>
          <Button variant="neutral" size="lg">
            Large Button
          </Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>
    </>
  );
}

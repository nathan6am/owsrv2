"use client";
import Image from "next/image";
import Input from "@/components/UIKit/Input";
import CTA from "@/components/UIKit/CTA";
import Button from "@/components/UIKit/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-between grid grid-cols-2 bg-elevation-2">
        <div className="flex flex-col items-center p-8 m-4 rounded-md bg-elevation-3">
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
    </main>
  );
}

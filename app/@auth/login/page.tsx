"use client";
import Modal from "@/components/Modal";
import Input from "@/components/UIKit/Input";
import { useRouter } from "next/navigation";
export default function LoginModal() {
  const router = useRouter();
  return (
    <Modal
      isOpen={true}
      title="Login"
      dismissOnOverlayClick={true}
      size="sm"
      onClose={() => {
        router.back();
      }}
    >
      <Input placeholder="Username" />
      <Input placeholder="Password" type="password" />
    </Modal>
  );
}

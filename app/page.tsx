import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 container mx-auto p-4">
      <Link href="/onboarding-setup" className="text-blue-500">Onboarding Setup</Link>
      <Link href="/onboarding-setup-v2" className="text-blue-500">Onboarding Setup V2</Link>
      <Link href="/onboarding-setup-v3" className="text-blue-500">Onboarding Setup V3</Link>
      <Link href="/features" className="text-blue-500">Features</Link>
    </div>
  );
}

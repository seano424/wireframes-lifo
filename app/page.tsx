import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid md:grid-cols-2 divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-50">
      <div className="flex flex-col gap-2 py-4 md:py-0">
        <h2 className="font-black">Onboarding Setup</h2>
        <div className="flex flex-col gap-2 ml-2">
          <Link href="/onboarding-setup" className="text-blue-500">Onboarding Setup</Link>
          <Link href="/onboarding-setup-v2" className="text-blue-500">Onboarding Setup V2</Link>
          <Link href="/onboarding-setup-v3" className="text-blue-500">Onboarding Setup V3</Link>
          <Link href="/onboarding-setup-v4" className="text-blue-500">Onboarding Setup V4</Link>
          <Link href="/onboarding-setup-v5" className="text-blue-500">Onboarding Setup V5</Link>
          <Link href="/onboarding-setup-v6" className="text-blue-500">Onboarding Setup V6</Link>
          <Link href="/onboarding-setup-v7" className="text-blue-500">Onboarding Setup V7</Link>
          <Link href="/onboarding-setup-v8" className="text-blue-500">Onboarding Setup V8</Link>
          <Link href="/onboarding-setup-v9" className="text-blue-500">Onboarding Setup V9</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-4 md:py-0 md:pl-8">
        <h2 className="font-black">Marketing Pages</h2>
        <div className="flex flex-col gap-2 ml-2">
          <Link href="/features" className="text-blue-500">Features</Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const sections = [
  {
    title: "Onboarding Setup",
    items: [
      { href: "/onboarding-setup", label: "Onboarding Setup" },
      { href: "/onboarding-setup-v2", label: "Onboarding Setup V2" },
      { href: "/onboarding-setup-v3", label: "Onboarding Setup V3" },
      { href: "/onboarding-setup-v4", label: "Onboarding Setup V4" },
      { href: "/onboarding-setup-v5", label: "Onboarding Setup V5" },
      { href: "/onboarding-setup-v6", label: "Onboarding Setup V6" },
      { href: "/onboarding-setup-v7", label: "Onboarding Setup V7" },
      { href: "/onboarding-setup-v8", label: "Onboarding Setup V8" },
      { href: "/onboarding-setup-v9", label: "Onboarding Setup V9" },
      { href: "/onboarding-setup-v10", label: "Onboarding Setup V10" },
    ],
  },
  {
    title: "Marketing Pages",
    items: [
      { href: "/features", label: "Features" },
    ],
  },
  {
    title: "Square Integration",
    items: [
      { href: "/square-integration-v1", label: "Square Integration V1" },
    ],
  },
  {
    title: "Modals",
    items: [
      { href: "/modals/product-modal", label: "Product Modal" },
    ],
  },
  {
    title: "Logo Design",
    items: [
      { href: "/logo-design", label: "Logo Design" },
    ],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid md:grid-cols-2 divide-y-2 md:divide-x-2 md:divide-y-0 divide-gray-50 gap-8">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col gap-2 py-4 md:py-0"
        >
          <h2 className="font-black">{section.title}</h2>
          <div className="flex flex-col gap-2">
            {section.items.map((item) => (
              <Link key={item.href} href={item.href} className="text-blue-500">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

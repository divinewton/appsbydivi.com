import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TripBook: Country Tracker",
  description: "Read the Privacy Policy for TripBook: Country Tracker. Learn how your travel logs, visited countries, and personal memories are stored locally and kept completely private.",
  alternates: {
    canonical: "https://appsbydivi.com/tripbook/privacy",
  },
  authors: [{ name: "Divi Newton", url: "https://appsbydivi.com" }],
  creator: "Divi Newton",
  keywords: [
    "Divianadin Newton",
    "Divi Newton",
    "Apps by Divi",
    "UI by Divi",
    "divinewton",
    "TripBook",
    "Privacy Policy",
    "data privacy",
    "no tracking",
    "local data storage",
  ],
  icons: {
    icon: "/tripbook-icon.svg",
    shortcut: "/tripbook-icon.svg",
    apple: "/tripbook-icon.svg",
  },
  openGraph: {
    title: "Privacy Policy - TripBook: Country Tracker",
    description: "Read the Privacy Policy for TripBook: Country Tracker. Learn how your travel logs, visited countries, and personal memories are stored locally and kept completely private.",
    url: "https://appsbydivi.com/tripbook/privacy",
    siteName: "Apps by Divi",
    images: [
      {
        url: "/tripbook-cover.png",
        width: 1200,
        height: 630,
        alt: "TripBook: Country Tracker Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - TripBook: Country Tracker",
    description: "Read the Privacy Policy for TripBook: Country Tracker. Learn how your travel logs, visited countries, and personal memories are stored locally and kept completely private.",
    images: ["/tripbook-cover.png"],
  },
};

export default function TripBookPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-6 py-12 text-[#1d1d1f] sm:px-10">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-lg text-[#868589]">
          <strong>Last Updated:</strong> August 4, 2026
        </p>
        
        <div className="card mt-6 w-full rounded-2xl p-6 text-lg leading-relaxed text-[#515154] focus:outline-none">
          <p>This Privacy Policy governs the use of the TripBook iOS application ("the App"), developed by Divianadin Newton. User privacy is a fundamental priority. This policy outlines how information is stored and handled when using the App.</p> 

          <p className="mt-4">By choosing to use TripBook, users agree to the terms outlined in this Privacy Policy.</p>

          <hr className="my-8 border-gray-200" />

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Data Storage and Network Requests</h3>
          <p className="mt-4"><strong>TripBook does not use accounts, cloud sync, developer-operated servers, advertising, or analytics.</strong> Personal trips and journal data are stored locally on the user's device.</p>
          <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li><strong>On-Device Storage:</strong> All data entered into TripBook—including travel logs, visited countries, personal notes, profile name, and app settings—is saved locally on the user's Apple device.</li>
              <li><strong>Data Access:</strong> The developer does not receive, access, sell, or share users' personal trip journals, titles, written summaries, or profile names.</li>
              <li><strong>Country Content:</strong> To provide maps and optional country facts, descriptions, and photos, the App makes internet requests to Apple Maps, Wikipedia, Wikidata, and Wikimedia Commons. These requests may include the country being requested, such as a country code or article title.</li>
              <li><strong>Data Loss:</strong> If the App is uninstalled, the device is factory reset, or the device is lost, all TripBook data will be permanently deleted unless the user has independently backed up the device via Apple's iCloud or a local computer backup.</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Location Data and MapKit Integration</h3>
          <p className="mt-4">TripBook utilizes Apple's native MapKit framework to provide mapping functionality and visualize travel data.</p> 
          <p className="mt-4">The App does not request, access, track, or store the device's GPS or precise location. TripBook uses the home country and travel destinations selected by the user.</p> 
          <p className="mt-4">Map imagery and related map services are provided by Apple and are governed by Apple's own privacy policies and terms of service.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Third-Party Services and Analytics</h3>
          <p className="mt-4">TripBook does not integrate third-party analytics, tracking frameworks, or advertising SDKs. The App accesses Apple Maps, Wikipedia, Wikidata, and Wikimedia Commons to display map content and, when online, optional country facts, descriptions, and images. These services process requests under their own privacy policies.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Security</h3>
          <p className="mt-4">Personal trip data is stored locally on the user's device. Users are responsible for maintaining the security of their devices, including the use of passcodes, biometric locks, backups, and keeping the iOS operating system up to date.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Children's Privacy</h3>
          <p className="mt-4">TripBook does not knowingly collect personal information from children under the age of 13. The App does not require an account and does not include advertising or tracking features.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Global Privacy Compliance (GDPR, CCPA, and others)</h3>
          <p className="mt-4">TripBook is developed in California and is distributed globally. The developer respects applicable privacy regulations, including the European Union's General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), and other global or state-level data protection laws.</p> 
          <p className="mt-4">TripBook does not maintain a developer-controlled account or cloud copy of user trip data. Users can delete all local app data using the Reset App option in Settings or by uninstalling the App. Cached country content can be removed using Clear App Cache.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Limitation of Liability</h3>
          <p className="mt-4">TripBook is provided on an "as is" and "as available" basis without any warranties of any kind, either expressed or implied.</p> 
          <p className="mt-4">By using TripBook, users explicitly understand and agree that the developer, Divianadin Newton, shall not be held liable for any direct, indirect, incidental, special, or consequential damages that result from the use of, or inability to use, the App. This includes, but is not limited to:</p>
          <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li>Loss of travel data or history.</li>
              <li>Software bugs, errors, or inaccuracies in the App.</li>
              <li>Any issues arising from device malfunctions or iOS updates.</li>
          </ul>
          <p className="mt-4">Users assume full responsibility and risk for their use of the application.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Changes to This Privacy Policy</h3>
          <p className="mt-4">This Privacy Policy may be updated from time to time to reflect changes in the App's features or legal requirements. Since the App does not collect user contact information, users cannot be notified of changes directly. Users are advised to review this policy periodically for any updates. Changes are effective immediately upon publication.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Contact Information</h3>
          <p className="mt-4">For any questions, concerns, or inquiries regarding this Privacy Policy or the TripBook application, please reach out via email:</p>
          <p className="mt-4"><strong>Email:</strong> <a href="mailto:privacy@appsbydivi.com" className="text-[#007aff] hover:underline">privacy@appsbydivi.com</a></p>
        </div>
      </section>
    </main>
  );
}
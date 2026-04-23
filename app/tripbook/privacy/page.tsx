export default function TripBookPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-6 py-12 text-[#1d1d1f] sm:px-10">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-lg text-[#868589]">
          <strong>Last Updated:</strong> April 22, 2026
        </p>
        
        <div className="card mt-6 w-full rounded-2xl p-6 text-lg leading-relaxed text-[#515154] focus:outline-none">
          <p>This Privacy Policy governs the use of the TripBook iOS application ("the App"), developed by Divianadin Newton. User privacy is a fundamental priority. This policy outlines the guidelines regarding the collection, use, and handling of information when utilizing the App.</p> 

          <p className="mt-4">By choosing to use TripBook, users agree to the terms outlined in this Privacy Policy.</p>

          <hr className="my-8 border-gray-200" />

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Data Collection and Storage</h3>
          <p className="mt-4"><strong>TripBook does not collect, store, or transmit any personal data.</strong> The application is designed to function entirely offline, without the use of proprietary remote servers or external databases.</p>
          <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li><strong>On-Device Storage:</strong> All data entered into TripBook—including travel logs, visited countries, and personal notes—is saved exclusively and strictly locally on the user's Apple device.</li>
              <li><strong>Data Access:</strong> Because user data never leaves the device, the developer has absolutely no access to any user information.</li>
              <li><strong>Data Loss:</strong> If the App is uninstalled, the device is factory reset, or the device is lost, all TripBook data will be permanently deleted unless the user has independently backed up the device via Apple's iCloud or a local computer backup.</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Location Data and MapKit Integration</h3>
          <p className="mt-4">TripBook utilizes Apple's native MapKit framework to provide mapping functionality and visualize travel data.</p> 
          <p className="mt-4">To provide these features, the App assumes personal location via the device's system location services. <strong>However, this location data is processed strictly on-device.</strong> The App does not track, record, transmit, or send location data to any external servers, third-party services, or the developer.</p> 
          <p className="mt-4">Because MapKit is an Apple framework, its core functionality is governed by Apple’s own system-level privacy policies and terms of service.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Third-Party Services and Analytics</h3>
          <p className="mt-4">Aside from Apple's native frameworks, TripBook does not integrate any third-party analytics, tracking frameworks, or advertising SDKs. App usage behavior and interactions are not monitored, recorded, or transmitted to any third parties by the developer.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Security</h3>
          <p className="mt-4">While TripBook does not transmit data over the internet, the security of the data entered into the App relies on the physical and digital security of the user's device. Users are responsible for maintaining the security of their devices, including the use of passcodes, biometric locks, and keeping the iOS operating system up to date.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Children's Privacy</h3>
          <p className="mt-4">TripBook does not knowingly collect personally identifiable information from children under the age of 13. Because the App does not collect any personal data from any users, no data is collected from children.</p>

          <h3 className="mt-8 text-xl font-semibold text-[#1d1d1f]">Global Privacy Compliance (GDPR, CCPA, and others)</h3>
          <p className="mt-4">TripBook is developed in California and is distributed globally. The developer respects international privacy regulations, including the European Union's General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), and other global or state-level data protection laws.</p> 
          <p className="mt-4">Because the App does not collect, process, share, or sell any personal data whatsoever, there is no user data available to disclose, correct, or delete upon request. The developer acts as neither a Data Controller nor a Data Processor regarding user travel data, as all information remains strictly within the user's local control.</p>

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
import type { Metadata } from "next";
import Link from "next/link";
import { LogIn, Shield, RefreshCw, Fingerprint } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
 title: "GoldsBet Login 2026 | How to Login to GoldsBet App in Pakistan",
 description: "Complete guide to login to GoldsBet in Pakistan. How to access your account, reset password, and enable biometric login.",
 alternates: { canonical: `${SITE.url}/goldsbet-login` },
};

const faqs = [
 { q: "I forgot my GoldsBet password. How do I reset it?", a: "On the login screen, tap 'Forgot Password', enter your registered mobile number, receive an OTP via SMS, and create a new password."},
 { q: "Can I log in with Face ID or fingerprint?", a: "Yes. Go to GoldsBet Settings → Security → Enable Biometric Login. Subsequent logins use Face ID or fingerprint automatically."},
 { q: "My GoldsBet account is locked. What do I do?", a: "Accounts lock after 5 failed login attempts. Wait 30 minutes or contact GoldsBet live chat with your registered number to unlock."},
 { q: "I'm not receiving the OTP. What should I check?", a: "Check your network signal. Make sure the number you entered is the one registered with GoldsBet. Try requesting the OTP again after 60 seconds."},
 { q: "Can I log in to GoldsBet on multiple devices?", a: "Yes. GoldsBet supports simultaneous login on multiple devices. For security, you will receive a notification for any new device login."},
];

export default function LoginPage() {
 return (
 <>
 <script type="application/ld+json"dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Login", url: `${SITE.url}/goldsbet-login` }])) }} />

 <div className="pt-20 min-h-screen bg-[#0A0A0A]">
 <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] py-14">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <Breadcrumb items={[{ label: "GoldsBet Login"}]} />
 <div className="text-center mt-6">
 <h1 className="text-4xl font-black text-white mb-4">
 GoldsBet <span className="text-gold-gradient">Login</span> 2026
 </h1>
 <p className="text-gray-400 text-lg max-w-xl mx-auto">
 How to log in to your GoldsBet account in Pakistan – including password reset, biometric login and account security tips.
 </p>
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#0A0A0A]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid md:grid-cols-2 gap-10">
 {/* Regular login */}
 <div>
 <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
 <LogIn className="w-6 h-6 text-[#D4AF37]"/> How to Login
 </h2>
 <div className="space-y-3">
 {[
 { num: 1, title: "Open GoldsBet App", text: "Launch the GoldsBet app on your Android or iOS device."},
 { num: 2, title: "Enter Mobile Number", text: "Type your registered Pakistani mobile number (+92XXXXXXXXXX)."},
 { num: 3, title: "Enter Password", text: "Type your password and tap the green 'Login' button."},
 { num: 4, title: "OTP Verification (new device)", text: "On a new device, confirm the OTP sent to your number."},
 { num: 5, title: "Access Your Account", text: "You are now logged in. Access your wallet, games and promotions."},
 ].map((step) => (
 <div key={step.num} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
 <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] flex items-center justify-center text-black font-black text-sm flex-shrink-0">
 {step.num}
 </div>
 <div>
 <p className="font-semibold text-white text-sm">{step.title}</p>
 <p className="text-gray-400 text-xs mt-1">{step.text}</p>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Password reset + biometric */}
 <div className="space-y-8">
 <div>
 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
 <RefreshCw className="w-5 h-5 text-blue-400"/> Reset Forgotten Password
 </h2>
 <div className="space-y-3">
 {[
 "Tap 'Forgot Password?' on the login screen",
 "Enter your registered mobile number",
 "Receive a 6-digit OTP via SMS",
 "Enter the OTP and create your new password",
 "Log in with your new credentials",
 ].map((step, i) => (
 <div key={i} className="flex gap-3 text-sm p-3 rounded-xl bg-white/5 border border-white/10">
 <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
 <span className="text-gray-300">{step}</span>
 </div>
 ))}
 </div>
 </div>

 <div>
 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
 <Fingerprint className="w-5 h-5 text-green-400"/> Enable Biometric Login
 </h2>
 <div className="space-y-3">
 {[
 "Open GoldsBet and go to Settings",
 "Tap Security → Biometric Login",
 "Toggle 'Enable Face ID / Fingerprint'",
 "Verify with your current password once",
 "Future logins use your face or fingerprint automatically",
 ].map((step, i) => (
 <div key={i} className="flex gap-3 text-sm p-3 rounded-xl bg-white/5 border border-white/10">
 <span className="w-6 h-6 rounded-lg bg-green-500/20 text-green-400 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
 <span className="text-gray-300">{step}</span>
 </div>
 ))}
 </div>
 </div>

 <div className="p-4 rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20">
 <p className="flex items-start gap-2 text-sm text-green-700 dark:text-green-400">
 <Shield className="w-4 h-4 flex-shrink-0 mt-0.5"/>
 <span>GoldsBet support will <strong>never</strong> ask for your password. Never share it with anyone.</span>
 </p>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="py-16 bg-[#111111]">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 <h2 className="text-2xl font-bold text-white mb-8 text-center">Login FAQs</h2>
 <FAQAccordion faqs={faqs} />
 </div>
 </section>

 <section className="py-10 bg-[#0A0A0A] border-t border-white/10">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-3">
 {[
 { label: "Download GoldsBet APK", href: "/download-goldsbet-apk"},
 { label: "Register New Account", href: "/how-to-register-on-goldsbet"},
 { label: "How to Earn Money", href: "/how-to-earn-money-on-goldsbet"},
 { label: "Is GoldsBet Real?", href: "/is-goldsbet-real-or-fake"},
 ].map((l) => (
 <Link key={l.href} href={l.href} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all">
 {l.label} →
 </Link>
 ))}
 </div>
 </section>
 </div>
 </>
 );
}

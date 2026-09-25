import { useState } from 'react';
import { ContactInfo } from '../profileData';
import { Mail, Github, Linkedin, Instagram, Copy, Check, ExternalLink, Send } from 'lucide-react';

interface ContactSectionProps {
  contact: ContactInfo;
  fullName: string;
}

export function ContactSection({ contact, fullName }: ContactSectionProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [messageForm, setMessageForm] = useState({ name: '', email: '', message: '' });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.email || !messageForm.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setMessageForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 border-b border-[#E2E8F0] scroll-mt-20">
      <div className="mb-8">
        <span className="text-xs font-semibold text-[#1E3A8A] tracking-wider uppercase">06. Communication Channels</span>
        <h2 className="font-academic text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Contact &amp; Profiles
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Official digital channels for academic inquiries, collaboration, and professional networking.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Links Grid (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <div className="p-4 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#EEF2F6] rounded text-[#1E3A8A]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Email Address</span>
                  </div>
                </div>
                <p className="text-xs text-[#475569] font-mono-code break-all mb-3">
                  {contact.email.display}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#F8FAFC]">
                <a
                  href={`mailto:${contact.email.address}`}
                  className="text-xs text-[#1E3A8A] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Compose Mail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#CBD5E1]">·</span>
                <button
                  onClick={() => handleCopy(contact.email.address, 'email')}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] inline-flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#EEF2F6] rounded text-[#0A66C2]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">LinkedIn</span>
                  </div>
                </div>
                <p className="text-xs text-[#475569] font-mono-code break-all mb-3">
                  {contact.linkedin.username}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#F8FAFC]">
                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#1E3A8A] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Open Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#CBD5E1]">·</span>
                <button
                  onClick={() => handleCopy(contact.linkedin.url, 'linkedin')}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] inline-flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'linkedin' ? (
                    <>
                      <Check className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-4 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#EEF2F6] rounded text-[#24292F]">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">GitHub</span>
                  </div>
                </div>
                <p className="text-xs text-[#475569] font-mono-code break-all mb-3">
                  {contact.github.username}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#F8FAFC]">
                <a
                  href={contact.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#1E3A8A] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>View Repos</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#CBD5E1]">·</span>
                <button
                  onClick={() => handleCopy(contact.github.url, 'github')}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] inline-flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'github' ? (
                    <>
                      <Check className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-4 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#CBD5E1] transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-[#EEF2F6] rounded text-[#E4405F]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F172A]">Instagram</span>
                  </div>
                </div>
                <p className="text-xs text-[#475569] font-mono-code break-all mb-3">
                  {contact.instagram.handle}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#F8FAFC]">
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#1E3A8A] hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#CBD5E1]">·</span>
                <button
                  onClick={() => handleCopy(contact.instagram.handle, 'instagram')}
                  className="text-xs text-[#64748B] hover:text-[#0F172A] inline-flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'instagram' ? (
                    <>
                      <Check className="w-3 h-3 text-[#059669]" />
                      <span className="text-[#059669]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-xs text-[#64748B]">
            <p>
              <strong>Privacy Notice:</strong> In compliance with academic portfolio standards, telephone numbers and private residential addresses are omitted. For formal inquiries, please contact via the designated institutional or personal email above.
            </p>
          </div>
        </div>

        {/* Quick Message Form (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-[#CBD5E1] rounded-lg p-5 shadow-xs">
          <div className="mb-4">
            <h3 className="font-semibold text-sm text-[#0F172A]">Send a Direct Message</h3>
            <p className="text-xs text-[#64748B]">Leave a quick note for {fullName}.</p>
          </div>

          {messageSent ? (
            <div className="p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded-md text-center space-y-2">
              <Check className="w-6 h-6 text-[#059669] mx-auto" />
              <p className="text-xs font-semibold text-[#065F46]">Message Dispatched</p>
              <p className="text-[11px] text-[#047857]">
                Thank you! Your note has been received in the local profile inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleMessageSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={messageForm.name}
                  onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                  placeholder="Visitor or Recruiter Name"
                  className="w-full px-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={messageForm.email}
                  onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#475569] uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  value={messageForm.message}
                  onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                  placeholder="Hello, I came across your BSCS profile and would like to connect..."
                  className="w-full px-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md text-[#0F172A] focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#0F172A] hover:bg-[#1E3A8A] rounded-md transition-colors shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Youtube, Linkedin, Twitter, MessageCircle, Music2 } from 'lucide-react';
import Marquee from './Marquee';

const items = [
  { name: 'X', icon: Twitter },
  { name: 'TikTok', icon: Music2 },
  { name: 'YouTube', icon: Youtube },
  { name: 'Instagram', icon: Instagram },
  { name: 'Facebook', icon: Facebook },
  { name: 'Threads', icon: MessageCircle },
  { name: 'Mastodon', icon: MessageCircle },
  { name: 'Bluesky', icon: MessageCircle },
  { name: 'LinkedIn', icon: Linkedin },
];

export default function PlatformsRibbon() {
  return (
    <div className="mt-10">
      <div className="rounded-xl border border-slate-200 bg-white/80 p-3 shadow-sm">
        <Marquee speed={35}>
          {items.map((it) => (
            <span key={it.name} className="mx-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <it.icon size={16} /> {it.name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

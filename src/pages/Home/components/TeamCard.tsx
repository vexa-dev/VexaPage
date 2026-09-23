import { SocialIcon } from "@/components/icons/SocialIcon";
import type { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-2xl mb-4 bg-white/5 aspect-square">
        {member.photo ? (
          <img
            alt={member.photo.alt}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
            src={member.photo.src}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
            <span className="material-symbols-outlined text-white/50 text-6xl">person</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <div className="flex gap-4">
            {member.socials.map((social) => (
              <a
                key={social.network}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-primary transition-all"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon network={social.network} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <h4 className="font-bold text-lg text-white">{member.name}</h4>
      <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
      <p className="text-xs text-slate-500">{member.bio}</p>
    </div>
  );
}

"use client";
import { Info } from "@/services/api";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  FaEllipsisVertical,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import LoadingOverlay from "./LoadingOverlay";
const socialMediaIcons: { [key: string]: React.ElementType } = {
  linked: FaLinkedin,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  telegram: FaTelegram,
};
type SocialLink = {
  name: string;
  url: string;
};
type InfoProp = {
  info?: Info;
};
const SocialLinks = ({ info }: InfoProp) => {
  const [loading, setLoading] = useState(false);
  const socialLinks = useMemo(() => {
    const links: SocialLink[] = [];
    if (!info) {
      return links;
    }
    if (info.linkedin_url)
      links.push({ name: "linkedin", url: info.linkedin_url });
    if (info.facebook_url)
      links.push({ name: "facebook", url: info.facebook_url });
    if (info.instagram_url)
      links.push({ name: "instagram", url: info.instagram_url });
    if (info.youtube_url)
      links.push({ name: "youtube", url: info.youtube_url });
    if (info.tiktok_url) links.push({ name: "tiktok", url: info.tiktok_url });
    if (info.telegram_url)
      links.push({ name: "telegram", url: info.telegram_url });

    return links;
  }, [info]);
  return (
    <>
      {loading && <LoadingOverlay />}
      {socialLinks.length > 0 &&
        socialLinks.map((link) => {
          const Icon = socialMediaIcons[link.name];
          if (!Icon) return null;

          return (
            <Link
              key={link.name}
              href={link.url}
              prefetch={true}
              onClick={() => setLoading(true)}
              className="inline"
              target="_blank" 
        rel="noopener noreferrer"
            >
              <Icon size={20} />
            </Link>
          );
        })}
    </>
  );
};

export default SocialLinks;

// Profile.tsx
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { ProfileCard } from './ProfileCard'

interface Profile {
  avatar: string;
  name: string;
  username: string;
  role: string;
  description: string;
}

interface ProfilesGridProps {
  profiles: Profile[];
}

const profiles = [
  {
    avatar: "https://avatar.vercel.sh/kartik", 
    name: "Kartik",
    username: "@kartikdev",
    role: "3D Designer",
    description: "Creating immersive 3D environments that bring the game to life."
  },
  {
    avatar: "https://avatar.vercel.sh/iman", 
    name: "Iman",
    username: "@imandev",
    role: "Core Developer",
    description: "Building the foundation of the game with efficient code and performance."
  },
  {
    avatar: "https://avatar.vercel.sh/harleen", 
    name: "Harleen",
    username: "@harleendesign",
    role: "Asset Developer",
    description: "Designing and integrating the assets that enhance gameplay and visuals."
  }
];

export function ProfilesGrid({ profiles }: ProfilesGridProps) {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet the Team</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            avatar={profile.avatar}
            name={profile.name}
            username={profile.username}
            role={profile.role}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  )
}

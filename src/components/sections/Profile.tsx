import { motion } from 'framer-motion'


interface Profile {
  avatar: string;
  name: string;

  role: string;
  description: string;
}

interface ProfileCardProps {
  avatar: string;
  name: string;

  role: string;
  description: string;
}

function ProfileCard({ avatar, name, role, description }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative bg-white rounded-lg p-6 pb-8 border-2 border-b-4 border-r-4 border-black hover:border-b-2 hover:border-r-2 transition-all duration-100 shadow-sm hover:shadow active:border-b-2 active:border-r-2"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm text-justify">{description}</p>
      </div>
    </motion.div>
  )
}

interface ProfilesGridProps {
  profiles: Profile[];
}

function ProfilesGrid({ profiles }: ProfilesGridProps) {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet the Team</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            avatar={profile.avatar}
            name={profile.name}
          
            role={profile.role}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  )
}

// Profile data array
const profiles = [
  {
    avatar: "https://avatar.vercel.sh/kartik", // Replace with your actual image URL
    name: "Kartik",
   
    role: "3D Designer",
    description: "Creating immersive 3D environments that bring the game to life."
  },
  {
    avatar: "https://avatar.vercel.sh/iman", // Replace with your actual image URL
    name: "Iman",
   
    role: "Core Developer",
    description: "Building the foundation of the game with efficient code and performance."
  },
  {
    avatar: "https://avatar.vercel.sh/harleen", // Replace with your actual image URL
    name: "Harleen",
   
    role: "Asset Developer",
    description: "Designing and integrating the assets that enhance gameplay and visuals."
  }
];

export function Profile() {
  return (
    <ProfilesGrid profiles={profiles} />
  );
}

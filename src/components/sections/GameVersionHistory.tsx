import { motion } from 'framer-motion'

interface GameVersion {
  version: string
  releaseDate: string
  description: string
  isStable?: boolean // Property to mark the stable version
}

// Game Versions Data with added 'isStable' property for latest stable version
const gameVersions: GameVersion[] = [
  {
    version: "1.0",
    releaseDate: "2023-01-15",
    description: "Initial release with basic mechanics and maps.",
    isStable: false,
  },
  {
    version: "1.1",
    releaseDate: "2023-03-20",
    description: "Added new guns and game modes.",
    isStable: false,
  },
  {
    version: "2.0",
    releaseDate: "2024-05-10",
    description: "Major update with a new map and improved graphics.",
    isStable: false,
  },
  {
    version: "2.1",
    releaseDate: "2024-07-25",
    description: "Bug fixes and performance improvements.",
    isStable: true, // Marked as stable
  },
  {
    version: "3.0",
    releaseDate: "2025-01-30",
    description: "Complete overhaul with new features, UI updates, and optimizations.",
    isStable: false,
  },
]

interface GameVersionHistoryProps {
  versions: GameVersion[]
}

export function GameVersionHistory({ versions }: GameVersionHistoryProps) {
  return (
    <div className="mt-16 text-center max-w-screen-xl mx-auto px-4 md:px-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Game Version History</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-x-auto shadow-lg rounded-lg bg-white p-4"
      >
        <table className="min-w-full bg-white table-auto border-collapse border border-gray-300 rounded-md border-round">
          <thead className="bg-[#E9967A] text-gray-700 rounded-md border-round">
            <tr>
              <th className="py-3 px-4 border-b text-left">Version</th>
              <th className="py-3 px-4 border-b text-left">Release Date</th>
              <th className="py-3 px-4 border-b text-left">Description</th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody className="rounded-md border-round">
            {versions.map((version, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                className={`text-gray-700 hover:bg-gray-100 ${version.isStable ? 'bg-green-100' : ''}`}
              >
                <td className="py-3 px-4 border-b">{version.version}</td>
                <td className="py-3 px-4 border-b">{version.releaseDate}</td>
                <td className="py-3 px-4 border-b text-left">{version.description}</td>
                <td className="py-3 px-4 border-b">
                  {version.isStable ? (
                    <span className="text-green-600 font-semibold">Stable</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">Beta</span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}

// Main Section where Game Version History will be displayed
export function GameVersionSection() {
  return <GameVersionHistory versions={gameVersions} />
}

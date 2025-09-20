import { skills } from "../data"
import Subheader from "./Subheader"

export default function Skills() {
  return (
    <>
      <div className="w-full mb-4 border border-gray-400/50 rounded-md p-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-[75px] h-[60px] object-contain"
                    />
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

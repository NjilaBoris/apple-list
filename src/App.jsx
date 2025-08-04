import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOnClickOutside } from "usehooks-ts";

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
const App = () => {
  const [activeGame, setActiveGame] = useState(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  return (
    <div className="relative h-dvh flex w-full min-w-[300px] items-center justify-center p-6">
      <AnimatePresence>
        {activeGame ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 z-10 bg-neutral-300/40"
            />
            <div className="absolute inset-0 z-10 grid place-items-center">
              <motion.div
                layoutId={`game-${activeGame.title}`}
                className="flex h-fit max-w-[500px] cursor-pointer flex-col items-start gap-4 overflow-hidden border border-neutral-400 bg-white p-4"
                ref={ref}
                style={{ borderRadius: 12 }}
              >
                <div className="flex w-full items-center gap-4">
                  <span>
                    <motion.img
                      layoutId={`image-${activeGame.title}`}
                      alt="Game"
                      src={activeGame.image}
                      style={{ borderRadius: 12 }}
                      className="h-14 w-14"
                    />
                  </span>

                  <div className="flex flex-grow items-center justify-between">
                    <div className="flex flex-col py-3">
                      <motion.h2
                        layoutId={`heading-${activeGame.title}`}
                        className="text-sm font-semibold text-neutral-700"
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`paragraph-${activeGame.description}`}
                        className="text-sm text-neutral-500"
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`paragraph-${activeGame.title}`}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-blue-600"
                    >
                      Get
                    </motion.button>
                  </div>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="text-sm text-neutral-600"
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <ul className="relative my-12 flex w-full flex-col items-center p-0">
        {GAMES.map((game) => (
          <motion.li
            layoutId={`game-${game.title}`}
            whileTap={{ scale: 0.95 }}
            key={game.title}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            className="flex w-full cursor-pointer items-center gap-4 p-0 sm:w-[368px]"
          >
            <span>
              <motion.img
                layoutId={`image-${game.title}`}
                alt="Game"
                src={game.image}
                style={{ borderRadius: 12 }}
                priority
                className="h-14 w-14"
              />
            </span>
            <div className="flex flex-grow items-center justify-between border-b border-neutral-300">
              <div className="flex flex-col py-4">
                <motion.h2
                  layoutId={`heading-${game.title}`}
                  className="text-sm font-semibold text-neutral-700 "
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`paragraph-${game.description}`}
                  className="text-sm text-neutral-500"
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`paragraph-${game.title}`}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-blue-600"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default App;

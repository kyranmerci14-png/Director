import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DirectorSite() {
  const [active, setActive] = useState("home");

  const films = [
    { title: "Midnight Echo", year: "2024", desc: "A psychological thriller about memory." },
    { title: "Glass Horizon", year: "2023", desc: "A sci‑fi drama exploring isolation in space." },
    { title: "Fading Summer", year: "2022", desc: "An intimate coming‑of‑age story." }
  ];

  const menu = (
    <div className="flex gap-4 mb-8">
      {["home","films","about","contact"].map((item) => (
        <Button
          key={item}
          onClick={() => setActive(item)}
          className="capitalize"
        >
          {item}
        </Button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Director Portfolio</h1>
      <p className="text-gray-400 mb-6">Visual storytelling & cinematic worlds</p>

      {menu}

      {active === "home" && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <Card className="bg-neutral-900">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-2">Welcome</h2>
              <p>
                This portfolio showcases a collection of films, concepts, and
                visual storytelling projects. Navigate through the menu to
                explore filmography, background, and contact information.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {active === "films" && (
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          className="grid md:grid-cols-3 gap-6"
        >
          {films.map((film) => (
            <Card key={film.title} className="bg-neutral-900">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{film.title}</h3>
                <p className="text-gray-400">{film.year}</p>
                <p className="mt-2">{film.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      )}

      {active === "about" && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <Card className="bg-neutral-900">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-2">About the Director</h2>
              <p>
                A filmmaker focused on atmospheric storytelling, character
                driven narratives, and visually immersive worlds. Influenced
                by classic cinema and modern experimental film.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {active === "contact" && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <Card className="bg-neutral-900">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-2">Contact</h2>
              <p>Email: director@email.com</p>
              <p>Agent: agency@email.com</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

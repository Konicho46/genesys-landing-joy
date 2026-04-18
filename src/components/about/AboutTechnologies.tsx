import aws from "@/assets/tools/aws.png";
import azure from "@/assets/tools/azure.png";
import bootstrap from "@/assets/tools/bootstrap.png";
import cpp from "@/assets/tools/c++.png";
import c from "@/assets/tools/c.png";
import figma from "@/assets/tools/figma.png";
import firebase from "@/assets/tools/firebase.png";
import flutter from "@/assets/tools/flutter.png";
import gcp from "@/assets/tools/google cloude.png";
import kotlin from "@/assets/tools/kotlin.png";
import laravel from "@/assets/tools/laravel.png";
import modbus from "@/assets/tools/modbus.png";
import mqtt from "@/assets/tools/mqtt.png";
import mysql from "@/assets/tools/mysql.png";
import node from "@/assets/tools/node.png";
import nuxt from "@/assets/tools/nuxt js.png";
import postgres from "@/assets/tools/postgres.png";
import python from "@/assets/tools/pyhton.png";
import react from "@/assets/tools/react.png";
import soap from "@/assets/tools/soap.png";
import sqlserver from "@/assets/tools/sql server.png";
import tailwind from "@/assets/tools/tailwindcss.png";
import vsc from "@/assets/tools/vsc.png";
import vue from "@/assets/tools/vue.png";
import websocket from "@/assets/tools/websocket.png";

const technologies = [
  { name: "React", image: react },
  { name: "Flutter", image: flutter },
  { name: "Vue.js", image: vue },
  { name: "Nuxt.js", image: nuxt },
  { name: "Node.js", image: node },
  { name: "Python", image: python },
  { name: "C++", image: cpp },
  { name: "C", image: c },
  { name: "Kotlin", image: kotlin },
  { name: "Laravel", image: laravel },
  { name: "MySQL", image: mysql },
  { name: "PostgreSQL", image: postgres },
  { name: "SQL Server", image: sqlserver },
  { name: "AWS", image: aws },
  { name: "Google Cloud", image: gcp },
  { name: "Azure", image: azure },
  { name: "Firebase", image: firebase },
  { name: "Tailwind CSS", image: tailwind },
  { name: "Bootstrap", image: bootstrap },
  { name: "Figma", image: figma },
  { name: "VS Code", image: vsc },
  { name: "MQTT", image: mqtt },
  { name: "Modbus", image: modbus },
  { name: "SOAP", image: soap },
  { name: "WebSocket", image: websocket },
];

const AboutTechnologies = () => {
  return (
    <section className="py-20 lg:py-28 bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
          A deep dive into our advanced platform capabilities.
        </p>
        <h2 className="font-display text-3xl lg:text-4xl font-bold mb-10">
          Genesys Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-12 lg:gap-16">
          {technologies.map((t) => (
            <img 
              key={t.name}
              src={t.image} 
              alt={t.name}
              title={t.name}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain transition-transform hover:scale-110"
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTechnologies;

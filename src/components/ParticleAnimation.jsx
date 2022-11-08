import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleAnimation = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#234F8B",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
            bubble: {
              distance: 150,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "top",
            enable: true,
            outModes: "out",
            random: true,
            speed: 1,
            straight: false,
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 40,
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#fff"
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 5,
              sync: false
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleAnimation;
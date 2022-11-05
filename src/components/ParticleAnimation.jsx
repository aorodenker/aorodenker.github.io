import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleAnimation = () => {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 400,
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
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
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
              area: 600,
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
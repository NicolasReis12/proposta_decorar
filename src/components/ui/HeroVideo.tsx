"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { heroVideo } from "@/data/conteudo";

/**
 * Fundo da tela de abertura: vídeo em loop, sem som.
 * Se o vídeo não carregar, a foto de reserva (poster) continua visível.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (v.error) setFailed(true);
    // Respeita quem prefere menos movimento
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      setPlaying(false);
    }
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <Image src={heroVideo.fallbackImage} alt="" fill priority sizes="100vw" className="object-cover object-center opacity-45" />
      {!failed && (
        <video
          ref={ref}
          src={heroVideo.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-60"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50" />
      {!failed && (
        <button
          onClick={toggle}
          className="no-print absolute right-5 bottom-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-navy/50 text-white/80 backdrop-blur hover:text-white md:right-8"
          aria-label={playing ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"}
          title={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
        >
          {playing ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>
      )}
    </>
  );
}

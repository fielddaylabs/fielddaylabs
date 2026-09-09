"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
function Orb() { const ref = useRef<THREE.Mesh>(null); useFrame((_, d) => { if (ref.current) { ref.current.rotation.x += d * .12; ref.current.rotation.y += d * .18; } }); return <Float speed={1.4} rotationIntensity={.35} floatIntensity={.8}><Sphere ref={ref} args={[1.05, 96, 96]} scale={[1, 1.1, 1]}><MeshDistortMaterial color="#d7ff45" roughness={.18} metalness={.55} distort={.32} speed={1.6} /></Sphere></Float> }
export default function Scene() { return <Canvas camera={{ position: [0, 0, 5.2], fov: 34 }} dpr={[1, 2]}><ambientLight intensity={1.4} /><directionalLight position={[3, 4, 5]} intensity={3.2} color="#f4ffcf" /><pointLight position={[-3, -2, 2]} intensity={8} color="#9bb92e" /><Orb /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.3} /></Canvas> }

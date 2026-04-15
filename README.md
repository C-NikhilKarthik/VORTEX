<div align="center">
  
# VORTEX
**Visual Object Rendering and Tracking Engine for Cross-platform**

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20Edge%20Devices-orange.svg)](#)
[![Web Interface](https://img.shields.io/badge/Website-React%20%7C%20Three.js-black.svg)](#)

*A hardware and geometry-aware 6-DoF object tracking framework designed for maximum performance on edge architectures.*

</div>

## 📖 Abstract

Real-time 6-DoF pose estimation on mobile and embedded platforms is fundamentally constrained by computational limitations and geometric robustness requirements. While dense SLAM pipelines and learned pose regression models typically require substantial compute and memory resources (making efficient deployment on edge devices difficult), classical feature-based tracking offers a lightweight alternative. However, most existing classical implementations rely on purely algebraic point-matching formulations—such as homography estimation—that lack explicit 3D geometric constraints, causing instability under viewpoint changes, scale variations, or partial visibility.

**VORTEX** introduces a novel hardware-aware and geometry-aware tracking framework to solve these constraints without requiring persistent mapping. 

By restructuring the foundational algebraic tracking stages into highly optimized pipelines and introducing a novel **Spring-Hook optimization mechanism** for SE(3) pose solving, VORTEX achieves state-of-the-art tracking stability on edge devices.

## ✨ Core Innovations

1. **Hardware-Accelerated Feature Backbone**
   - **CPU Pipeline:** Leverages SIMD vectorization for ultra-fast algebraic processing.
   - **GPU-Resident Pipeline:** Utilizes custom fragment and compute shaders for parallelized keypoint detection, descriptor extraction, and descriptor matching.

2. **Render-and-Track SE(3) Formulation**
   - Implements a rendering-based approach that incorporates explicit object geometry.
   - Synthetic reference views are rendered on-the-fly to store both appearance and object-space coordinates, enabling direct 2D–3D correspondence lifting.

3. **Novel Spring/Hook SE(3) Optimization**
   - Bypasses traditional computationally expensive Gauss-Newton optimization methodologies.
   - Introduces an iterative spring/hook-based physical solver for the SE(3) pose that significantly enhances pose stability and prevents divergent tracking errors.

## 🌐 Project Website & Demo

A modernized, high-performance web platform for VORTEX—built with React, TypeScript, and Three.js—accompanies this repository, showcasing live benchmarks, WebGL architecture renderings, and research team details.

To view the platform locally:

```bash
cd web
bun install
bun dev
```
Navigate to `http://localhost:5173/` to interact with the project showcase.

## 📊 Performance

Experimental evaluations on Android-based mobile hardware demonstrate that integrating the GPU-accelerated algebraic tracking with the proposed **Spring-Hook geometry-aware SE(3) refinement** severely out-competes pure algebraic tracking. The framework achieves flawless real-time 6-DoF object tracking, optimizing computational throughput while resolving instability in volatile tracking conditions.
*Developed by the VORTEX Research Team.*

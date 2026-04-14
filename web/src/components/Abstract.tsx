export default function Abstract() {
  return (
    <section className="py-32 bg-black relative border-t border-white/[0.05]" id="abstract">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
             <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">
               The Abstract
             </h2>
             <p className="text-zinc-500 text-base leading-relaxed">
               A detailed overview of the computational tracking constraints on edge devices and the deployed VORTEX geometry solutions.
             </p>
          </div>

          <div className="lg:col-span-8">
            {/* Using the newly baked linear-card to inherit the glassy borders automatically */}
            <div className="linear-card flex flex-col gap-4 p-8 md:p-14 noise-bg">
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-8">Real-time 6-DoF pose estimation</h3>
                
                <div className="space-y-8 text-zinc-400 text-base leading-relaxed font-light">
                  <p>
                    Real-time 6-DoF pose estimation on mobile and embedded platforms is constrained by both computational limitations and geometric robustness requirements. Dense SLAM pipelines and learned pose regression models typically require substantial compute and memory resources, making them difficult to deploy efficiently on edge devices. Classical feature-based tracking offers a lightweight alternative, but most existing implementations rely on purely algebraic point-matching formulations—such as homography estimation—that lack explicit 3D geometric constraints and often become unstable under viewpoint changes, scale variation, or partial visibility.
                  </p>
                  
                  <p className="text-zinc-200 font-medium border-l-2 border-white/20 pl-6 py-2">
                    In this work, we present a hardware-aware and geometry-aware tracking framework designed specifically for edge devices.
                  </p>
    
                  <p>
                    We first redesign the foundational algebraic tracking stages through two optimized implementations: a CPU pipeline leveraging SIMD vectorization and a GPU-resident feature pipeline using custom fragment and compute shaders for keypoint detection, descriptor extraction, and parallel descriptor matching.
                  </p>
    
                  <p>
                    Building on this accelerated feature backbone, we introduce a render-and-track formulation on the SE(3) manifold that incorporates explicit object geometry. Synthetic reference views are rendered to store both appearance and object-space coordinates, enabling direct 2D–3D correspondence lifting and pose refinement. Experiments on Android-based mobile hardware demonstrate that while GPU-accelerated algebraic tracking improves computational throughput, our novel geometry-aware SE(3) refinement—employing a unique spring/hook iterative solver in place of traditional Gauss-Newton optimization—significantly improves pose stability and robustness.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

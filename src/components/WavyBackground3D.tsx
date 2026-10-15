import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Sparkles, Sliders, Play, Pause, RefreshCw, Eye } from 'lucide-react';
import { useRestaurant } from '../context/RestaurantContext';

export type WavePresetId = 'gold_silk' | 'emerald_oasis' | 'espresso_velvet' | 'wireframe_mesh';

interface WavePreset {
  id: WavePresetId;
  nameAr: string;
  nameEn: string;
  baseColor: string;
  waveColor: string;
  highlightColor: string;
  speed: number;
  height: number;
  frequency: number;
  wireframe: boolean;
  pointsColor: string;
}

const PRESETS: Record<WavePresetId, WavePreset> = {
  gold_silk: {
    id: 'gold_silk',
    nameAr: 'حرير الذهب والشمبانيا',
    nameEn: 'Royal Champagne Silk',
    baseColor: '#17211A',
    waveColor: '#7A6237',
    highlightColor: '#DFC89B',
    speed: 0.7,
    height: 1.1,
    frequency: 0.35,
    wireframe: false,
    pointsColor: '#C8A96B'
  },
  emerald_oasis: {
    id: 'emerald_oasis',
    nameAr: 'تموجات نجد الزمردية',
    nameEn: 'Najd Emerald Oasis',
    baseColor: '#101B13',
    waveColor: '#2B4A33',
    highlightColor: '#C8A96B',
    speed: 0.9,
    height: 1.3,
    frequency: 0.42,
    wireframe: false,
    pointsColor: '#E8C9C5'
  },
  espresso_velvet: {
    id: 'espresso_velvet',
    nameAr: 'مخمل الشوكولاتة والعقيق',
    nameEn: 'Espresso Velvet & Gold',
    baseColor: '#1F1511',
    waveColor: '#4A342B',
    highlightColor: '#D4AF37',
    speed: 0.6,
    height: 1.0,
    frequency: 0.38,
    wireframe: false,
    pointsColor: '#DFC89B'
  },
  wireframe_mesh: {
    id: 'wireframe_mesh',
    nameAr: 'شبكة الكوتور الهندسية',
    nameEn: 'Haute Couture Mesh',
    baseColor: '#141E17',
    waveColor: '#C8A96B',
    highlightColor: '#FFFFFF',
    speed: 0.8,
    height: 1.25,
    frequency: 0.45,
    wireframe: true,
    pointsColor: '#C8A96B'
  }
};

interface WavyBackground3DProps {
  className?: string;
  interactive?: boolean;
  showControls?: boolean;
}

export const WavyBackground3D: React.FC<WavyBackground3DProps> = ({
  className = '',
  interactive = true,
  showControls = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useRestaurant();

  const [currentPresetId, setCurrentPresetId] = useState<WavePresetId>('gold_silk');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);
  const [intensity, setIntensity] = useState<'gentle' | 'luxe' | 'dynamic'>('luxe');
  const [showConfigMenu, setShowConfigMenu] = useState(false);

  const preset = PRESETS[currentPresetId];

  // Three.js References to update uniforms smoothly without re-initializing WebGL context
  const uniformsRef = useRef<{
    uTime: { value: number };
    uMouse: { value: THREE.Vector2 };
    uTargetMouse: { value: THREE.Vector2 };
    uWaveSpeed: { value: number };
    uWaveHeight: { value: number };
    uWaveFrequency: { value: number };
    uColorBase: { value: THREE.Color };
    uColorWave: { value: THREE.Color };
    uColorHighlight: { value: THREE.Color };
    uWireframe: { value: number };
    uOpacity: { value: number };
  } | null>(null);

  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  // Multiplier for wave intensity
  const heightMultiplier = intensity === 'gentle' ? 0.65 : intensity === 'dynamic' ? 1.4 : 1.0;
  const speedMultiplier = intensity === 'gentle' ? 0.6 : intensity === 'dynamic' ? 1.35 : 1.0;

  // Handle Preset Changes
  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.uColorBase.value.set(preset.baseColor);
      uniformsRef.current.uColorWave.value.set(preset.waveColor);
      uniformsRef.current.uColorHighlight.value.set(preset.highlightColor);
      uniformsRef.current.uWaveSpeed.value = preset.speed * speedMultiplier;
      uniformsRef.current.uWaveHeight.value = preset.height * heightMultiplier;
      uniformsRef.current.uWaveFrequency.value = preset.frequency;
      uniformsRef.current.uWireframe.value = isWireframe || preset.wireframe ? 1.0 : 0.0;
    }
    if (materialRef.current) {
      materialRef.current.wireframe = isWireframe || preset.wireframe;
    }
  }, [preset, isWireframe, heightMultiplier, speedMultiplier]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x17211a, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, -2.4, 4.2);
    camera.rotation.x = 0.65;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 2. Custom Wave Shader Material
    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uTargetMouse: { value: new THREE.Vector2(0, 0) },
      uWaveSpeed: { value: preset.speed * speedMultiplier },
      uWaveHeight: { value: preset.height * heightMultiplier },
      uWaveFrequency: { value: preset.frequency },
      uColorBase: { value: new THREE.Color(preset.baseColor) },
      uColorWave: { value: new THREE.Color(preset.waveColor) },
      uColorHighlight: { value: new THREE.Color(preset.highlightColor) },
      uWireframe: { value: isWireframe || preset.wireframe ? 1.0 : 0.0 },
      uOpacity: { value: 0.95 }
    };
    uniformsRef.current = uniforms;

    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uWaveSpeed;
      uniform float uWaveHeight;
      uniform float uWaveFrequency;

      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vWorldPosition;
      varying vec3 vNormalVec;

      // Realistic layered waves
      float calculateWave(vec2 pos, float time) {
        float wave = sin(pos.x * uWaveFrequency + time * uWaveSpeed) * cos(pos.y * uWaveFrequency * 0.85 + time * uWaveSpeed * 0.9);
        wave += sin(pos.x * uWaveFrequency * 1.7 - time * uWaveSpeed * 1.2 + pos.y * 0.5) * 0.45;
        wave += cos(pos.y * uWaveFrequency * 2.3 + time * uWaveSpeed * 0.8 - pos.x * 0.3) * 0.3;
        
        // Interactive mouse ripple
        float distToMouse = distance(pos, uMouse * 8.0);
        float mouseRipple = sin(distToMouse * 2.5 - time * 3.5) * exp(-distToMouse * 0.35) * 0.85;
        wave += mouseRipple;

        return wave;
      }

      void main() {
        vUv = uv;
        vec3 pos = position;
        
        float elevation = calculateWave(pos.xy, uTime) * uWaveHeight;
        pos.z += elevation;
        vElevation = elevation;

        vec4 worldPos = modelMatrix * vec4(pos, 1.0);
        vWorldPosition = worldPos.xyz;
        vNormalVec = normalMatrix * normal;

        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `;

    const fragmentShader = `
      uniform vec3 uColorBase;
      uniform vec3 uColorWave;
      uniform vec3 uColorHighlight;
      uniform float uWireframe;
      uniform float uOpacity;

      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vWorldPosition;
      varying vec3 vNormalVec;

      void main() {
        // Map elevation to color gradients
        float mixWave = smoothstep(-1.2, 1.3, vElevation);
        vec3 color = mix(uColorBase, uColorWave, mixWave);

        // Peak crest luxury shimmer
        float crest = smoothstep(0.35, 1.25, vElevation);
        color = mix(color, uColorHighlight, crest * 0.72);

        // Subtle specular glow on wave slopes
        float specular = pow(clamp(dot(normalize(vNormalVec), vec3(0.0, 0.5, 1.0)), 0.0, 1.0), 3.0);
        color += uColorHighlight * specular * 0.28;

        // Vignette dropoff towards edges for cinematic depth
        float edgeFade = smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) *
                         smoothstep(0.0, 0.15, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

        gl_FragColor = vec4(color, uOpacity * edgeFade);
      }
    `;

    const planeGeometry = new THREE.PlaneGeometry(18, 12, 128, 96);
    const waveMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: isWireframe || preset.wireframe,
      transparent: true,
      side: THREE.DoubleSide
    });
    materialRef.current = waveMaterial;

    const waveMesh = new THREE.Mesh(planeGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI * 0.22;
    waveMesh.position.set(0, -0.6, 0);
    scene.add(waveMesh);

    // 3. Floating Gold Stardust Particles (Micron gold flakes)
    const particleCount = 90;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleOriginalZ = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10 - 0.5;
      const z = (Math.random() - 0.5) * 3 + 0.5;
      particlePositions[i * 3 + 2] = z;
      particleOriginalZ[i] = z;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(preset.pointsColor),
      size: 0.05,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // 4. Mouse / Touch Interaction Listeners
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);

      if (uniformsRef.current) {
        uniformsRef.current.uTargetMouse.value.set(x, y);
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // 5. Handle Resize smoothly
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      if (!isPlayingRef.current || document.hidden) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (uniformsRef.current) {
        uniformsRef.current.uTime.value = elapsedTime;

        // Smooth mouse interpolation (spring feel)
        uniformsRef.current.uMouse.value.lerp(
          uniformsRef.current.uTargetMouse.value,
          0.06
        );
      }

      // Slowly oscillate floating particles
      if (particlesRef.current) {
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 2] = particleOriginalZ[i] + Math.sin(elapsedTime * 0.8 + i) * 0.25;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    render();

    // 7. Lifecycle Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      resizeObserver.disconnect();

      planeGeometry.dispose();
      waveMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleNextPreset = useCallback(() => {
    const keys: WavePresetId[] = ['gold_silk', 'emerald_oasis', 'espresso_velvet', 'wireframe_mesh'];
    const idx = keys.indexOf(currentPresetId);
    const nextKey = keys[(idx + 1) % keys.length];
    setCurrentPresetId(nextKey);
  }, [currentPresetId]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Three.js Canvas Container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ touchAction: 'none' }}
      />

      {/* Floating 3D Controls Badge */}
      {showControls && (
        <div className="absolute bottom-4 end-4 z-20 flex items-center gap-2">
          {/* Quick Config Toggle Bar */}
          <div className="bg-[#17211A]/85 backdrop-blur-md border border-[#C8A96B]/40 rounded-full p-1.5 flex items-center gap-1.5 shadow-xl text-xs text-[#DFC89B]">
            <button
              onClick={handleNextPreset}
              className="px-2.5 py-1 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1.5 text-[11px] font-bold"
              title={language === 'ar' ? 'تغيير نمط التموج 3D' : 'Change 3D Wave Preset'}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span className="hidden sm:inline">
                {language === 'ar' ? preset.nameAr : preset.nameEn}
              </span>
              <span className="sm:hidden font-mono text-[10px]">3D</span>
              <RefreshCw className="w-3 h-3 text-[#C8A96B] opacity-75" />
            </button>

            <span className="w-px h-3.5 bg-white/20" />

            {/* Wireframe Mesh Toggle */}
            <button
              onClick={() => setIsWireframe(!isWireframe)}
              className={`p-1.5 rounded-full transition-colors ${
                isWireframe ? 'bg-[#C8A96B] text-[#202D23]' : 'hover:bg-white/10 text-[#DFC89B]'
              }`}
              title={language === 'ar' ? 'عرض شبكة النسيج ثلاثية الأبعاد' : 'Toggle 3D Wireframe Mesh'}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            {/* Play/Pause Motion */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#DFC89B] transition-colors"
              title={isPlaying ? (language === 'ar' ? 'إيقاف الحركة' : 'Pause') : (language === 'ar' ? 'تشغيل الحركة' : 'Play')}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <span className="w-px h-3.5 bg-white/20" />

            {/* Custom Intensity Switcher */}
            <button
              onClick={() => setShowConfigMenu(!showConfigMenu)}
              className="p-1.5 rounded-full hover:bg-white/10 text-[#DFC89B] transition-colors"
              title={language === 'ar' ? 'إعدادات الخلفية ثلاثية الأبعاد' : '3D Wave Settings'}
            >
              <Sliders className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Expanded Config Popover */}
          {showConfigMenu && (
            <div 
              className="absolute bottom-12 end-0 bg-[#202D23]/95 backdrop-blur-lg border border-[#C8A96B]/50 rounded-2xl p-4 shadow-2xl w-64 text-xs text-[#F7F1E7] space-y-3 z-30 animate-in fade-in zoom-in-95 duration-150"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#33251E] pb-2">
                <span className="font-bold text-[#DFC89B] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span>{language === 'ar' ? 'خلفية مموجة ثلاثية الأبعاد' : '3D Wave Engine'}</span>
                </span>
                <span className="text-[10px] bg-[#C8A96B]/20 text-[#DFC89B] px-1.5 py-0.5 rounded">WebGL</span>
              </div>

              {/* Presets List */}
              <div className="space-y-1">
                <span className="text-[10px] text-[#A89886] uppercase tracking-wider block">
                  {language === 'ar' ? 'طراز التموج واللون:' : 'Theme & Palette:'}
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {(Object.keys(PRESETS) as WavePresetId[]).map(key => (
                    <button
                      key={key}
                      onClick={() => setCurrentPresetId(key)}
                      className={`text-start px-2 py-1.5 rounded-lg border text-[11px] transition-all truncate ${
                        currentPresetId === key
                          ? 'border-[#C8A96B] bg-[#C8A96B]/20 text-[#DFC89B] font-bold'
                          : 'border-white/10 hover:bg-white/5 text-stone-300'
                      }`}
                    >
                      {language === 'ar' ? PRESETS[key].nameAr : PRESETS[key].nameEn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity Settings */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] text-[#A89886] uppercase tracking-wider block">
                  {language === 'ar' ? 'قوة وتموج الحركة:' : 'Wave Motion Dynamics:'}
                </span>
                <div className="flex gap-1 bg-black/30 p-1 rounded-lg border border-white/10 text-[10px]">
                  {(['gentle', 'luxe', 'dynamic'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => setIntensity(mode)}
                      className={`flex-1 py-1 rounded text-center transition-all ${
                        intensity === mode
                          ? 'bg-[#C8A96B] text-[#202D23] font-bold shadow-xs'
                          : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      {mode === 'gentle' ? (language === 'ar' ? 'هادئ' : 'Gentle') :
                       mode === 'luxe' ? (language === 'ar' ? 'ملكي' : 'Luxe') :
                       (language === 'ar' ? 'ديناميكي' : 'Dynamic')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

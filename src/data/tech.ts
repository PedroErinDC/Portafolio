export interface Tech {
  name: string;
  slug?: string;
  color: string;
  initial?: string;
  category: 'ai' | 'frameworks' | 'langs' | 'infra' | 'tools' | 'engine';
  /** True when logo brand fill is too dark for dark backgrounds — force white via CSS filter. */
  invertOnDark?: boolean;
}

export const tech: Record<string, Tech> = {
  yolo:        { name: 'YOLO 11', color: '#00BFFF', initial: 'Y', category: 'ai' },
  rfdetr:      { name: 'RF-DETR', color: '#FF6B6B', initial: 'R', category: 'ai' },
  pytorch:     { name: 'PyTorch', slug: 'pytorch', color: '#EE4C2C', category: 'ai' },
  cuda:        { name: 'CUDA', slug: 'nvidia', color: '#76B900', category: 'ai' },
  tensorrt:    { name: 'TensorRT', slug: 'nvidia', color: '#76B900', category: 'ai' },
  jetson:      { name: 'Jetson Nano', slug: 'nvidia', color: '#76B900', category: 'ai' },
  whisper:     { name: 'Whisper', slug: 'openai', color: '#412991', category: 'ai' },
  bgem3:       { name: 'BGE-M3', color: '#0EA5E9', initial: 'B', category: 'ai' },
  cvat:        { name: 'CVAT', color: '#3D85C6', initial: 'C', category: 'ai' },
  omniverse:   { name: 'Omniverse', slug: 'nvidia', color: '#76B900', category: 'ai' },
  qwen:        { name: 'Qwen2.5', color: '#615CED', initial: 'Q', category: 'ai' },
  hls:         { name: 'HLS', color: '#FF8C00', initial: 'H', category: 'ai' },

  react:       { name: 'React 19', slug: 'react', color: '#61DAFB', category: 'frameworks' },
  nextjs:      { name: 'Next.js', slug: 'nextdotjs', color: '#000000', category: 'frameworks' },
  astro:       { name: 'Astro', slug: 'astro', color: '#FF5D01', category: 'frameworks' },
  springboot:  { name: 'Spring Boot 3', slug: 'springboot', color: '#6DB33F', category: 'frameworks' },
  fastapi:     { name: 'FastAPI', slug: 'fastapi', color: '#009688', category: 'frameworks' },
  nodejs:      { name: 'Node.js 22', slug: 'nodedotjs', color: '#5FA04E', category: 'frameworks' },
  trpc:        { name: 'tRPC', slug: 'trpc', color: '#398CCB', category: 'frameworks' },
  drizzle:     { name: 'Drizzle ORM', color: '#C5F74F', initial: 'D', category: 'frameworks' },
  tailwind:    { name: 'Tailwind', slug: 'tailwindcss', color: '#38BDF8', category: 'frameworks' },

  python:      { name: 'Python', slug: 'python', color: '#3776AB', category: 'langs' },
  javascript:  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E', category: 'langs' },
  typescript:  { name: 'TypeScript', slug: 'typescript', color: '#3178C6', category: 'langs' },
  java:        { name: 'Java', slug: 'openjdk', color: '#F89820', category: 'langs', invertOnDark: true },
  csharp:      { name: 'C#', color: '#239120', initial: '#', category: 'langs' },
  kotlin:      { name: 'Kotlin', slug: 'kotlin', color: '#7F52FF', category: 'langs' },

  docker:      { name: 'Docker', slug: 'docker', color: '#2496ED', category: 'infra' },
  redis:       { name: 'Redis', slug: 'redis', color: '#FF4438', category: 'infra' },
  postgresql:  { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1', category: 'infra' },
  mysql:       { name: 'MySQL', slug: 'mysql', color: '#4479A1', category: 'infra' },
  milvus:      { name: 'Milvus', color: '#00A1EA', initial: 'M', category: 'infra' },
  ffmpeg:      { name: 'FFmpeg', slug: 'ffmpeg', color: '#007808', category: 'infra' },
  n8n:         { name: 'n8n', slug: 'n8n', color: '#EA4B71', category: 'infra' },
  redisstream: { name: 'Redis Streams', slug: 'redis', color: '#FF4438', category: 'infra' },

  claude:      { name: 'Claude', slug: 'claude', color: '#D97757', category: 'tools' },
  codex:       { name: 'Codex', slug: 'openai', color: '#10A37F', category: 'tools' },
  huggingface: { name: 'HuggingFace', slug: 'huggingface', color: '#FFD21E', category: 'tools' },
  claudecode:  { name: 'Claude Code', slug: 'claude', color: '#D97757', category: 'tools' },

  unity:       { name: 'Unity', slug: 'unity', color: '#000000', category: 'engine' },
  gamedesign:  { name: 'Game Design', color: '#A855F7', initial: 'G', category: 'engine' },
  tilemap:     { name: 'Tilemap 2D', color: '#F472B6', initial: 'T', category: 'engine' },
};

export const categoryLabel = {
  es: {
    ai: 'IA & Visión',
    frameworks: 'Frameworks',
    langs: 'Lenguajes',
    infra: 'Infraestructura',
    tools: 'Herramientas IA',
    engine: 'Game Engine',
  },
  en: {
    ai: 'AI & Vision',
    frameworks: 'Frameworks',
    langs: 'Languages',
    infra: 'Infrastructure',
    tools: 'AI Tools',
    engine: 'Game Engine',
  },
};

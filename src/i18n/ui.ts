export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.work': 'Proyectos profesionales',
    'nav.school': 'Proyectos escolares',
    'nav.contact': 'Contacto',

    'hero.role': 'Software Engineer',
    'hero.subrole': 'Computer Vision · Full-Stack · Edge AI',
    'hero.tagline': 'Construyo sistemas de visión computacional y plataformas web modernas. Especializado en IA aplicada, edge computing con NVIDIA Jetson y arquitecturas full-stack.',
    'hero.cta.work': 'Ver proyectos',
    'hero.cta.contact': 'Contactar',
    'hero.location': 'CDMX, México',
    'hero.status': 'Disponible para proyectos',

    'about.kicker': 'Sobre mí',
    'about.title': 'Egresado UNAM con foco en IA aplicada',
    'about.body': 'Licenciado en Informática por la UNAM con especialización en el ciclo completo de productos de software e Inteligencia Artificial. Construyo arquitecturas full-stack modernas y pipelines de visión computacional optimizados para edge computing (NVIDIA Jetson Nano). Alta velocidad de respuesta apoyado en IA generativa (Claude, Codex) para prototipado rápido.',

    'skills.kicker': 'Stack',
    'skills.title': 'Tecnologías que uso',
    'skills.ai': 'IA y Visión',
    'skills.frameworks': 'Frameworks',
    'skills.langs': 'Lenguajes',
    'skills.infra': 'Infraestructura',
    'skills.tools': 'Herramientas IA',

    'sections.work.kicker': 'Experiencia laboral',
    'sections.work.title': 'Proyectos profesionales',
    'sections.work.subtitle': 'Sistemas en producción construidos en Celestial Dynamics y otros equipos.',

    'sections.school.kicker': 'Experiencia académica',
    'sections.school.title': 'Proyectos escolares',
    'sections.school.subtitle': 'Trabajos universitarios en UNAM. Bases del aprendizaje técnico.',

    'project.viewDetails': 'Ver detalles',
    'project.tags.role': 'Rol',
    'project.tags.year': 'Año',
    'project.tags.stack': 'Stack',
    'project.tags.demo': 'Demo',
    'project.demo.note': 'Demo simplificado. No ejecuta los modelos reales por restricciones de hardware. Los datos son ilustrativos.',
    'project.architecture': 'Stack tecnológico',
    'project.highlights': 'Aportes principales',
    'project.back': '← Volver',

    'contact.kicker': 'Contacto',
    'contact.title': '¿Trabajamos juntos?',
    'contact.body': 'Disponible para colaboraciones y posiciones full-time. Respondo mensajes en menos de 24 horas.',
    'contact.email': 'Correo',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Ubicación',

    'footer.builtWith': 'Construido con Astro + Tailwind.',
    'footer.rights': 'Todos los derechos reservados.',

    'cotton.title': 'CEDIS Vision — Detección de Pallets y Sacos',
    'cotton.summary': 'Sistema de visión computacional para detección de pallets y conteo de sacos en centros de distribución, optimizado para edge computing en Jetson Nano.',
    'cotton.demoTitle': 'Demo: detección en tiempo simulado',
    'cotton.demoDesc': 'Bounding boxes precomputados sobre clip de cámara industrial. Modelo real: YOLO11-seg + RF-DETR con TensorRT FP16.',

    'publicvector.title': 'PublicVector — Monitoreo de Medios con NLP',
    'publicvector.summary': 'Plataforma que graba IPTV 24/7, transcribe con Whisper, busca keywords por embeddings semánticos y extrae contexto con LLM.',
    'publicvector.demoTitle': 'Demo: búsqueda semántica simulada',
    'publicvector.demoDesc': 'Búsqueda sobre transcripciones precargadas con datos ilustrativos. Pipeline real: Faster-Whisper large-v3 + BGE-M3 + Milvus + Qwen2.5.',

    'unity.title': 'Juego Educativo — Unity (UNAM)',
    'unity.summary': 'Videojuego de plataformas con múltiples niveles desarrollado como proyecto escolar en Unity con C#.',
    'unity.note': 'Próximamente: gameplay y screenshots.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.work': 'Professional projects',
    'nav.school': 'School projects',
    'nav.contact': 'Contact',

    'hero.role': 'Software Engineer',
    'hero.subrole': 'Computer Vision · Full-Stack · Edge AI',
    'hero.tagline': 'I build computer vision systems and modern web platforms. Focused on applied AI, edge computing on NVIDIA Jetson, and full-stack architectures.',
    'hero.cta.work': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.location': 'Mexico City, MX',
    'hero.status': 'Open to opportunities',

    'about.kicker': 'About',
    'about.title': 'UNAM graduate focused on applied AI',
    'about.body': 'BSc in Informatics from UNAM with focus on the full lifecycle of software and AI products. I build modern full-stack architectures and computer vision pipelines optimized for edge computing (NVIDIA Jetson Nano). I move fast with the help of generative AI tools (Claude, Codex) for rapid prototyping.',

    'skills.kicker': 'Stack',
    'skills.title': 'Tools I work with',
    'skills.ai': 'AI & Vision',
    'skills.frameworks': 'Frameworks',
    'skills.langs': 'Languages',
    'skills.infra': 'Infrastructure',
    'skills.tools': 'AI Tools',

    'sections.work.kicker': 'Work experience',
    'sections.work.title': 'Professional projects',
    'sections.work.subtitle': 'Production systems built at Celestial Dynamics and other teams.',

    'sections.school.kicker': 'Academic',
    'sections.school.title': 'School projects',
    'sections.school.subtitle': 'University work at UNAM. Foundations of my technical learning.',

    'project.viewDetails': 'View details',
    'project.tags.role': 'Role',
    'project.tags.year': 'Year',
    'project.tags.stack': 'Stack',
    'project.tags.demo': 'Demo',
    'project.demo.note': 'Simplified demo. Real models are not executed due to hardware constraints. Data shown is illustrative.',
    'project.architecture': 'Tech stack',
    'project.highlights': 'Key contributions',
    'project.back': '← Back',

    'contact.kicker': 'Contact',
    'contact.title': 'Let’s work together',
    'contact.body': 'Open to collaborations and full-time positions. I reply to messages within 24 hours.',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.location': 'Location',

    'footer.builtWith': 'Built with Astro + Tailwind.',
    'footer.rights': 'All rights reserved.',

    'cotton.title': 'CEDIS Vision — Pallet and Sack Detection',
    'cotton.summary': 'Computer vision system for pallet detection and sack counting in distribution centers, optimized for Jetson Nano edge computing.',
    'cotton.demoTitle': 'Demo: simulated real-time detection',
    'cotton.demoDesc': 'Pre-computed bounding boxes over an industrial camera clip. Real model: YOLO11-seg + RF-DETR with TensorRT FP16.',

    'publicvector.title': 'PublicVector — Media Monitoring with NLP',
    'publicvector.summary': 'Platform that records IPTV 24/7, transcribes with Whisper, searches keywords via semantic embeddings and extracts context with LLM.',
    'publicvector.demoTitle': 'Demo: simulated semantic search',
    'publicvector.demoDesc': 'Search over pre-loaded illustrative transcripts. Real pipeline: Faster-Whisper large-v3 + BGE-M3 + Milvus + Qwen2.5.',

    'unity.title': 'Educational Game — Unity (UNAM)',
    'unity.summary': 'Multi-level platformer videogame developed as a school project in Unity with C#.',
    'unity.note': 'Coming soon: gameplay and screenshots.',
  },
} as const;

export type UIKey = keyof typeof ui.es;

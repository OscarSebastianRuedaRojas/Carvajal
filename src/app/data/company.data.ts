import { CompanyInfo } from '../models/company.model';
import { Service } from '../models/service.model';

// Configurable WhatsApp Link Placeholder - Easily replaceable by the user
export const WHATSAPP_LINK_CONFIG = 'https://wa.me/573165164628?text=Hola%2C%20quisiera%20recibir%20asesor%C3%ADa%20financiera%20con%20Carvajal%20Contadores';

export const COMPANY_DATA: CompanyInfo = {
  companyName: 'CARVAJAL CONTADORES Y CONSULTORES',
  tagline: 'Soluciones contables, tributarias y financieras con precisión y enfoque estratégico.',
  responseTimeCommitment: 'Respuesta garantizada en menos de 24 horas hábiles',
  heroBadge: 'PRECISIÓN QUE IMPULSA DECISIONES',
  heroTitle: 'Transformamos información financiera en decisiones inteligentes.',
  heroDescription: 'Brindamos soluciones contables, tributarias y financieras confiables, estratégicas y adaptadas a las necesidades de tu empresa o negocio.',
  aboutBadge: 'QUIÉNES SOMOS',
  aboutTitle: 'Más que contadores, somos tus aliados estratégicos.',
  aboutDescription: 'En Carvajal Contadores y Consultores transformamos la complejidad financiera en claridad estratégica. Combinamos la precisión del control fiscal y la auditoría con una visión avanzada de la Gerencia Financiera.\n\nNo solo presentamos estados financieros: los interpretamos, evaluamos el desempeño del capital y diseñamos la ruta financiera que le permite a tu empresa maximizar su valor, proteger su liquidez y tomar decisiones de inversión con total certeza.',
  phonePlaceholder: '+57 316 516 4628',
  emailPlaceholder: 'correo@carvajalcontadores.com',
  addressPlaceholder: 'Dirección, Colombia',
  whatsappUrl: WHATSAPP_LINK_CONFIG,
  logoHorizontal: 'assets/images/LogoHorizontalBlanco.png',
  logoVertical: 'assets/images/LogoVerticalBlanco.png',
  socialLinks: {
    whatsapp: WHATSAPP_LINK_CONFIG,
    instagram: '#instagram-placeholder',
    facebook: '#facebook-placeholder',
    linkedin: '#linkedin-placeholder',
  },
  valuePropositions: [
    {
      title: 'VISIÓN ESTRATÉGICA',
      description: 'Analizamos la información financiera más allá de los números para convertirla en herramientas útiles para la toma de decisiones.',
      icon: 'trending-up'
    },
    {
      title: 'ACOMPAÑAMIENTO PERSONALIZADO',
      description: 'Trabajamos de manera cercana con la gerencia y los responsables de la empresa para comprender sus objetivos y necesidades.',
      icon: 'users'
    },
    {
      title: 'PRECISIÓN Y CONTROL',
      description: 'Combinamos el análisis financiero, el control fiscal y la auditoría para identificar riesgos y oportunidades.',
      icon: 'shield-check'
    },
    {
      title: 'ENFOQUE EN VALOR',
      description: 'Buscamos proteger la liquidez, optimizar el rendimiento financiero y contribuir al crecimiento sostenible de tu empresa.',
      icon: 'award'
    }
  ],
  methodologySteps: [
    {
      stepNumber: '01',
      title: 'ANALIZAMOS',
      description: 'Entendemos la situación financiera y operativa de tu empresa.'
    },
    {
      stepNumber: '02',
      title: 'DIAGNOSTICAMOS',
      description: 'Identificamos riesgos, oportunidades y puntos críticos que pueden afectar el desempeño del negocio.'
    },
    {
      stepNumber: '03',
      title: 'DISEÑAMOS',
      description: 'Construimos estrategias financieras y tributarias alineadas con los objetivos de la empresa.'
    },
    {
      stepNumber: '04',
      title: 'ACOMPAÑAMOS',
      description: 'Brindamos acompañamiento para facilitar la implementación y respaldar la toma de decisiones.'
    }
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'consultoria-financiera',
    slug: 'consultoria-financiera',
    title: 'CONSULTORÍA FINANCIERA',
    subtitle: 'Dirección financiera estratégica para potenciar la rentabilidad de su organización',
    description: 'Acompañamiento a la gerencia y juntas directivas en la toma de decisiones estratégicas, análisis de indicadores clave (KPIs), estructura de capital y optimización del rendimiento financiero.',
    fullDescription: 'Nuestra consultoría financiera acompaña a las juntas directivas y alta gerencia en la construcción de modelos financieros sostenibles. Evaluamos el desempeño operativo del negocio, estructuramos la arquitectura de capital óptima y convertimos los datos contables en información ejecutiva de alto impacto para la toma de decisiones estratégicas.',
    icon: 'bar-chart',
    linkText: 'SABER MÁS',
    metaTitle: 'Consultoría Financiera Estratégica | Carvajal Contadores',
    metaDescription: 'Acompañamiento a juntas directivas y alta gerencia en decisiones financieras, estructura de capital y optimización de rendimiento financiero.',
    benefits: [
      {
        title: 'Optimización de Capital',
        description: 'Mejoramos la estructura de deuda y capital propio para reducir el costo ponderado de capital (WACC).'
      },
      {
        title: 'Visión Ejecutiva de KPIs',
        description: 'Diseño de tableros financieros a la medida con indicadores de liquidez, rentabilidad y endeudamiento.'
      },
      {
        title: 'Respaldos a Juntas Directivas',
        description: 'Informes técnicos rigurosos para sustentar planes de expansión o reestructuración empresarial.'
      }
    ],
    deliverables: [
      {
        title: 'Diagnóstico Financiero Estratégico',
        description: 'Evaluación integral del estado financiero actual con recomendaciones prioritarias.'
      },
      {
        title: 'Dashboard de Indicadores Financieros',
        description: 'Herramienta de control mensual para el seguimiento del desempeño estratégico.'
      },
      {
        title: 'Sesiones Mensuales de Acompañamiento',
        description: 'Reuniones de asesoría estratégica con socios consultores para analizar resultados.'
      }
    ]
  },
  {
    id: 'evaluacion-proyectos',
    slug: 'evaluacion-proyectos-valoracion-empresas',
    title: 'EVALUACIÓN DE PROYECTOS Y VALORACIÓN DE EMPRESAS',
    subtitle: 'Modelación financiera rigurosa y determinación del valor real de su compañía',
    description: 'Análisis de viabilidad financiera para nuevos proyectos e inversiones (TIR, VPN/VNA), modelos de proyecciones a mediano/largo plazo y evaluación del valor económico del negocio.',
    fullDescription: 'Construimos modelos cuantitativos avanzados para respaldar decisiones de inversión, fusión, adquisición o levantamiento de capital. Evaluamos la rentabilidad esperada mediante metodologías reconocidas internacionalmente como Descuento de Flujos de Caja (DCF) y Múltiplos de Mercado.',
    icon: 'line-chart',
    linkText: 'SABER MÁS',
    metaTitle: 'Evaluación de Proyectos y Valoración de Empresas | Carvajal Contadores',
    metaDescription: 'Análisis de viabilidad financiera (TIR, VPN), valoración de empresas por flujos descontados y proyecciones a largo plazo.',
    benefits: [
      {
        title: 'Certeza en Inversiones',
        description: 'Calculamos el Valor Presente Neto (VPN) y la Tasa Interna de Retorno (TIR) ajustada por riesgo.'
      },
      {
        title: 'Valoración Objetiva e Independiente',
        description: 'Dictamen profesional imparcial para procesos de negociación de compraventa o socios.'
      },
      {
        title: 'Modelación de Escenarios',
        description: 'Simulaciones de sensibilidad ante variaciones macroeconómicas y operativas.'
      }
    ],
    deliverables: [
      {
        title: 'Informe Técnico de Valoración Empresarial',
        description: 'Documento completo con sustentación metodológica y rango de valor de la compañía.'
      },
      {
        title: 'Modelo Financiero Dinámico',
        description: 'Archivo ejecutable en Excel con premisas auditadas y proyección a 5-10 años.'
      },
      {
        title: 'Análisis de Sensibilidad y Riesgos',
        description: 'Evaluación del impacto de variables críticas sobre la viabilidad del proyecto.'
      }
    ]
  },
  {
    id: 'diagnostico-financiero',
    slug: 'diagnostico-financiero-flujo-caja',
    title: 'DIAGNÓSTICO FINANCIERO & CONTROL DE FLUJO DE CAJA',
    subtitle: 'Protección de la liquidez operativa y estructuración estratégica de costos',
    description: 'Análisis profundo de la salud financiera, control de tesorería, gestión del capital de trabajo y estructuración de costos para proteger la liquidez y mejorar el margen EBITDA.',
    fullDescription: 'La liquidez es el motor vital de cualquier compañía. Mediante nuestro diagnóstico financiero especializado identificamos fugas de capital de trabajo, optimizamos los ciclos de conversión de efectivo y rediseñamos la estructura de costos para maximizar la generación de EBITDA.',
    icon: 'pie-chart',
    linkText: 'SABER MÁS',
    metaTitle: 'Diagnóstico Financiero y Control de Flujo de Caja | Carvajal Contadores',
    metaDescription: 'Análisis de salud financiera, control de tesorería, optimización del capital de trabajo y mejora del margen EBITDA.',
    benefits: [
      {
        title: 'Protección de Liquidez',
        description: 'Garantizamos la disponibilidad de caja oportuna para atender obligaciones operativas y financieras.'
      },
      {
        title: 'Optimización de Capital de Trabajo',
        description: 'Reducción de días de cartera e inventario para liberar flujo de caja atrapado.'
      },
      {
        title: 'Eficiencia de Costos y EBITDA',
        description: 'Identificación de costos fijos y variables optimizables sin comprometer la calidad.'
      }
    ],
    deliverables: [
      {
        title: 'Plan de Manejo de Tesorería a 13 Semanas',
        description: 'Herramienta rotativa de control semanal para asegurar el flujo de caja disponible.'
      },
      {
        title: 'Matriz de Diagnóstico y Salud Financiera',
        description: 'Radiografía detallada del endeudamiento, capital de trabajo y rentabilidad.'
      },
      {
        title: 'Hoja de Ruta de Eficiencia Operativa',
        description: 'Recomendaciones concretas para la mejora inmediata del margen bruto y EBITDA.'
      }
    ]
  },
  {
    id: 'revisoria-fiscal',
    slug: 'revisoria-fiscal-auditoria-corporativa',
    title: 'REVISORÍA FISCAL Y AUDITORÍA CORPORATIVA',
    subtitle: 'Garantía de transparencia, control interno y estricto cumplimiento normativo',
    description: 'Dictamen independiente de estados financieros, auditoría del sistema de control interno, gestión de riesgos organizacionales y garantía de cumplimiento normativo.',
    fullDescription: 'Proporcionamos una mirada experta e independiente sobre los estados financieros y los sistemas de control interno de su organización. Aseguramos el cumplimiento riguroso de los marcos normativos contables y fiscales vigentes, mitigando riesgos legales y brindando confianza absoluta a socios y entidades de control.',
    icon: 'file-check',
    linkText: 'SABER MÁS',
    metaTitle: 'Revisoría Fiscal y Auditoría Corporativa | Carvajal Contadores',
    metaDescription: 'Dictamen independiente de estados financieros, auditoría de control interno, evaluación de riesgos y cumplimiento normativo.',
    benefits: [
      {
        title: 'Dictamen de Máxima Confianza',
        description: 'Aval profesional certificado sobre la razonabilidad de la información financiera.'
      },
      {
        title: 'Mitigación de Riesgos Organizacionales',
        description: 'Evaluación preventiva para detectar vulnerabilidades en los procesos contables y administrativos.'
      },
      {
        title: 'Tranquilidad Legal y Regulación',
        description: 'Garantía de cumplimiento estricto con las superintendencias y entidades reguladoras.'
      }
    ],
    deliverables: [
      {
        title: 'Dictamen de Revisoría Fiscal / Auditoría',
        description: 'Informe oficial sobre estados financieros de fin de ejercicio.'
      },
      {
        title: 'Cartas de Recomendaciones de Control Interno',
        description: 'Informes periódicos con observaciones técnicas sobre los controles vigentes.'
      },
      {
        title: 'Matriz de Riesgos y Hallazgos',
        description: 'Identificación oportuna de desviaciones con plan de acción correctivo.'
      }
    ]
  },
  {
    id: 'planeacion-tributaria',
    slug: 'planeacion-tributaria-estrategica',
    title: 'PLANEACIÓN TRIBUTARIA ESTRATÉGICA',
    subtitle: 'Optimización legal de la carga impositiva y protección de la utilidad neta',
    description: 'Diseño de estrategias fiscales dentro del marco legal vigente para optimizar la carga impositiva, proteger la utilidad neta y maximizar el flujo de efectivo libre.',
    fullDescription: 'La planeación tributaria legítima es una herramienta fundamental para proteger la rentabilidad y el patrimonio de las empresas. Diseñamos estructuras fiscales eficientes alineadas estrictamente con la legislación vigente, identificando beneficios tributarios, deducciones legales y oportunidades de optimización impositiva.',
    icon: 'calculator',
    linkText: 'SABER MÁS',
    metaTitle: 'Planeación Tributaria Estratégica | Carvajal Contadores',
    metaDescription: 'Diseño de estrategias fiscales legales para optimizar la carga impositiva, aprovechar beneficios tributarios y proteger la utilidad.',
    benefits: [
      {
        title: 'Carga Impositiva Eficiente',
        description: 'Aprovechamiento legal de deducciones, exenciones y descuentos tributarios autorizados por ley.'
      },
      {
        title: 'Prevención de Sanciones',
        description: 'Revisión exhaustiva previa a la presentación de declaraciones impositivas.'
      },
      {
        title: 'Protección de Utilidad Neta',
        description: 'Maximización del flujo de efectivo libre disponible para distribución o reinversión.'
      }
    ],
    deliverables: [
      {
        title: 'Plan Estratégico Tributario Anual',
        description: 'Ruta detallada de obligaciones fiscales con estimación optimizada de impuestos.'
      },
      {
        title: 'Auditoría Previa de Declaraciones',
        description: 'Revisión de consistencia de impuestos nacionales y municipales.'
      },
      {
        title: 'Calendario y Mapa de Riesgos Fiscales',
        description: 'Control de vencimientos y monitoreo de novedades normativas cambiantes.'
      }
    ]
  }
];

import { ToolInterface } from "@/domain/interfaces/tool.interface";

export const toolsDatabase: Record<string, ToolInterface> = {
  "maquina-espresso": {
    id: "maquina-espresso",
    name: "Máquina de Espresso",
    icon: "☕",
    description: "Calibración y uso de máquina de espresso",
    longDescription:
      "Aprende a calibrar correctamente tu máquina de espresso para obtener el café perfecto. La calibración adecuada es crucial para extraer todo el sabor y aroma del café.",
    estimatedTime: "15-20 min",
    difficulty: "Intermedio",
    mainImage: "/placeholder.svg?height=300&width=400",
    materials: [
      "Máquina de espresso",
      "Café molido fino",
      "Tamper",
      "Báscula de precisión",
      "Cronómetro",
      "Taza de espresso",
    ],
    steps: [
      {
        title: "Precalentamiento de la máquina",
        description:
          "Enciende la máquina y espera 15-20 minutos para que alcance la temperatura óptima (90-96°C). Esto asegura una extracción uniforme.",
        duration: "15-20 min",
        tip: "Una máquina bien precalentada es clave para un espresso perfecto.",
      },
      {
        title: "Calibrar la molienda",
        description:
          "Ajusta el molino para obtener una molienda fina pero no polvo. La molienda debe sentirse como arena fina entre los dedos.",
        duration: "5 min",
        warning:
          "Una molienda muy fina puede obstruir el filtro, muy gruesa resultará en extracción insuficiente.",
      },
      {
        title: "Dosificar el café",
        description:
          "Usa 18-20g de café molido para un shot doble. Pesa siempre el café para mantener consistencia.",
        duration: "2 min",
        tip: "La consistencia en la dosis es fundamental para resultados reproducibles.",
      },
      {
        title: "Nivelar y tampar",
        description:
          "Nivela el café en el portafiltro y aplica presión uniforme con el tamper (aproximadamente 15kg de presión).",
        duration: "1 min",
      },
      {
        title: "Extracción",
        description:
          "Inicia la extracción. Un shot doble debe tomar 25-30 segundos y producir 40-50ml de espresso.",
        duration: "25-30 seg",
        warning:
          "Si la extracción es muy rápida o muy lenta, ajusta la molienda.",
      },
    ],
    tips: [
      "Limpia regularmente el grupo de extracción para mantener el sabor puro",
      "Usa agua filtrada para mejorar el sabor y prolongar la vida de la máquina",
      "Mantén los granos de café en un recipiente hermético y úsalos dentro de 2 semanas",
      "La temperatura del agua debe estar entre 90-96°C para una extracción óptima",
      "Practica el tamping para desarrollar una técnica consistente",
    ],
    troubleshooting: [
      {
        problem: "El espresso sale muy rápido (menos de 20 segundos)",
        solution:
          "La molienda está muy gruesa. Ajusta el molino a una configuración más fina.",
      },
      {
        problem: "El espresso sale muy lento (más de 35 segundos)",
        solution:
          "La molienda está muy fina o has aplicado demasiada presión al tampar. Ajusta la molienda o reduce la presión.",
      },
      {
        problem: "El espresso tiene sabor amargo",
        solution:
          "Puede ser sobre-extracción. Prueba con molienda más gruesa o reduce el tiempo de extracción.",
      },
      {
        problem: "El espresso tiene sabor ácido",
        solution:
          "Puede ser sub-extracción. Prueba con molienda más fina o aumenta la temperatura del agua.",
      },
    ],
  },
  "prensa-francesa": {
    id: "prensa-francesa",
    name: "Prensa Francesa",
    icon: "🫖",
    description: "Técnica de preparación con prensa francesa",
    longDescription:
      "La prensa francesa es un método de preparación que permite una extracción completa de los aceites y sabores del café, resultando en una bebida rica y con cuerpo.",
    estimatedTime: "8-10 min",
    difficulty: "Fácil",
    mainImage: "/placeholder.svg?height=300&width=400",
    materials: [
      "Prensa francesa",
      "Café molido grueso",
      "Agua caliente (93-96°C)",
      "Báscula",
      "Cronómetro",
      "Cuchara de madera",
    ],
    steps: [
      {
        title: "Precalentar la prensa",
        description:
          "Enjuaga la prensa francesa con agua caliente para precalentarla. Esto ayuda a mantener la temperatura durante la preparación.",
        duration: "1 min",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Medir y moler el café",
        description:
          "Usa una proporción de 1:15 (café:agua). Para 500ml de agua, usa 33g de café. Muele el café en textura gruesa, similar a sal marina.",
        duration: "2 min",
        image: "/placeholder.svg?height=200&width=300",
        tip: "Una molienda gruesa evita que el café pase a través del filtro metálico.",
      },
      {
        title: "Agregar café y agua inicial",
        description:
          "Coloca el café molido en la prensa. Vierte agua caliente hasta cubrir el café (aproximadamente el doble del peso del café).",
        duration: "30 seg",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Primer tiempo de reposo",
        description:
          "Deja reposar por 30 segundos para permitir que el café se 'florezca' y libere CO2.",
        duration: "30 seg",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Agregar el resto del agua",
        description:
          "Vierte el resto del agua caliente lentamente, asegurándote de saturar todo el café uniformemente.",
        duration: "1 min",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Tiempo de extracción",
        description:
          "Coloca la tapa con el émbolo arriba (sin presionar) y deja reposar por 4 minutos exactos.",
        duration: "4 min",
        image: "/placeholder.svg?height=200&width=300",
        warning:
          "No presiones el émbolo todavía, solo déjalo reposar en la superficie.",
      },
      {
        title: "Presionar y servir",
        description:
          "Presiona el émbolo lentamente hacia abajo con presión constante. Sirve inmediatamente para evitar sobre-extracción.",
        duration: "30 seg",
        image: "/placeholder.svg?height=200&width=300",
        tip: "Si encuentras mucha resistencia, la molienda puede estar muy fina.",
      },
    ],
    tips: [
      "Usa agua a 93-96°C para una extracción óptima",
      "Remueve suavemente después de agregar toda el agua para asegurar saturación uniforme",
      "Sirve todo el café inmediatamente para evitar amargor por sobre-extracción",
      "Limpia bien el filtro metálico después de cada uso",
      "Experimenta con diferentes tiempos de extracción según tu preferencia de sabor",
    ],
    troubleshooting: [
      {
        problem: "El café tiene sedimento en la taza",
        solution:
          "La molienda está muy fina. Usa una molienda más gruesa o un filtro adicional al servir.",
      },
      {
        problem: "El café está muy débil",
        solution:
          "Aumenta la cantidad de café o el tiempo de extracción. También verifica la temperatura del agua.",
      },
      {
        problem: "El café está muy amargo",
        solution:
          "Reduce el tiempo de extracción o usa una molienda más gruesa. También verifica que no esté sobre-extrayendo.",
      },
      {
        problem: "Es difícil presionar el émbolo",
        solution:
          "La molienda está muy fina. Usa una molienda más gruesa la próxima vez.",
      },
    ],
  },
  "batidora-stand": {
    id: "batidora-stand",
    name: "Batidora de Pie",
    icon: "🥄",
    description: "Uso correcto de batidora de pie para repostería",
    longDescription:
      "La batidora de pie es una herramienta esencial en repostería. Conocer sus velocidades y accesorios te permitirá obtener mejores resultados en tus preparaciones.",
    estimatedTime: "5-10 min",
    difficulty: "Fácil",
    mainImage: "/placeholder.svg?height=300&width=400",
    materials: [
      "Batidora de pie",
      "Accesorios (pala, globo, gancho)",
      "Tazón de mezcla",
      "Ingredientes según receta",
    ],
    steps: [
      {
        title: "Seleccionar el accesorio correcto",
        description:
          "Pala plana para cremas y masas, globo para batir claras y cremas, gancho para masas con levadura.",
        duration: "1 min",
        image: "/placeholder.svg?height=200&width=300",
        tip: "Cada accesorio está diseñado para un tipo específico de mezcla.",
      },
      {
        title: "Ajustar la altura del tazón",
        description:
          "El accesorio debe estar cerca del fondo del tazón pero sin tocarlo. Ajusta la altura según sea necesario.",
        duration: "1 min",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Comenzar a velocidad baja",
        description:
          "Siempre inicia en velocidad 1 o 2 para evitar salpicaduras, especialmente con ingredientes secos.",
        duration: "30 seg",
        image: "/placeholder.svg?height=200&width=300",
        warning: "Nunca inicies a alta velocidad con ingredientes secos.",
      },
      {
        title: "Aumentar velocidad gradualmente",
        description:
          "Incrementa la velocidad según la receta. Velocidades altas solo para batir claras o crema.",
        duration: "Variable",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        title: "Parar para raspar",
        description:
          "Detén la batidora periódicamente para raspar los lados del tazón con una espátula.",
        duration: "30 seg",
        image: "/placeholder.svg?height=200&width=300",
        warning: "Siempre apaga la batidora antes de raspar el tazón.",
      },
    ],
    tips: [
      "No sobrebatas las mezclas, puede resultar en texturas densas",
      "Usa ingredientes a temperatura ambiente para mejor incorporación",
      "Cubre el tazón con un paño al batir ingredientes secos para evitar nubes de polvo",
      "Limpia los accesorios inmediatamente después del uso",
      "No uses velocidades altas por períodos prolongados para proteger el motor",
    ],
    troubleshooting: [
      {
        problem: "La mezcla no se incorpora uniformemente",
        solution:
          "Para la batidora y raspa los lados del tazón. Verifica que el accesorio esté a la altura correcta.",
      },
      {
        problem: "Ingredientes salpican fuera del tazón",
        solution:
          "Reduce la velocidad y usa el protector contra salpicaduras si tu modelo lo incluye.",
      },
      {
        problem: "La batidora se sobrecalienta",
        solution:
          "Apaga la batidora y déjala enfriar. No uses velocidades altas por más de 10 minutos continuos.",
      },
    ],
  },
};

export const getToolById = (toolId: string) => {
  return toolsDatabase[toolId as keyof typeof toolsDatabase] || null;
};

export const getToolsForRecipe = (materials: string[]) => {
  const tools: string[] = [];

  materials.forEach((material) => {
    const materialLower = material.toLowerCase();

    if (
      materialLower.includes("máquina de espresso") ||
      materialLower.includes("cafetera espresso")
    ) {
      tools.push("maquina-espresso");
    }
    if (
      materialLower.includes("prensa francesa") ||
      materialLower.includes("french press")
    ) {
      tools.push("prensa-francesa");
    }
    if (
      materialLower.includes("batidora") &&
      (materialLower.includes("pie") || materialLower.includes("stand"))
    ) {
      tools.push("batidora-stand");
    }
  });

  return tools;
};

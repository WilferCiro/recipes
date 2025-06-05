import { Button } from "@/components/ui/button";
import { RecipeInterface } from "@/domain/interfaces/recipe.interface";
import { ChefHat, Pause, Play, RotateCcw, Timer } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  recipe: RecipeInterface;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const RecipeSteps = ({ recipe }: Props) => {
  const [timers, setTimers] = useState<Record<number, number>>({});
  const [activeTimers, setActiveTimers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const newTimers = { ...prev };
        Object.keys(activeTimers).forEach((stepIndex) => {
          if (activeTimers[Number(stepIndex)]) {
            newTimers[Number(stepIndex)] =
              (newTimers[Number(stepIndex)] || 0) + 1;
          }
        });
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTimers]);

  const startTimer = (stepIndex: number) => {
    setActiveTimers((prev) => ({
      ...prev,
      [stepIndex]: true,
    }));
  };

  const pauseTimer = (stepIndex: number) => {
    setActiveTimers((prev) => ({
      ...prev,
      [stepIndex]: false,
    }));
  };

  const resetTimer = (stepIndex: number) => {
    setTimers((prev) => ({
      ...prev,
      [stepIndex]: 0,
    }));
    setActiveTimers((prev) => ({
      ...prev,
      [stepIndex]: false,
    }));
  };

  return (
    <div className="rounded-lg shadow-sm border p-6 w-full">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <ChefHat className="w-5 h-5" /> Preparación
      </h3>

      <div className="space-y-4 noPrint">
        {recipe.steps.map((step, index) => (
          <div
            key={index}
            className={`group relative bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border-2 transition-all duration-200 ${
              activeTimers[index]
                ? "border-green-400 bg-green-50 dark:bg-green-900/20"
                : "border-gray-100 dark:border-gray-600 hover:border-gray-200 dark:hover:border-gray-500 hover:shadow-md"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    activeTimers[index]
                      ? "bg-green-400 text-white"
                      : "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-500"
                  }`}
                >
                  {index + 1}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
                  {step}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
                        activeTimers[index]
                          ? "bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700"
                          : "bg-gray-50 dark:bg-gray-600 border border-gray-200 dark:border-gray-500"
                      }`}
                    >
                      <Timer className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      <span className="font-mono text-sm font-medium dark:text-gray-200">
                        {formatTime(timers[index] || 0)}
                      </span>
                    </div>

                    {activeTimers[index] && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Activo
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    {!activeTimers[index] ? (
                      <Button
                        aria-label="Empezar cronómetro"
                        size="sm"
                        variant="ghost"
                        onClick={() => startTimer(index)}
                        className="h-8 w-8 p-0 hover:bg-green-100 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400"
                      >
                        <Play className="w-3.5 h-3.5" />
                      </Button>
                    ) : (
                      <Button
                        aria-label="Pausar cronómetro"
                        size="sm"
                        variant="ghost"
                        onClick={() => pauseTimer(index)}
                        className="h-8 w-8 p-0 hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-400"
                      >
                        <Pause className="w-3.5 h-3.5" />
                      </Button>
                    )}

                    <Button
                      aria-label="Reiniciar cronómetro"
                      size="sm"
                      variant="ghost"
                      onClick={() => resetTimer(index)}
                      className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {activeTimers[index] && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 dark:bg-gray-600 rounded-b-xl overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-1000 ease-out"
                  style={{
                    width: `${Math.min(
                      ((timers[index] || 0) / 300) * 100,
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="print w-full">
        <ol className="p-0">
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeSteps;

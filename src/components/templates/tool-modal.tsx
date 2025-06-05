"use client";

import { useState } from "react";
import Image from "next/image";
import { Timer, AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ToolInterface,
  ToolStepInterface,
  ToolTroubleshootingInterface,
} from "@/domain/interfaces/tool.interface";

interface ToolModalProps {
  tool: ToolInterface;
  title: string;
  icon: React.ReactNode;
}

export function ToolModal({ tool, title, icon }: ToolModalProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  if (!tool) return null;

  const toggleStepComplete = (stepIndex: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepIndex)
        ? prev.filter((i) => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-start gap-2"
        >
          <span className="text-lg">{icon}</span>
          <span>{title}</span>
          <HelpCircle className="w-4 h-4 ml-auto" />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-4xl h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <span className="text-3xl">{tool.icon}</span>
            <div>
              <h2 className="text-xl font-bold">{tool.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
                {tool.description}
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="guide" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guide">Guía de uso</TabsTrigger>
            <TabsTrigger value="tips">Consejos</TabsTrigger>
            <TabsTrigger value="troubleshooting">
              Solución de problemas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guide" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Image
                      src={
                        tool.mainImage ||
                        "/placeholder.svg?height=300&width=400"
                      }
                      alt={tool.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="gap-1">
                        <Timer className="w-3 h-3" />
                        {tool.estimatedTime}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {tool.difficulty}
                      </Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {tool.longDescription}
                    </p>

                    {tool.materials && (
                      <div>
                        <h4 className="font-semibold mb-2">
                          Materiales necesarios:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {tool.materials.map(
                            (material: string, index: number) => (
                              <li
                                key={index}
                                className="text-gray-600 dark:text-gray-400"
                              >
                                {material}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pasos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Pasos a seguir:</h3>
              {tool.steps.map((step: ToolStepInterface, index: number) => (
                <Card
                  key={index}
                  className={`transition-all duration-200 ${
                    completedSteps.includes(index)
                      ? "border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800"
                      : "hover:shadow-md"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => toggleStepComplete(index)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                            completedSteps.includes(index)
                              ? "bg-green-500 text-white"
                              : "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/20 dark:text-purple-300"
                          }`}
                        >
                          {completedSteps.includes(index) ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            index + 1
                          )}
                        </button>
                      </div>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-lg">
                            {step.title}
                          </h4>
                          {step.duration && (
                            <Badge variant="secondary" className="gap-1">
                              <Timer className="w-3 h-3" />
                              {step.duration}
                            </Badge>
                          )}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300">
                          {step.description}
                        </p>

                        {step.image && (
                          <div className="mt-3">
                            <Image
                              src={
                                step.image ||
                                "/placeholder.svg?height=200&width=300"
                              }
                              alt={`Paso ${index + 1}`}
                              width={300}
                              height={200}
                              className="rounded-lg border"
                            />
                          </div>
                        )}

                        {step.warning && (
                          <div className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                            <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                              {step.warning}
                            </p>
                          </div>
                        )}

                        {step.tip && (
                          <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                            <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0 mt-0.5"></div>
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                              <strong>Consejo:</strong> {step.tip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <h3 className="text-lg font-semibold">Consejos profesionales</h3>
            {tool.tips?.map((tip: string, index: number) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-purple-700 dark:text-purple-300">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="troubleshooting" className="space-y-4">
            <h3 className="text-lg font-semibold">
              Solución de problemas comunes
            </h3>
            {tool.troubleshooting?.map(
              (item: ToolTroubleshootingInterface, index: number) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                      {item.problem}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.solution}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Progreso: {completedSteps.length} de {tool.steps.length} pasos
            completados
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

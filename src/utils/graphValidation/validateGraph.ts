import { Edge, Node } from "@xyflow/react";

import {
  ExpectedConnection,
  getGraphSolution,
  normalizeStepName,
} from "../../constans/graphSolutions";

export interface EdgeValidationResult {
  edgeId: string;
  isCorrect: boolean;
  hint?: string;
  expectedLabel?: string;
  actualLabel?: string;
  fromNode?: string;
  toNode?: string;
}

export interface GraphValidationResult {
  isValid: boolean;
  score: number; // Percentage of correct connections
  totalExpected: number;
  correctConnections: number;
  incorrectConnections: number;
  missingConnections: ExpectedConnection[];
  edgeResults: EdgeValidationResult[];
  feedback: string;
}

/**
 * Validates the user's graph against the expected solution
 */
export const validateGraph = (
  selectedTopic: string,
  nodes: Node[],
  edges: Edge[]
): GraphValidationResult => {
  const solution = getGraphSolution(selectedTopic);

  if (!solution) {
    return {
      isValid: false,
      score: 0,
      totalExpected: 0,
      correctConnections: 0,
      incorrectConnections: 0,
      missingConnections: [],
      edgeResults: [],
      feedback: "Решение для данной темы не найдено",
    };
  }

  const { expectedConnections } = solution;
  const edgeResults: EdgeValidationResult[] = [];
  const foundExpectedConnections = new Set<string>();

  // Create a map of node IDs to their labels for quick lookup
  const nodeMap = new Map<string, string>();
  nodes.forEach((node) => {
    const label = (node.data as any)?.label || "";
    nodeMap.set(node.id, label);
  });

  // Validate each user edge
  edges.forEach((edge) => {
    const sourceLabel = nodeMap.get(edge.source) || "";
    const targetLabel = nodeMap.get(edge.target) || "";
    const edgeData = edge.data as any;
    const edgeLabel = edgeData?.label || edgeData?.connectionType || "";

    // Find matching expected connection
    const matchingExpected = expectedConnections.find((expected) => {
      const sourceMatches =
        normalizeStepName(sourceLabel) === normalizeStepName(expected.from);
      const targetMatches =
        normalizeStepName(targetLabel) === normalizeStepName(expected.to);
      return sourceMatches && targetMatches;
    });

    if (matchingExpected) {
      // Check if the label is also correct
      const labelMatches =
        normalizeStepName(edgeLabel) ===
        normalizeStepName(matchingExpected.label);

      if (labelMatches) {
        // Completely correct connection
        edgeResults.push({
          edgeId: edge.id,
          isCorrect: true,
          fromNode: sourceLabel,
          toNode: targetLabel,
          actualLabel: edgeLabel,
        });
        foundExpectedConnections.add(
          `${normalizeStepName(matchingExpected.from)}->${normalizeStepName(matchingExpected.to)}`
        );
      } else {
        // Connection exists but wrong label
        edgeResults.push({
          edgeId: edge.id,
          isCorrect: false,
          hint: `Связь от "${sourceLabel}" к "${targetLabel}" правильная, но неверная подпись. Ожидается: "${matchingExpected.label}"`,
          expectedLabel: matchingExpected.label,
          actualLabel: edgeLabel,
          fromNode: sourceLabel,
          toNode: targetLabel,
        });
      }
    } else {
      // Connection doesn't match any expected connection
      edgeResults.push({
        edgeId: edge.id,
        isCorrect: false,
        hint: `Связь от "${sourceLabel}" к "${targetLabel}" не соответствует ожидаемой последовательности. Проверьте правильность соединения.`,
        actualLabel: edgeLabel,
        fromNode: sourceLabel,
        toNode: targetLabel,
      });
    }
  });

  // Find missing connections
  const missingConnections = expectedConnections.filter((expected) => {
    const key = `${normalizeStepName(expected.from)}->${normalizeStepName(expected.to)}`;
    return !foundExpectedConnections.has(key);
  });

  // Calculate results
  const correctConnections = edgeResults.filter((r) => r.isCorrect).length;
  const incorrectConnections = edgeResults.filter((r) => !r.isCorrect).length;
  const totalExpected = expectedConnections.length;
  const score =
    totalExpected > 0 ? (correctConnections / totalExpected) * 100 : 0;
  const isValid =
    correctConnections === totalExpected && edges.length === totalExpected;

  // Generate feedback message
  let feedback = "";
  if (isValid) {
    feedback = `🎉 Отлично! Все связи установлены правильно! Вы получили ${score.toFixed(0)}%.`;
  } else if (score >= 75) {
    feedback = `👍 Хорошо! Правильных связей: ${correctConnections} из ${totalExpected}. Исправьте оставшиеся ошибки.`;
  } else if (score >= 50) {
    feedback = `📝 Неплохо! Правильных связей: ${correctConnections} из ${totalExpected}. Проверьте подсказки и улучшите результат.`;
  } else if (score > 0) {
    feedback = `💡 Начало положено! Правильных связей: ${correctConnections} из ${totalExpected}. Внимательно изучите подсказки.`;
  } else {
    feedback = `❌ Пока нет правильных связей. Изучите описание процесса и попробуйте снова.`;
  }

  return {
    isValid,
    score,
    totalExpected,
    correctConnections,
    incorrectConnections,
    missingConnections,
    edgeResults,
    feedback,
  };
};

/**
 * Helper function to get validation result for a specific edge
 */
export const getEdgeValidationState = (
  edgeId: string,
  validationResult: GraphValidationResult | null
): "correct" | "incorrect" | "unchecked" => {
  if (!validationResult) return "unchecked";

  const edgeResult = validationResult.edgeResults.find(
    (r) => r.edgeId === edgeId
  );

  if (!edgeResult) return "unchecked";
  return edgeResult.isCorrect ? "correct" : "incorrect";
};

/**
 * Helper function to get hint for a specific edge
 */
export const getEdgeHint = (
  edgeId: string,
  validationResult: GraphValidationResult | null
): string | undefined => {
  if (!validationResult) return undefined;

  const edgeResult = validationResult.edgeResults.find(
    (r) => r.edgeId === edgeId
  );

  return edgeResult?.hint;
};

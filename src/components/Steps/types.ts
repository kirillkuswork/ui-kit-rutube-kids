export type StepsProps = {
    isLoading?: boolean
    stepsCount?: 3 | 4 | 5
    steps: string[];
    currentStep: number;
};

export type StepProps = {
    isLoading?: boolean;
    stepNumber: number;
    isActive: boolean;
    title: string;
};

import { Timestamp } from "firebase/firestore";

interface PercentCriteria {
    type: "percent";
    value: number;
};

interface PointCriteria {
    type: "points";
    value: number;
};

type PassCriteria = PercentCriteria | PointCriteria;


interface Assignment {
    assignmentID: string;
    name: string;
    pointsPossible: number;
    pointsGiven?: number;
    createdAt: Timestamp;
    user: User;
}

interface Course {
    courseID: string;
    name: string;
    description: string;
    links: { [name: string]: string};
    passCriteria: PassCriteria;
    maxPoints: number;
    owner: string;
    isPublic: boolean;
    assignments: Array<Assignment>;
    cloneFrom?: string;
}

interface User {
    userID: string;
    createdAt: Timestamp;
}

export type {Course, User, Assignment};
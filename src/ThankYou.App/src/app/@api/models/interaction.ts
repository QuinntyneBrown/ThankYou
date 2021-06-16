import { Participant } from "./participant";

export type Interaction = {
    interactionId: string,
    description: string,
    participants: Participant[],
    date: string
};

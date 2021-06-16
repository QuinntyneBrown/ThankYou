using System;
using System.Collections.Generic;

namespace ThankYou.Api.Models
{
    public class Interaction
    {
        public Guid InteractionId { get; private set; }
        public List<InteractionParticipant> InteractionParticipants { get; private set; } = new();
        public DateTime Date { get; private set; } = DateTime.UtcNow;
        public string Description { get; private set; }

        public Interaction(string description, Participant participant)
        {
            InteractionParticipants.Add(new(participant.ParticipantId));
            Description = description;
        }

        public Interaction(Participant participant, string description)
        {
            InteractionParticipants.Add(new(participant.ParticipantId));
            Description = description;
        }

        public Interaction(List<Participant> participants, string description)
        {
            foreach (var participant in participants)
            {
                InteractionParticipants.Add(new(participant.ParticipantId));
            }

            Description = description;
        }

        private Interaction()
        {

        }

        public void UpdateDescription(string description)
        {
            Description = description;
        }
    }
}
